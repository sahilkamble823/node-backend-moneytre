const db = require('../db/db');

class Archives {
    static getAll(callback) {
        db.query('SELECT * FROM archives_db', (err, results) => {
            callback(err, results);
        });
    };

    static getById(id, callback) {
        db.query('SELECT * FROM archives_db WHERE id = ?', [id], (err, result) => {
            callback(err, result[0]);
        });
    };

    static create({ title, description, image,dateandtime }, callback) {
            
            db.query('INSERT INTO archives_db ( title, description, image,dateandtime ) VALUES ( ?, ?, ?,NOW())', [ title, description, image ], (err, result) => {
            if (err) return callback(err);
            console.log(result);
            const newArchivesId = result.insertId;
            callback(null, { id: newArchivesId, title, description, image,dateandtime: new Date().toISOString() });

        });
    };

    static update(id, { title, description, image }, callback) {
        db.query('UPDATE archives_db  SET title = ?, description = ?, image = ? WHERE id = ?', [ title, description, image, id], (err, result) => {
            if (err) return callback(err);
            callback(null, { id,  title, description, image});
        });
    };

    static delete(id, callback) {
        db.query('DELETE FROM archives_db WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }

    static deleteAll(callback) {
        db.query('DELETE FROM archives_db', (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = Archives;
