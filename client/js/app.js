import getAllCategories from './querys/getAllCategories.js';
import getAllProducts from './querys/getAllProducts.js';
import getProductsByName  from './querys/getProductsByName.js';
import getProductsByCategory  from './querys/getProductsByCategory.js';
import showResults  from './utils/showResults.js';
import showError from './utils/showError.js';
let inputSearch = document.querySelector('#inputSearch');
const searchBtn = document.querySelector('#searchBtn');
const selectCategories = document.querySelector('#categories');
const url = 'http://localhost:3001';


window.addEventListener('DOMContentLoaded', appStart);

/* It start the app and gets all the categories and products from the database and displays them on the page */
function appStart(){
	getAllCategories();
	getAllProducts();
	return;
}

let productToSearch = '';

/* Listening an option selected by the user and show the products.
   If the user select -- categories -- option this will return all products */
selectCategories.addEventListener('change', (e) => {
	if(e.target.value === '0'){
		getAllProducts();
		return;
	}
	getProductsByCategory(e.target.value);
})

/* Listener for read de input and asign this value to productToSearch */
inputSearch.addEventListener('input', (e) => {
	e.preventDefault();
	productToSearch = e.target.value;
})


/* Listening for a click event on the search button. If the input search is empty,
   it will return an error. Otherwise, it will call the getProductsByName function. */
searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if(productToSearch === '' || inputSearch.value === '') return showError({error:'Por favor ingresa un producto'});
	getProductsByName(productToSearch);
})




