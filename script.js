const mealImage = document.querySelector('.meal-image');
const nameOfMeal = document.querySelector('.name-of-meal');
const ingredients = document.querySelector('.ingredients');
const instructions = document.querySelector('.instructions');
const youTube = document.querySelector('.youtube');
const newRecipe = document.querySelector('.new-recipe');

function getData() {
  axios.get('www.themealdb.com/api/json/v1/1/random.php').then(response => {
    console.log(response);
  })
}


