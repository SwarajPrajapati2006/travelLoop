-- Clear existing data
TRUNCATE activities, cities, trip_notes, checklist_items, expenses, trip_sections, trips, users CASCADE;

-- Seed Cities
INSERT INTO cities (name, country, region, cost_index, popularity, image_url) VALUES
('Paris', 'France', 'Europe', 4, 5, 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'),
('London', 'UK', 'Europe', 4, 5, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad'),
('Tokyo', 'Japan', 'Asia', 4, 5, 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf'),
('New York', 'USA', 'North America', 5, 5, 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9'),
('Rome', 'Italy', 'Europe', 3, 5, 'https://images.unsplash.com/photo-1552832230-c0197dd311b5'),
('Barcelona', 'Spain', 'Europe', 3, 4, 'https://images.unsplash.com/photo-1583422409516-2895a77efded'),
('Bangkok', 'Thailand', 'Asia', 2, 5, 'https://images.unsplash.com/photo-1508009603885-50cf7c579367'),
('Dubai', 'UAE', 'Middle East', 5, 5, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c'),
('Singapore', 'Singapore', 'Asia', 4, 5, 'https://images.unsplash.com/photo-1525625293386-3fb0ad7c1ec6'),
('Bali', 'Indonesia', 'Asia', 2, 5, 'https://images.unsplash.com/photo-1537996194471-e657df975ab4');

-- Seed Activities (3 per city)
-- Paris
INSERT INTO activities (city_id, name, type, cost, duration_hours, description) VALUES
(1, 'Eiffel Tower Visit', 'sightseeing', 25.00, 2, 'Iconic iron lattice tower on the Champ de Mars.'),
(1, 'Louvre Museum Tour', 'culture', 17.00, 4, 'The world''s largest art museum and a historic monument.'),
(1, 'Seine River Cruise', 'adventure', 15.00, 1, 'Bateaux-Mouches cruise along the heart of Paris.');
-- London
INSERT INTO activities (city_id, name, type, cost, duration_hours, description) VALUES
(2, 'London Eye', 'sightseeing', 30.00, 1, 'Giant Ferris wheel on the South Bank of the River Thames.'),
(2, 'British Museum', 'culture', 0.00, 3, 'Public institution dedicated to human history, art and culture.'),
(2, 'Borough Market Food Tour', 'food', 40.00, 2, 'One of the largest and oldest food markets in London.');
-- Tokyo
INSERT INTO activities (city_id, name, type, cost, duration_hours, description) VALUES
(3, 'Shibuya Crossing Walk', 'sightseeing', 0.00, 0.5, 'The world''s busiest pedestrian crossing.'),
(3, 'Robot Restaurant Show', 'culture', 80.00, 2, 'High-energy show with robots, dragons and neon lights.'),
(3, 'Tsukiji Outer Market Sushi', 'food', 50.00, 1.5, 'Fresh seafood and traditional Japanese breakfast.');

-- Seed User
INSERT INTO users (id, first_name, last_name, email, password_hash) VALUES
(1, 'Demo', 'User', 'demo@traveloop.com', '$2a$10$7vC/Y/lO.D/qJ/v/w/k.O.a/m.l/m/l/m/l/m/l/m/l/m/l/m/l/m/l/m/l/m'); -- password: demo123

-- Seed Trips for User 1
-- Trip 1: Europe 2025 (Upcoming)
INSERT INTO trips (id, user_id, name, place, start_date, end_date, status, is_public) VALUES
(1, 1, 'Summer Europe Trip', 'Paris & London', '2025-06-01', '2025-06-15', 'upcoming', true);

-- Trip 2: Asia 2024 (Completed)
INSERT INTO trips (id, user_id, name, place, start_date, end_date, status, is_public) VALUES
(2, 1, 'Japan Discovery', 'Tokyo', '2024-03-10', '2024-03-20', 'completed', false);

-- Seed Sections for Trip 1
INSERT INTO trip_sections (trip_id, title, description, date_from, date_to, budget, section_type, order_index) VALUES
(1, 'Hotel Pullman Paris', 'Stay near Eiffel Tower', '2025-06-01', '2025-06-05', 1200.00, 'hotel', 1),
(1, 'Eurostar to London', 'Train across the channel', '2025-06-05', '2025-06-05', 150.00, 'transport', 2);

-- Seed Checklist for Trip 1
INSERT INTO checklist_items (trip_id, category, item_name, is_checked) VALUES
(1, 'documents', 'Passport', true),
(1, 'documents', 'Travel Insurance', false),
(1, 'electronics', 'Universal Adapter', false);

-- Seed Notes for Trip 1
INSERT INTO trip_notes (trip_id, day_number, content) VALUES
(1, 1, 'Arrive at CDG airport, take RER B to city center.'),
(1, 5, 'Eurostar departs from Gare du Nord at 10:30 AM.');

-- Seed Expenses for Trip 1
INSERT INTO expenses (trip_id, section_id, category, description, qty, unit, unit_cost, amount) VALUES
(1, 1, 'Accommodation', 'Pullman Paris Deposit', 1, 'booking', 400.00, 400.00);

-- Reset Serial Sequences
SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));
SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips));
SELECT setval('cities_id_seq', (SELECT MAX(id) FROM cities));
SELECT setval('activities_id_seq', (SELECT MAX(id) FROM activities));
