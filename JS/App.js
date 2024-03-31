const button = document.querySelector(".myButton");
const modifiedTextColor = document.getElementById("modifiedText");
const TextColorFormat = document.getElementById("link1");
const RGBAColorFormat = document.getElementById("link2");
const HexColorFormat = document.getElementById("link3");

// Adding Event listener for the links: Text, RGBA Format, Hex.
button.addEventListener("click", TextColorGenerator);

TextColorFormat.addEventListener("click", () => {
  // Calling the function TextColorGenerator() in the beginning.
  TextColorGenerator();

  // Change the color of the clicked link.
  TextColorFormat.style.color = "#00d5ff";
  HexColorFormat.style.color = "#000000";
  RGBAColorFormat.style.color = "#000000";

  // Adding an underline for the clicked link
  TextColorFormat.style.borderBottom = "3px solid #00d5ff";
  HexColorFormat.style.borderBottom = "none";
  RGBAColorFormat.style.borderBottom = "none";

  // activate the EventListener for the clicked link and remove it for the others
  button.removeEventListener("click", HexColorGenerator);
  button.removeEventListener("click", RGBAColorGenerator);
  button.addEventListener("click", TextColorGenerator);
});

RGBAColorFormat.addEventListener("click", () => {
  // Calling the function RGBAColorGenerator() in the beginning.
  RGBAColorGenerator();

  // Change the color of the clicked link.
  RGBAColorFormat.style.color = "#00d5ff";
  TextColorFormat.style.color = "#000000";
  HexColorFormat.style.color = "#000000";

  // Adding an underline for the clicked link
  RGBAColorFormat.style.borderBottom = "3px solid #00d5ff";
  TextColorFormat.style.borderBottom = "none";
  HexColorFormat.style.borderBottom = "none";

  button.removeEventListener("click", TextColorGenerator);
  button.removeEventListener("click", HexColorGenerator);
  button.addEventListener("click", RGBAColorGenerator);
});

HexColorFormat.addEventListener("click", () => {
  // Calling the function HexColorGenerator() in the beginning.
  HexColorGenerator();

  // Change the color of the clicked link.
  HexColorFormat.style.color = "#00d5ff";
  TextColorFormat.style.color = "#000000";
  RGBAColorFormat.style.color = "#000000";

  // Adding an underline for the clicked link
  HexColorFormat.style.borderBottom = "3px solid #00d5ff";
  TextColorFormat.style.borderBottom = "none";
  RGBAColorFormat.style.borderBottom = "none";

  button.removeEventListener("click", RGBAColorGenerator);
  button.removeEventListener("click", TextColorGenerator);
  button.addEventListener("click", HexColorGenerator);
});

// Array for supported color names in Javascript
let colorArray = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
];

// Function to generate random color name from the array"
function TextColorGenerator() {
  "use strict";
  let selectedColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  modifiedTextColor.textContent = selectedColor;
  document.body.style.backgroundColor = selectedColor;
}

// Function to generate random RGBA color:
function RGBAColorGenerator() {
  "use strict";
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);
  let opacity = Math.random();
  document.body.style.backgroundColor =
    "rgba(" +
    redColor +
    ", " +
    greenColor +
    ", " +
    blueColor +
    ", " +
    opacity.toFixed(2) +
    ")";
  modifiedTextColor.textContent =
    "rgba(" +
    redColor +
    "," +
    greenColor +
    "," +
    blueColor +
    "," +
    opacity.toFixed(2) +
    ").";
}

// Function to generate random HEX color:
function HexColorGenerator() {
  "use strict";
  const hexChars = "0123456789ABCDEF";
  let selectedColor = "#";

  for (let i = 0; i < 6; i++) {
    selectedColor += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  document.body.style.backgroundColor = selectedColor;
  modifiedTextColor.textContent = selectedColor;
}
