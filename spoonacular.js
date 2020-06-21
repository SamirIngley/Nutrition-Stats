






// document.addEventListener('DOMContentLoaded', function() {

//   document.querySelector('button').addEventListener('click',
//         getIngredients(document.getElementById('search').value), false)

//   function getsource(id){
//     console.log(id)
//     $.ajax({
//       url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=db254b5cd61744d39a2deebd9c361444",
//       success: function(res){
//         document.getElementById("sourceLink").innerHTML=res.sourceUrl
//         document.getElementById("sourceLink").href=res.sourceUrl
//       }
//     });
//   }

//   function getIngredients(q){
//     console.log('get ingredients')
//     console.log(q)
//     console.log(document.getElementById('search').value)
//     $.ajax({
//       url:"https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query="+q,
//       success: function(res){
//         document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br> ready in "+res.results[0].ingredients+" minutes" 
//         getsource(res.results[0].id)
//       }
//     });
//   }

// }, false)

  
