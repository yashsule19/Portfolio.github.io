const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 50);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
	
function opentab(tabname){
	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ( ) => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};
window.onscroll = ( ) => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

function scrollToSection(id, topOffset, bottomOffset) {
    var element = document.getElementById(id);
    if (!element) return; // Check if the element exists
    var rect = element.getBoundingClientRect();
    var offset = rect.top + window.scrollY - topOffset; // Adjust the offset from the top
    offset = Math.max(offset, 0); // Ensure the offset is not negative
    offset = Math.min(offset, document.documentElement.scrollHeight - window.innerHeight - bottomOffset); // Adjust the offset from the bottom
    window.scrollTo({
        top: offset,
        behavior: 'smooth' // Optional: Add smooth scrolling effect
    });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxyXlVOPz7W9uL2-4BrayOu1lvCDOhYXnlg5RdwTbwFPz_hPzRhjn4YF8YLFsFY5_d72w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => {
		msg.innerHTML = "Message sent successfully"
		setTimeout(function(){
			msg.innerHTML = ""
		}, 5000)
		form.reset()
	})
	.catch(error => console.error('Error!', error.message))
})