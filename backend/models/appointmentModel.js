const db = require('../db');

exports.getAllAppointments = (callback) => {
  db.query('SELECT * FROM appointments', callback);
};

exports.addAppointment = (appointment, callback) => {
  db.query('INSERT INTO appointments SET ?', appointment, callback);
};

exports.deleteAppointment = (id, callback) => {
  db.query('DELETE FROM appointments WHERE id = ?', [id], callback);
};
