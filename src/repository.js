const { resolve } = require('path');
const db = require('./server');

allEmployees = async () => {
  var sql = `SELECT * FROM employee`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      if (err) {
        throw err;
      }
      else {
        resolve(result);
      }
    });
  });
};
    

specificEmployee = async (id) => {
  var sql = `SELECT * FROM employee where idemployee = ${id}`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (err, result) {
      resolve(result);
    });
  });
};


module.exports = {
  allEmployees,
  specificEmployee
};
