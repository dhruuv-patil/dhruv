const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.getAppointments);
router.post('/', appointmentController.addAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
