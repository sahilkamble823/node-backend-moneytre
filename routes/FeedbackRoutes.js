const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/FeedbackController')

router.get('/get_all_feedback', feedbackController.getAll);
router.get('/get_feedback/:id', feedbackController.getById);
router.post('/create_feedback', feedbackController.create);

router.delete('/delete_feedback/:id', feedbackController.delete);

module.exports = router;
