const { Router } = require('express');
const router = Router();
const getAllProducts = require('../../controllers/products/allProducts.controller.js');
const getProductsByName = require('../../controllers/products/productsByName.controller.js');

router.get('/products', async (req, res) => {

	const { search } = req.query;

	try {
		if(search) return await getProductsByName(res, search);
		else return await getAllProducts(res);
	} catch(e) {
		console.log({error:e});
	}

})

module.exports = router;
