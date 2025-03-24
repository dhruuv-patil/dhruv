const db = require('../db');

exports.getAllDoctors = (callback) => {
  db.query('SELECT * FROM doctors', callback);
};

exports.addDoctor = (doctor, callback) => {
  db.query('INSERT INTO doctors SET ?', doctor, callback);
};

exports.deleteDoctor = (id, callback) => {
  db.query('DELETE FROM doctors WHERE id = ?', [id], callback);
};
