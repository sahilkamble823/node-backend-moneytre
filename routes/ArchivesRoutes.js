const express = require('express');
const router = express.Router();
const archiveController = require('../controllers/ArchivesController');

router.get('/get_all_archives', archiveController.getAll);
router.get('/get_archives/:id', archiveController.getById);
router.post('/create_archive', archiveController.create);
router.put('/update_archive/:id', archiveController.update);
router.delete('/delete_archive/:id', archiveController.delete);

module.exports = router;
