const db = require('../db/db');

class Blog {
    static getAll(callback) {
        db.query('SELECT * FROM blog', (err, results) => {
            callback(err, results);
        });
    };

    static getById(id, callback) {
        db.query('SELECT * FROM blog WHERE id = ?', [id], (err, result) => {
            callback(err, result[0]);
        });
    };

    static create({ title, description, image,type_blog,blog_status,dateandtime }, callback) {
        db.query('INSERT INTO blog (title, description, image,type_blog,blog_status,dateandtime ) VALUES (?, ?, ?, ?,?,NOW())', [title, description, image,type_blog,blog_status ], (err, result) => {
            if (err) return callback(err);
            console.log(result);
            const newBlogId = result.insertId;
            callback(null, { id: newBlogId, title, description, image,type_blog,blog_status ,dateandtime: new Date().toISOString() });

        });
    };

    static update(id, {title, description, image,type_blog,blog_status }, callback) {
        db.query('UPDATE blog  SET title = ?, description = ?, image = ?, type_blog = ?, blog_status = ? WHERE id = ?', [title, description, image,type_blog,blog_status, id], (err, result) => {
            if (err) return callback(err);
            callback(null, { id, title, description, image,type_blog,blog_status});
        });
    };

    static delete(id, callback) {
        db.query('DELETE FROM blog WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }

    static deleteAll(callback) {
        db.query('DELETE FROM blog', (err, result) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = Blog;
