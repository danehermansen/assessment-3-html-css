console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted sucsessfully!");
}
function compliment(event) {
	event.preventDefault()

	alert("You have beautiful big blue eyes")
}





let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
let img = document.querySelector('img')
img.addEventListener('mouseover', compliment )