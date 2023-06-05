const express = require('express');

const productsRouter = require ('.productsRouter/')
const usersRouter = require ('.catergoriesRouter/')
const usersRouter = require ('.usersRouter/')

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
  app.use('./products', productsRouter);
  app.use('./categories', productsRouter);
  app.use('./users', productsRouter);
}

module.exports = routerApi;
