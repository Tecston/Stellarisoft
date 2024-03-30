const express = require('express');
const router = express.Router();
const arbolController = require('../controllers/arboles.controller');

router
    .get('/', arbolController.get)
    .get('/:id', arbolController.getById)
    .post('/', arbolController.create)
    .put('/:id', arbolController.update)
    .delete('/:id', arbolController._delete);

module.exports = router;
