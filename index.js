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

// 2. BEI CLICK KREIS AN Maus POSITION________________________________________________

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

  ul.append(newCircle);
});
