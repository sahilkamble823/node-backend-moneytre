
const Blog = require('../model/Blog');

const blogController = {
    getAll(req, res) {
        Blog.getAll((err, results) => {
            if (err) {
                console.error('Error getting Blog:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }

            results.forEach(blog => {
                blog.image = blog.image.toString('base64');
            });
            res.json({ status: 'success', message: 'Blog retrieved successfully', data: results });
        });
    },

    getById(req, res) {
        const id = req.params.id;
        Blog.getById(id, (err, result) => {
            if (err) {
                console.error('Error getting Blog:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            if (!result) {
                res.status(404).json({ status: 'error', message: 'Blog not found', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Blog retrieved successfully', data: result });
        });
    },

    create: (req, res) => {
        const { title, description, image, type_blog, blog_status } = req.body;
        Blog.create({ title, description, image, type_blog, blog_status }, (err, result) => {
            if (err) {
                console.error('Error creating Blog:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.status(201).json({ status: 'success', message: 'Blog created successfully', data: result });
        });
    },
    update: (req, res) => {
        const id = req.params.id;
        const { title, description, image, type_blog, blog_status } = req.body;
        Blog.update(id, { title, description, image, type_blog, blog_status }, (err, result) => {
            if (err) {
                console.error('Error updating Blog:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Blog updated successfully', data: result });
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        Blog.delete(id, (err) => {
            if (err) {
                console.error('Error deleting Blog:', err);
                res.status(500).json({ status: 'error', message: 'Internal Server Error', data: null });
                return;
            }
            res.json({ status: 'success', message: 'Blog deleted successfully', data: null });
        });
    },

};
module.exports = blogController;