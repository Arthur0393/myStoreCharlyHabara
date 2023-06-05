const express = require('express');
const { faker } = require('@faker-js/faker')

Router.get('/products/:id', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image:faker.image.imageUrl(),
  });
  res.json(products);
};
});

Router.get('/filter',(req, res) => {
  res.send('Yo soy un filter')
});

Router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === 999){
    res.status(404)({
      message: 'not found'
    });
  } else{
    res.status(200).json({
      id,
      name: 'Product 2',
      price: 2000
    })
  }
});

router.post('/', (req, res) => {
   const body = req.body;
   res.status(201).json({
    message: 'created',
    data: body
   })
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
   res.json({
    message: 'update',
    data: body,
    id,
   });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
   res.json({
    message: 'deleted',
    id,
   });
});

module.exports = router;
