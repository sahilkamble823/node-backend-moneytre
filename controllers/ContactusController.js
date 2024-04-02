
const ContactUs = require('../model/Contactus');

const ContactUsController = {
    getAll(req, res) {
        ContactUs.getAll((err, results) => {
            if (err) {
                console.error('Error getting ContactUs:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({status: 'success', message: 'ContactUs retrieved successfully', data: results});
        });
    },

    getById(req, res) {
        const id = req.params.id;
        ContactUs.getById(id, (err, result) => {
            if (err) {
                console.error('Error getting ContactUs:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            if (!result) {
                res.status(404).json({ status: 'error', message: 'ContactUs not found', data: null });
                return;
            }
            res.json({ status: 'success', message: 'ContactUs retrieved successfully', data: result });
        });
    },

    create: (req, res) => {
        const { c_name, c_email, c_subject,c_mobile_no, c_message } = req.body;
        ContactUs.create({ c_name, c_email, c_subject,c_mobile_no, c_message }, (err, result) => {
            if (err) {
                console.error('Error creating ContactUs:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.status(201).json({ status: 'success', message: 'ContactUs created successfully', data: result });
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        const { c_name, c_email, c_subject,c_mobile_no, c_message } = req.body;
        ContactUs.update(id, { c_name, c_email, c_subject,c_mobile_no, c_message}, (err, result) => {
            if (err) {
                console.error('Error updating ContactUs:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'ContactUs updated successfully', data: {id,username,password,admin_status} });
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        ContactUs.delete(id, (err) => {
            if (err) {
                console.error('Error deleting ContactUs:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'ContactUs deleted successfully', data: null });
        });
    },

};
module.exports = ContactUsController;