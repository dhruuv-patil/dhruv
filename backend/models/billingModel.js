const db = require('../db');

exports.getAllBills = (callback) => {
  db.query('SELECT * FROM bills', callback);
};

exports.addBill = (bill, callback) => {
  db.query('INSERT INTO bills SET ?', bill, callback);
};

exports.deleteBill = (id, callback) => {
  db.query('DELETE FROM bills WHERE id = ?', [id], callback);
};
