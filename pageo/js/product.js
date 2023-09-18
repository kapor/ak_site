
/* Mobile Nav Overlay */

function openNav() {
	document.getElementById("topnav_menu").style.height = "100%";
}

function closeNav() {
	document.getElementById("topnav_menu").style.height = "0%";
}

/* Getintouch Nav Overlay */

function openContact() {
	document.getElementById("topnav_contact").style.height = "100%";
}

function closeContact() {
	document.getElementById("topnav_contact").style.height = "0%";
}

 
/* product Photo Modal */

function openModal() {
	document.getElementById("product_modal").style.display = "block";
}

function closeModal() {
	document.getElementById("product_modal").style.display = "none";
}

var slide_index = 1;
show_slides(slide_index);

function plus_slides(n) {
	show_slides(slide_index += n);
}

function current_slide(n) {
	show_slides(slide_index = n);
}

function show_slides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("product");
	var product_caption_text = document.getElementById("product_caption");
	if (n > slides.length) {slide_index = 1}
	if (n < 1) {slide_index = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}

	slides[slide_index-1].style.display = "block";
	product_caption_text.innerHTML = dots[slides-1].alt;
}
