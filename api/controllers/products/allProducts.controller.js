const db = require('../../db.js');

/**
 * This is a function that is getting all the products from the database.
 * @param res - the response object
 */
const getAllProducts = async (res) => {

	try {
		const q = "SELECT * FROM product";
		await db.query( q, (err, result, fields) => {
			if (err) throw err;
			return res.send(result);
		});

	} catch(e) {
		console.log({error: e});
	}

}

module.exports = getAllProducts;