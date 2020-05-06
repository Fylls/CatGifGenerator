// there are actually different ways to generate cats, ya know?

// use Static Cat
// this f() takes cat.gif in the src folder and puts it in the html
function staticCat() {
  const image = document.createElement("img");
  const div = document.getElementById("flex=cat-gen");
  image.src = "./src/cat.gif";
  div.appendChild(image);
}

// this f() generates cat a from api with specific link
// since link is hard-coded every cat should be the same,
// if you reload the page, the cat is different
function generateSameBoringCat() {
  const image = document.createElement("img");
  const div = document.getElementById("flex=cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

// generate cat from API

async function getUserAsync() {
  let response = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  );
  let data = await response.json();
  return data;
}

async function loadNextImage() {
  try {
    let response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      { params: { limit: 1, size: "full" } }
    ); // Ask for 1 Image, at full resolution

    this.image = response.data[0]; // the response is an Array, so just use the first item as the Image

    console.log("-- Image from TheCatAPI.com");
    console.log("id:", this.image.id);
    console.log("url:", this.image.url);
  } catch (err) {
    console.log(err);
  }
}
