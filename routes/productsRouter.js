const express = require('express');
// const { faker } = require('@faker-js/faker')

const ProductsService = require('./../services/productService');

const router = express.Router();
const service = new ProductsService();

Router.get('/', async (req, res) => {
  const products = service.find();
  res.json(products);
});

Router.get('/filter', async(req, res) => {
  res.send('Yo soy un filter')
});

Router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await service.findOne(id);
  res.json(products);
});

router.post('/', async (req, res) => {
   const body = req.body;
   const newProduct = await service.create(body);
   res.status(201).json(newProduct)
})

router.patch('/', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
   res.json(product);
});

router.patch('/', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.delete(id, body);
   res.json(req);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
   res.json({
    message: 'deleted',
    id,
   });
});

module.exports = router;
