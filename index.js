// Challenge 2: Cat Generator

function generateCat() {
  const image = document.createElement("img");
  const div = document.getElementById("flex=cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}
