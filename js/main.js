"use strict"

/*Consegna:
Dato un array di oggetti letterali con:
  - url dell’immagine
  - titolo
  - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Consigli:
Riguardate la lezione 35_2-06LUG-js_array_2
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:*/

const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

let arrowUp = document.querySelector(".arrow-up");
let arrowDown = document.querySelector(".arrow-down");
let bigImagesContainer = document.querySelector(".big-images-container");
let currentImageDisplayed = 0;

/*I establish an add eventListener for the up icon to change the currently
displayed image to the previous one until the currently displayed one is the first.
One more click on the icon when the currently displayed image is the first set the 
currently displayed image to the last one.*/
arrowUp.addEventListener("click", function(){
  currentImageDisplayed += -1;
  if (currentImageDisplayed < 0){
    currentImageDisplayed = 4;
  };
  bigImagesContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center position-relative">
                                    <img src="${images[currentImageDisplayed].image}" class="position-absolute" alt="">
                                    <div class="image-text-box position-absolute bottom-0 end-0 w-100 ps-5 pe-2 pt-2 text-end">
                                      <h4 class="image-title fw-bold">${images[currentImageDisplayed].title}</h4>
                                      <p class="image-caption">${images[currentImageDisplayed].text}</p>
                                    </div>
                                  </div>`;
});

/*This addEventListener does the same as the one above but in the reverse order.*/
arrowDown.addEventListener("click", function(){
  currentImageDisplayed += +1;
  if (currentImageDisplayed > 4){
    currentImageDisplayed = 0;
  };
  bigImagesContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center position-relative opacity">
                                    <img src="${images[currentImageDisplayed].image}" class="position-absolute" alt="">
                                    <div class="image-text-box position-absolute bottom-0 end-0 w-100 ps-5 pe-2 pt-2 text-end">
                                      <h4 class="image-title fw-bold">${images[currentImageDisplayed].title}</h4>
                                      <p class="image-caption">${images[currentImageDisplayed].text}</p>
                                    </div>
                                  </div>`;                             
});


/*This is an interval to cycle image to the next one compared to the currently
displayed one each 3 seconds interval*/
setInterval(function(){
  currentImageDisplayed += +1;
  if (currentImageDisplayed > 4){
    currentImageDisplayed = 0;
  };
  bigImagesContainer.innerHTML = `<div class="d-flex justify-content-center align-items-center position-relative">
                                    <img src="${images[currentImageDisplayed].image}" class="position-absolute" alt="">
                                    <div class="image-text-box position-absolute bottom-0 end-0 w-100 ps-5 pe-2 pt-2 text-end">
                                      <h4 class="image-title fw-bold">${images[currentImageDisplayed].title}</h4>
                                      <p class="image-caption">${images[currentImageDisplayed].text}</p>
                                    </div>
                                  </div>`;                             
},3000);