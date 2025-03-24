const patientModel = require('../models/patientModel');

exports.getPatients = (req, res) => {
  patientModel.getAllPatients((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.addPatient = (req, res) => {
  const patient = req.body;
  patientModel.addPatient(patient, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Patient added successfully!');
    }
  });
};

exports.deletePatient = (req, res) => {
  const id = req.params.id;
  patientModel.deletePatient(id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Patient deleted successfully!');
    }
  });
};
