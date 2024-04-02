const db = require('../db/db');

class Feedback {
    static getAll(callback) {
        db.query('SELECT * FROM feedback_db', (err, results) => {
            callback(err, results);
        });
    };

    static getById(id, callback) {
        db.query('SELECT * FROM feedback_db WHERE id = ?', [id], (err, result) => {
            callback(err, result[0]);
        });
    };

    static create({ full_name, email, subject,message,mobile_no,dateandtime }, callback) {
        db.query('INSERT INTO feedback_db (full_name, email, subject,message,mobile_no,dateandtime ) VALUES (?, ?, ?, ?,?,NOW())', [full_name, email, subject,message,mobile_no ], (err, result) => {
            if (err) return callback(err);
            console.log(result);
            const newFeedBackId = result.insertId;
            callback(null, { id: newFeedBackId, full_name, email, subject,message,mobile_no ,dateandtime: new Date().toISOString() });

        });
    };

    static update(id, { full_name, email, subject,message,mobile_no }, callback) {
        db.query('UPDATE feedback_db  SET full_name = ?, email = ?, subject = ?, message = ?, mobile_no = ? WHERE id = ?', [full_name, email, subject,message,mobile_no, id], (err, result) => {
            if (err) return callback(err);
            callback(null, { id, full_name, email, subject,message,mobile_no });
        });
    };

    static delete(id, callback) {
        db.query('DELETE FROM feedback_db WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }

    static deleteAll(callback) {
        db.query('DELETE FROM feedback_db', (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = Feedback;
