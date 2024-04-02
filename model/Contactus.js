const db = require('../db/db');

class ContactUs {
    static getAll(callback) {
        db.query('SELECT * FROM contact_db', (err, results) => {
            callback(err, results);
        });
    };

    static getById(id, callback) {
        db.query('SELECT * FROM contact_db WHERE id = ?', [id], (err, result) => {
            callback(err, result[0]);
        });
    };

    static create({ c_name, c_email, c_subject,c_mobile_no, c_message,dateandtime }, callback) {
        db.query('INSERT INTO contact_db (c_name, c_email, c_subject,c_mobile_no, c_message,dateandtime ) VALUES (?, ?, ?, ?,?,NOW())', [c_name, c_email, c_subject,c_mobile_no, c_message ], (err, result) => {
            if (err) return callback(err);
            console.log(result);
            const newContactUsId = result.insertId;
            callback(null, { id: newContactUsId, c_name, c_email, c_subject,c_mobile_no, c_message,dateandtime: new Date().toISOString() });

        });
    };

    // static update(id, { c_name, c_email, c_subject,c_mobile_no, c_message }, callback) {
    //     db.query('UPDATE contact_db  SET full_name = ?, email = ?, subject = ?, message = ?, mobile_no = ? WHERE id = ?', [full_name, email, subject,message,mobile_no, id], (err, result) => {
    //         if (err) return callback(err);
    //         callback(null, { id, c_name, c_email, c_subject,c_mobile_no, c_message });
    //     });
    // };

    static delete(id, callback) {
        db.query('DELETE FROM contact_db WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }

    static deleteAll(callback) {
        db.query('DELETE FROM contact_db', (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = ContactUs;
