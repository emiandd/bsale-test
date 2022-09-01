const { Router } = require('express');
const router = Router();
const getAllProducts = require('../../controllers/getAllProducts.controller.js');

router.get('/products', async (req, res) => {

	try {
		return await getAllProducts(res);
	} catch(e) {
		console.log({error:e});
	}

})

module.exports = router;
