// backend/routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController');

router.get('/', controller.getAllItems);
router.post('/', controller.createItem);
router.delete('/:id', controller.deleteItem);

module.exports = router;
