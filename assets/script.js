const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// à mettre juste après la déclaration du tableau 
let currentSlide = 0; // La slide actuelle (commence à 0)

// On ajoute un event listener sur les flèches pour détecter les clics (mis à jour)
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

arrowLeft.addEventListener("click", function() {
    	if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // On va à la fin (défilement infini)
    }
    updateSlide(currentSlide);
});
 

arrowRight.addEventListener("click", function() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // On revient au début (défilement infini)
    }
    updateSlide(currentSlide);
});


// On récupère le conteneur des points dans le HTML
const dotsContainer = document.querySelector(".dots");

// On boucle sur le tableau slides pour créer un point par image
slides.forEach(function(slide, index) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Le premier point est sélectionné par défaut
    if (index === 0) {
        dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
});


const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");


function updateSlide(index) {
    // Changer l'image
    bannerImg.src = "./assets/images/slideshow/" + slides[index].image;

    // Changer le texte
    bannerText.innerHTML = slides[index].tagLine;

    // Mettre à jour les points
    dots.forEach(function(dot) {
        dot.classList.remove("dot_selected");
    });
    dots[index].classList.add("dot_selected");
}