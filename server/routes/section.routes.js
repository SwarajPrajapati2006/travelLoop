const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/section.controller');
const authMiddleware = require('../middleware/auth.middleware');
const optionalAuth = require('../middleware/optionalAuth.middleware');

// Base: /api/sections
router.get('/trip/:tripId', optionalAuth, sectionController.getSections);

router.use(authMiddleware);
router.post('/trip/:tripId', sectionController.addSection);
router.put('/:id', sectionController.updateSection);
router.delete('/:id', sectionController.deleteSection);

module.exports = router;
