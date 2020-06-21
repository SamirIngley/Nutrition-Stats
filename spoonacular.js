
// console.log(fetch('https://reqres.in/api/users'))


// Uncaught SyntaxError: Cannot use import statement outside a module
// Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../".

// import axios from "axios";
// const api = "https://api.spoonacular.com/food/products/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&query=";
// const errors = document.querySelector(".errors");
// errors.textContent = "";

// // grab the form
// const form = document.querySelector(".form-data");
// // grab the country name
// const food = document.querySelector(".food-name");

// // declare a method to search by country name
// const searchForFood = async foodName => {
//   errors.textContent = "";
//   try {
//     const response = await axios.get(`${api}${foodName}`);
//     output.textContent = response.data.value;
//     results.style.display = "block";
//   } catch (error) {
//     errors.textContent = "We have no data for the item you have requested.";
//   }
// };

// // declare a function to handle form submission
// const handleSubmit = async e => {
//   e.preventDefault();
//   searchForFood(food.value);
//   console.log(food.value);
// };

// form.addEventListener("submit", e => handleSubmit(e));






document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('button').addEventListener('click',
        getIngredients(document.getElementById('search').value), false)

  function getsource(id){
    console.log(id)
    $.ajax({
      url:"https://api.spoonacular.com/food/products/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&query="+id+"&number=2",
      success: function(res){
        document.getElementById("sourceLink").innerHTML=res.sourceUrl
        document.getElementById("sourceLink").href=res.sourceUrl
      }
    });
  }

  function getIngredients(q){
    console.log('get ingredients')
    console.log(q)
    $.ajax({
      url:"https://api.spoonacular.com/recipes/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&query="+q,
      success: function(res){
        document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br> ready in "+res.results[0].ingredients+" minutes" 
        getsource(res.results[0].id)
      }
    });
  }






      // function setCount (res) {
      //     const div = document.createElement('div')
      //     div.textContent = `${res.count} bears`
      //     document.body.appendChild(div)
      // }

}, false)





// function getsource(id){
//   $.ajax({
//   url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=db254b5cd61744d39a2deebd9c361444",
//   success: function(res) {
  
//   document.getElementById("sourceLink").innerHTML=res.sourceUrl
//   document.getElementById("sourceLink").href=res.sourceUrl
//   }
//   });
//   }
//   function getrecepe(q){
//   $.ajax({
//   url:"https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query="+q,
//   success: function(res) {
  
//   document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"' width='400' /><br>Ready in "+res.results[0].readyInMinutes+" minutes"
//   getsource(res.results[0].id)
//   }
//   });
//   }
  
