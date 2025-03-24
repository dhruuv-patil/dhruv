const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.get('/', billingController.getBills);
router.post('/', billingController.addBill);
router.delete('/:id', billingController.deleteBill);

module.exports = router;
