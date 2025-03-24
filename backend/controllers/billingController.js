const billingModel = require('../models/billingModel');

exports.getBills = (req, res) => {
  billingModel.getAllBills((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.addBill = (req, res) => {
  const bill = req.body;
  billingModel.addBill(bill, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Bill added!');
  });
};

exports.deleteBill = (req, res) => {
  const id = req.params.id;
  billingModel.deleteBill(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Bill deleted!');
  });
};
