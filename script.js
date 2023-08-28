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
    //ingredients.textContent = response.data.meals[0].strIngredient1
  })
}

function array () {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {
    let result = Object.entries(response.data.meals[0])
    let arrayOfIngredients = [];

    for(let i = 0; i < result.length; i++) {
      if([i] > 8 && [i] < 29) {
        arrayOfIngredients.push(result[i])   
      }
    }
    
    let newArrayOfIngredients = arrayOfIngredients.map((item) => {
      let [first, second] = item
      return second
    })

    console.log(newArrayOfIngredients)

  })
  
}

/*let ages = [1, 2, 3, 4, 5, 6, 7]; 
let array = [];

function index () {
  for(let i = 0; i < ages.length; i++) {
    if([i] > 0 && [i] < 4) {
      array.push(ages[i])
      console.log(array)
    }
  }
}*/




/*function arrayFunction() {
  let arr = ['apple', 'pear', 'orange', 'hey',null, null]
  let emptyString = null;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === emptyString){ 
     console.log('You are awesome')
    }
  }
}*/








