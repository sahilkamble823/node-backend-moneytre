
const Feedback = require('../model/Feedback');

const feedbackController = {
    getAll(req, res) {
        Feedback.getAll((err, results) => {
            if (err) {
                console.error('Error getting feedback:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({status: 'success', message: 'Feedback retrieved successfully', data: results});
        });
    },

    getById(req, res) {
        const id = req.params.id;
        Feedback.getById(id, (err, result) => {
            if (err) {
                console.error('Error getting Feedback:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            if (!result) {
                res.status(404).json({ status: 'error', message: 'Feedback not found', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Feedback retrieved successfully', data: result });
        });
    },

    create: (req, res) => {
        const {full_name, email, subject,message,mobile_no  } = req.body;
        Feedback.create({ full_name, email, subject,message,mobile_no }, (err, result) => {
            if (err) {
                console.error('Error creating Feedback:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.status(201).json({ status: 'success', message: 'Feedback created successfully', data: result });
        });
    },


    delete: (req, res) => {
        const id = req.params.id;
        Feedback.delete(id, (err) => {
            if (err) {
                console.error('Error deleting Feedback:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Feedback deleted successfully', data: null });
        });
    },

};
module.exports = feedbackController;