console.log("hello world");

let form = document.querySelector('#contact');
let img = document.querySelector('img')



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submited successfully`)
}

let mouseOverPic = (e) => {
	alert('You are so beautiful you silly duck')
}


form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', mouseOverPic)