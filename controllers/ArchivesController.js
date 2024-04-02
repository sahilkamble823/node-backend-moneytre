
const Archives = require('../model/Archives');

const archivesController = {
    getAll(req, res) {
        Archives.getAll((err, results) => {
            if (err) {
                console.error('Error getting Archives:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }

            results.forEach(Archives => {
                Archives.image = Archives.image.toString('base64');
            });
            res.json({ status: 'success', message: 'Archives retrieved successfully', data: results });
        });
    },

    getById(req, res) {
        const id = req.params.id;
        Archives.getById(id, (err, result) => {
            if (err) {
                console.error('Error getting Archives:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            if (!result) {
                res.status(404).json({ status: 'error', message: 'Archives not found', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Archives retrieved successfully', data: result });
        });
    },

    create: (req, res) => {
        const { title, description, image } = req.body;
        Archives.create({ title, description, image }, (err, result) => {
            if (err) {
                console.error('Error creating Archives:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.status(201).json({ status: 'success', message: 'Archives created successfully', data: result });
        });
    },
    update: (req, res) => {
        const id = req.params.id;
        const { title, description, image} = req.body;
        Archives.update(id, {title, description, image }, (err, result) => {
            if (err) {
                console.error('Error updating Archives:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Archives updated successfully', data: result });
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        Archives.delete(id, (err) => {
            if (err) {
                console.error('Error deleting Archives:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Archives deleted successfully', data: null });
        });
    },

};
module.exports = archivesController;