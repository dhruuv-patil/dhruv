const doctorModel = require('../models/doctorModel');

exports.getDoctors = (req, res) => {
  doctorModel.getAllDoctors((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.addDoctor = (req, res) => {
  const doctor = req.body;
  doctorModel.addDoctor(doctor, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Doctor added!');
  });
};

exports.deleteDoctor = (req, res) => {
  const id = req.params.id;
  doctorModel.deleteDoctor(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Doctor deleted!');
  });
};
