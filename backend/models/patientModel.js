const db = require('../db');

exports.getAllPatients = (callback) => {
  db.query('SELECT * FROM patients', callback);
};

exports.addPatient = (patient, callback) => {
  db.query('INSERT INTO patients SET ?', patient, callback);
};

exports.deletePatient = (id, callback) => {
  db.query('DELETE FROM patients WHERE id = ?', [id], callback);
};
