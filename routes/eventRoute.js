const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

// Define Routes
router.post('/insert', eventController.insertEvent);
router.put('/update/:eventId', eventController.updateEvent);
router.get('/all', eventController.getEvents);
router.get('/:eventId', eventController.getEventById);

// Handle invalid URLs
router.get('/*', (req, res) => {
    res.status(404).send('Invalid URL Passed');
});

module.exports = router;
