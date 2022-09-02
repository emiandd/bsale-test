const { Router } = require('express');
const router = Router();
const products = require('./products/allProducts.routes.js');
const categories = require('./categories/allCategories.routes.js');
const productsByCategory = require('./products/productsByCategory.routes.js');

router.use('/', products);
router.use('/', categories);
router.use('/', productsByCategory);



module.exports = router;