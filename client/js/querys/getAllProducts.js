import showResults from '../utils/showResults.js';
const url = 'http://localhost:3001';

/* fetch and display all products on user's first visit */
const getAllProducts = () =>{
	fetch(`${url}/products`)
	.then(response => response.json())
	.then(data => {
		showResults(data);
		return;
	})
}

export default getAllProducts;