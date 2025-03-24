const appointmentModel = require('../models/appointmentModel');

exports.getAppointments = (req, res) => {
  appointmentModel.getAllAppointments((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.addAppointment = (req, res) => {
  const appointment = req.body;
  appointmentModel.addAppointment(appointment, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Appointment added!');
  });
};

exports.deleteAppointment = (req, res) => {
  const id = req.params.id;
  appointmentModel.deleteAppointment(id, (err, result) => {
    if (err) res.status(500).send(err);
    else res.send('Appointment deleted!');
  });
};
