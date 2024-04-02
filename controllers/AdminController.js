
const Admin = require('../model/Admin');

const adminController = {
    getAll(req, res) {
        Admin.getAll((err, results) => {
            if (err) {
                console.error('Error getting admins:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({status: 'success', message: 'Admins retrieved successfully', data: results});
        });
    },

    getById(req, res) {
        const id = req.params.id;
        Admin.getById(id, (err, result) => {
            if (err) {
                console.error('Error getting admin:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            if (!result) {
                res.status(404).json({ status: 'error', message: 'Admin not found', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Admin retrieved successfully', data: result });
        });
    },

    create: (req, res) => {
        const { name, username, password, admin_status } = req.body;
        Admin.create({ name, username, password, admin_status }, (err, result) => {
            if (err) {
                console.error('Error creating admin:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.status(201).json({ status: 'success', message: 'Admin created successfully', data: result });
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        const { name, username, password, admin_status } = req.body;
        Admin.update(id, { name, username, password, admin_status }, (err, result) => {
            if (err) {
                console.error('Error updating admin:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Admin updated successfully', data: {id,username,password,admin_status} });
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        Admin.delete(id, (err) => {
            if (err) {
                console.error('Error deleting admin:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Admin deleted successfully', data: null });
        });
    },

};
module.exports = adminController;