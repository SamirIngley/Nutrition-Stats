



$(function(){
    $('#searchButton').click(function(){
        
        var queryStr = $('#searchBox').val()
        console.log(queryStr)
        
        console.log('start api');
        fetch('https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query='+queryStr)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'));
        console.log('end api');

    })
})













// const searchBox = document.querySelector("searchBox");
// const searchButton = document.querySelector("searchButton")
// const outputBox = document.querySelector("output")

// // grab the form
// const form = document.querySelector("form-data");
// // grab the food name
// const food = document.querySelector("searchBox");

// console.log(form)
// console.log(food)

// const searchForFood = async foodName => {
//     errors.textContent = "";
//     console.log('just before try')
//     try {
//       console.log('start try')
//       fetch('https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query='+foodName)
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(error => console.log('ERROR'))
//       console.log('end try')
//     //   output.textContent = res.data.confirmed.value;
      
//     } catch (error) {
//       errors.textContent = "We have no data for the food you have requested.";
//     }
//   };

// const handleSubmit = async e => {
//     searchForFood(food.value);
//     console.log(food.value);
//     e.preventDefault();
//   };

// if (searchButton){
//     console.log('before EL')
//     form.addEventListener("submit", e => handleSubmit(e));
//     console.log('After EL')
// }
