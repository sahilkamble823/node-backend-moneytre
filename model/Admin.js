const db = require('../db/db');

class Admin {
    static getAll(callback) {
        db.query('SELECT * FROM admin', (err, results) => {
            callback(err, results);
        });
    };

    static getById(id, callback) {
        db.query('SELECT * FROM admin WHERE id = ?', [id], (err, result) => {
            callback(err, result[0]);
        });
    };

    static create({ name, username, password, admin_status }, callback) {
        db.query('INSERT INTO admin (name,username,password,admin_status) VALUES (?, ?, ?, ?)', [name, username, password, admin_status], (err, result) => {
            if (err) return callback(err);
            console.log(result);
            const newAdminId = result.insertId;
            callback(null, { id: newAdminId, name, username, password, admin_status });

        });
    };

    static update(id, { name, username, password, admin_status }, callback) {
        db.query('UPDATE admin SET name = ?, username = ?, password = ?, admin_status = ? WHERE id = ?', [name, username, password, admin_status, id], (err, result) => {
            if (err) return callback(err);
            callback(null, { id, name, username, password, admin_status });
        });
    };

    static delete(id, callback) {
        db.query('DELETE FROM Bank WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }

    static deleteAll(callback) {
        db.query('DELETE FROM admin', (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = Admin;
