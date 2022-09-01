const { Router } = require('express');
const router = Router();
const products = require('./products/getAllProducts.routes.js');

router.use('/', products);


module.exports = router;