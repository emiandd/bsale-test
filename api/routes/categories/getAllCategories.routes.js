const { Router } = require('express');
const router = Router();
const getAllCategories = require('../../controllers/categories/getAllCategories.controller.js');

router.get('/categories', async (req, res) => {

	try {
		return await getAllCategories(res);
	} catch(e) {
		console.log({error:e});
	}

})

module.exports = router;