const express = require('express');
const arbolRouter = require('./arbolesRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/arboles', arbolRouter);
}

module.exports = routerApi;
