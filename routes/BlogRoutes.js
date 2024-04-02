const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

router.get('/get_all_blog', blogController.getAll);
router.get('/get_blog/:id', blogController.getById);
router.post('/create_blog', blogController.create);

router.delete('/delete_blog/:id', blogController.delete);

module.exports = router;
