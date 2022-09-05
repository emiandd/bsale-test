import showResults from '../utils/showResults.js';
const url = 'http://localhost:3001';

/* It get all products by the category selected by the user and show them */
const getProductsByCategory = (category) => {

	fetch(`${url}/products/${category}`)
	.then(response => response.json())
	.then( data  => {
		showResults(data);
		return;
	})

}

export default getProductsByCategory;