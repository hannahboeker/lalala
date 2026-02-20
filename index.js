// 1. RANDOM KREIS POSITIONIEREN____________________________________________________________

// function getRandomPosition(X, Y) {
//   const x = Math.random() * X;
//   const y = Math.random() * Y;
//   return [x, y];
// }
// circle.forEach((circle) => {
//   let position = getRandomPosition(1000, 1000); // Funktion aufrufen und Argumente geben
//   circle.style.left = position[0] + "px"; // Auf NodeListe cicle zugreifen und mit inlinestyle position festlegen
//   circle.
// });

// 2. BEI CLICK KREIS AN RANDOM POSITION______________________________________________________

// const ul = document.querySelector('[data-js="circleContainer"]');
// // const circle = document.querySelectorAll('[data-js="circle"]');

// function getRandomPosition(X, Y) {
//   const x = Math.random() * X;
//   const y = Math.random() * Y;
//   return [x, y];
// }

// ul.addEventListener("click", () => {
//   const newCircle = document.createElement("li");
//   newCircle.className = "circle";

//   let position = getRandomPosition(ul.clientWidth, ul.clientHeight); // Funktion aufrufen und Argumente geben

//   newCircle.style.left = position[0] + "px";
//   newCircle.style.top = position[1] + "px";

//   ul.append(newCircle);
// });

// 2. BEI CLICK KREIS AN MAUS POSITION________________________________________________

import { audio } from "./utils/utils.js";

const ul = document.querySelector('[data-js="circleContainer"]');
// const circle = document.querySelectorAll('[data-js="circle"]');

ul.addEventListener("click", (event) => {
  const newCircle = document.createElement("li");
  newCircle.className = "circle";

  const x = event.clientX;
  const y = event.clientY;

  newCircle.style.position = "absolute";
  newCircle.style.left = x - 50 + "px";
  newCircle.style.top = y - 50 + "px";

  // RANDOM COLOR
  function getRandomColor(min, max) {
    const r = Math.random() * (max - min) + min;
    const g = Math.random() * (max - min) + min;
    const b = Math.random() * (max - min) + min;
    return `rgb(${r}, ${g}, ${b})`;
  }

  let randomColor = getRandomColor(0, 255);
  newCircle.style.backgroundColor = randomColor;

  ul.append(newCircle);

  //   //SOUND
  const randomSound = Math.floor(Math.random() * audio.length);
  audio[randomSound].play();
});
