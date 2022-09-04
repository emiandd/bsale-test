const db = require('../../db.js');

/**
 * It queries the database for all the categories and returns the result to the client
 * @param res - the response object
 */
const getAllCategories = async (res) => {

	try {
		const q = 'SELECT * FROM category';
		await db.query( q, (err, result, fields) => {
			if(err) throw err;
			res.send(result);
		})
		// db.end();
	} catch(e) {
		console.log({error:e});
	}

}

module.exports = getAllCategories;