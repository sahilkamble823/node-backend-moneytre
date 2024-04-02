const express = require('express');
const router = express.Router();
const ContactusController = require('../controllers/ContactusController')

router.get('/get_all_contactus', ContactusController.getAll);
router.get('/get_contactus/:id', ContactusController.getById);
router.post('/create_contactus', ContactusController.create);
router.put('/update_feedback/:id', ContactusController.update);
router.delete('/delete_constactus/:id', ContactusController.delete);

module.exports = router;
