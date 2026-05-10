const db = require('../config/db');

exports.updateProfile = async (req, res, next) => {
  const { first_name, last_name, phone, city, country, profile_pic } = req.body;
  try {
    const result = await db.query(
      'UPDATE users SET first_name = $1, last_name = $2, phone = $3, city = $4, country = $5, profile_pic = $6 WHERE id = $7 RETURNING id, first_name, last_name, email, phone, city, country, profile_pic',
      [first_name, last_name, phone, city, country, profile_pic, req.user.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const result = await db.query(
      'SELECT id, first_name, last_name, email, phone, city, country, profile_pic FROM users WHERE id = $1',
      [req.user.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};
