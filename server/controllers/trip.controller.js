const db = require('../config/db');

const VALID_STATUSES = ['upcoming', 'ongoing', 'completed'];

exports.getAllTrips = async (req, res, next) => {
  const { status } = req.query;
  try {
    let query = `
      SELECT t.*, 
        t.place as destination,
        t.start_date as "startDate",
        t.end_date as "endDate",
        COALESCE(s.total_budget, t.budget, 0) as total_budget, 
        COALESCE(e.total_spent, 0) as total_spent 
      FROM trips t
      LEFT JOIN (
        SELECT trip_id, SUM(budget) as total_budget 
        FROM trip_sections 
        GROUP BY trip_id
      ) s ON t.id = s.trip_id
      LEFT JOIN (
        SELECT trip_id, SUM(amount) as total_spent 
        FROM expenses 
        GROUP BY trip_id
      ) e ON t.id = e.trip_id
      WHERE t.user_id = $1
    `;
    const params = [req.user.id];

    if (status) {
      if (!VALID_STATUSES.includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
      }
      query += ' AND t.status = $2';
      params.push(status);
    }

    query += ' ORDER BY t.created_at DESC';
    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.createTrip = async (req, res, next) => {
  // Accept both frontend (camelCase/destination) and backend (snake_case/place) field names
  const {
    name,
    place, destination,
    start_date, startDate,
    end_date, endDate,
    status,
    cover_photo, coverImage,
    is_public,
    budget,
    travelers,
    currency,
    description,
  } = req.body;

  const resolvedPlace = place || destination;
  const resolvedStartDate = start_date || startDate;
  const resolvedEndDate = end_date || endDate;
  const resolvedCoverPhoto = cover_photo || coverImage;

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  try {
    const result = await db.query(
      `INSERT INTO trips 
        (user_id, name, place, start_date, end_date, status, cover_photo, is_public, budget, travelers, currency, description) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [
        req.user.id, name, resolvedPlace, resolvedStartDate, resolvedEndDate,
        status || 'upcoming', resolvedCoverPhoto, is_public || false,
        budget || null, travelers || null, currency || '$', description || null
      ]
    );
    const row = result.rows[0];
    res.status(201).json({
      ...row,
      destination: row.place,
      startDate: row.start_date,
      endDate: row.end_date,
    });
  } catch (err) {
    next(err);
  }
};

exports.getTripById = async (req, res, next) => {
  try {
    const result = await db.query(`
      SELECT t.*, 
        t.place as destination,
        t.start_date as "startDate",
        t.end_date as "endDate",
        COALESCE(s.total_budget, t.budget, 0) as total_budget, 
        COALESCE(e.total_spent, 0) as total_spent 
      FROM trips t
      LEFT JOIN (
        SELECT trip_id, SUM(budget) as total_budget 
        FROM trip_sections 
        GROUP BY trip_id
      ) s ON t.id = s.trip_id
      LEFT JOIN (
        SELECT trip_id, SUM(amount) as total_spent 
        FROM expenses 
        GROUP BY trip_id
      ) e ON t.id = e.trip_id
      WHERE t.id = $1
    `, [req.params.id]);

    const trip = result.rows[0];
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    if (!trip.is_public) {
      if (!req.user || trip.user_id !== req.user.id) {
        return res.status(403).json({ message: 'Access denied' });
      }
    }

    res.json(trip);
  } catch (err) {
    next(err);
  }
};

exports.updateTrip = async (req, res, next) => {
  const {
    name,
    place, destination,
    start_date, startDate,
    end_date, endDate,
    status,
    cover_photo, coverImage,
    is_public,
    budget,
    travelers,
    currency,
    description,
  } = req.body;

  const resolvedPlace = place || destination;
  const resolvedStartDate = start_date || startDate;
  const resolvedEndDate = end_date || endDate;
  const resolvedCoverPhoto = cover_photo || coverImage;

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  try {
    const result = await db.query(
      `UPDATE trips SET 
        name = COALESCE($1, name), 
        place = COALESCE($2, place), 
        start_date = COALESCE($3, start_date), 
        end_date = COALESCE($4, end_date), 
        status = COALESCE($5, status), 
        cover_photo = COALESCE($6, cover_photo), 
        is_public = COALESCE($7, is_public),
        budget = COALESCE($8, budget),
        travelers = COALESCE($9, travelers),
        currency = COALESCE($10, currency),
        description = COALESCE($11, description)
       WHERE id = $12 AND user_id = $13 RETURNING *`,
      [name, resolvedPlace, resolvedStartDate, resolvedEndDate, status, resolvedCoverPhoto, is_public,
       budget, travelers, currency, description, req.params.id, req.user.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    const row = result.rows[0];
    res.json({
      ...row,
      destination: row.place,
      startDate: row.start_date,
      endDate: row.end_date,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const result = await db.query('DELETE FROM trips WHERE id = $1 AND user_id = $2 RETURNING *', [req.params.id, req.user.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.json({ message: 'Trip deleted' });
  } catch (err) {
    next(err);
  }
};

exports.getPublicTrips = async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT t.*, t.place as destination, u.first_name, u.last_name 
       FROM trips t JOIN users u ON t.user_id = u.id 
       WHERE t.is_public = true ORDER BY t.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};
