const colors = [
  "green",
  "gray",
  "orange",
  "black",
  "violet",
  "purple",
  "blue",
  "purple",
  "brown",
  "meganta",
  "tan",
  "cyan",
  "olive",
  "maroon",
  "navy",
  "aquamarine",
  "turquoise",
  "silver",
  "lime",
  "teal",
  "indigo",
  "violet",
  "pink",
  "white",
  "yellow",
  "red",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
setInterval(click, 5000);
function click() {
  document.getElementById("btn").click();
}
