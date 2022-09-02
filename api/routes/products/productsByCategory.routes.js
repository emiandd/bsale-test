const { Router } = require('express');
const router = Router();
const getProductsByCategory = require('../../controllers/products/productsByCategory.controller.js');

router.get('/products/:category', async (req, res) => {

	const { category } = req.params;

	try {
		return await getProductsByCategory(res, category);
	} catch(e) {
		return res.status(404).json({error:e})
	}

})

module.exports = router;
