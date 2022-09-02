const { Router } = require('express');
const router = Router();
const getProductsByCategory = require('../../controllers/products/productsByCategory.controller.js');

router.get('/products/:category', async (req, res) => {

	const { category } = req.params;

	try {
		return await getProductsByCategory(res, category);
	} catch(e) {
		console.log({error:e});
	}

})

module.exports = router;
