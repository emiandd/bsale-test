const { Router } = require('express');
const router = Router();
const products = require('./products/getAllProducts.routes.js');
const categories = require('./categories/getAllCategories.routes.js');

router.use('/', products);
router.use('/', categories);

module.exports = router;