import showResults from '../utils/showResults.js';
import showError from '../utils/showError.js';
const url = 'http://localhost:3001';

/* It get all the products that match the user's search and show them 
   If there are no matches with the search, an error will be displayed for four seconds */
const getProductsByName = (name) => {
	fetch(`${url}/products?search=${name}`)
	.then(response => response.json())
	.then( data  => {
		inputSearch.value = '';
		if(data.error) return showError(data);
		showResults(data);
	})
}

export default getProductsByName;