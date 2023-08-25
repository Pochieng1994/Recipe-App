let mealImage = document.querySelector('.meal-image');
let nameOfMeal = document.querySelector('.name-of-meal');
let ingredients = document.querySelector('.ingredients');
let instructions = document.querySelector('.instructions');
let youTube = document.querySelector('.youtube');
let newRecipe = document.querySelector('.new-recipe');

function getData() {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {
    nameOfMeal.textContent = response.data.meals[0].strMeal
    instructions.textContent = response.data.meals[0].strInstructions
  })
}

getData()

