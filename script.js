let mealImage = document.querySelector('.meal-image');
let image = document.querySelector('.image');
let nameOfMeal = document.querySelector('.name-of-meal');
let ingredients = document.querySelector('.ingredients');
let instructions = document.querySelector('.instructions');
let anchorDiv =document.querySelector('.anchorDiv');
let youtubeLink = document.createElement('a');
let newRecipeButton = document.querySelector('.new-recipe');

youtubeLink.textContent = 'Youtube Video'
anchorDiv.appendChild(youtubeLink)



function displayRecipe() {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {
    nameOfMeal.textContent = response.data.meals[0].strMeal
    image.setAttribute('src', response.data.meals[0].strMealThumb)
    instructions.textContent = response.data.meals[0].strInstructions
    youtubeLink.setAttribute('href', response.data.meals[0].strYoutube)
    youtubeLink.setAttribute('target', '_blank')


    
    let mealData = Object.entries(response.data.meals[0]) 
    let arrayOfIngredients = [];

    for(let i = 0; i < mealData.length; i++) { 
      if([i] > 8 && [i] < 29) {
        arrayOfIngredients.push(mealData[i])   
      }
    }
    
    let newArrayOfIngredients = arrayOfIngredients.map((item) => {
      let [first, second] = item 
      return second
    })

    for(let i = 0; i < newArrayOfIngredients.length; i++) {
      if(newArrayOfIngredients[i] === '') {
        newArrayOfIngredients.splice(i)
        ingredients.textContent = newArrayOfIngredients.join(', ')
      }
    }

  })
  .catch(function(error) {
    console.log(error);
  }) 
}

newRecipeButton.addEventListener('click', () => {
  displayRecipe()
})

displayRecipe()






















