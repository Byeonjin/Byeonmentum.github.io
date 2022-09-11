const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("div");

document.body.style.backgroundImage = `url(img/${chosenImage})`;
docu

//document.body.appendChild(bgImage);