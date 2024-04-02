const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/get_all_admins', adminController.getAll);
router.get('/get_admin/:id', adminController.getById);
router.post('/create_admin', adminController.create);
router.put('/update_admin/:id', adminController.update);
router.delete('/delete_admin/:id', adminController.delete);

module.exports = router;
