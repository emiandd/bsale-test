const notification = document.querySelector('#notification');

/**
 * It takes an error message as an argument, and displays it in the notification div for 4 seconds
 * @param errorMsg - This is the error message that is returned from the server.
 */
const showError = (errorMsg) => {
	notification.innerHTML = `
		<div class="alert alert-warning role="alert">
			<p class="center p-0">${errorMsg.error}</p>
		</div>
	`
	setTimeout( () => {
		notification.innerHTML = '';
	}, 4000)
}

export default showError;