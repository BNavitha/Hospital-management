// routes/timings.js
const express = require('express');
const router = express.Router();
const timingController = require('../controllers/timingController');

// Routes for CRUD operations on timings
router.get('/', timingController.getAllTimings);
router.post('/', timingController.createTiming);
router.put('/:id', timingController.updateTiming);
router.delete('/:id', timingController.deleteTiming);

module.exports = router;