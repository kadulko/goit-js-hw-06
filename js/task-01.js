const items = document.querySelectorAll(".item");
const numberOfCategories = [...items].length;
console.log("Number of categories: ", numberOfCategories);
items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = [...item.querySelectorAll("li")].length;
  console.log(`Category: ${categoryName} | Elements: ${categoryElements}`);
});
