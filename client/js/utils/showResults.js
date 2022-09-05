import addCard from '../components/addCard.js';
const results = document.querySelector('#results');

/**
 * It takes in an array of objects, loops through the array, and for each object in the array, it adds a card to the results div
 * @param data - the data that is returned from the API
 * @returns the results.innerHTML.
 */
const showResults = (data) =>{
	results.innerHTML = '';
	for(let i = 0; i < data.length; i++){
		const url_image = data[i].url_image;
		const name = data[i].name;
		const price = data[i].price;
		results.innerHTML = results.innerHTML + addCard(url_image, name, price);
	}
	return;
}

export default showResults;