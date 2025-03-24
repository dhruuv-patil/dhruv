const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.get('/', doctorController.getDoctors);
router.post('/', doctorController.addDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
