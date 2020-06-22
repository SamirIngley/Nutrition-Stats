

$(function(){
    $('#searchButton').click(function(){
        
        var queryStr = $('#searchBox').val()
        console.log(queryStr)
        
        console.log('start api');
        fetch("https://api.spoonacular.com/recipes/guessNutrition?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&title="+queryStr)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $('#name').html(queryStr)
            $('#protein').html(data.protein.value)
            $('#fat').html(data.fat.value)
            $('#carbs').html(data.carbs.value)
            $('#calories').html(data.calories.value)
        })
        .catch(error => {
            console.log('ERROR');
            $('#name').html('This item does not exist.')
        })
        console.log('end api');

    })
})



// // $ notation means we're using jquery to work with the html
// $(function(){
//     // run this function when we click the search button
//     $('#searchButton').click(function(){
        
//         //grab the query from the search box
//         const queryStr = $('#searchBox').val()
//         console.log(queryStr)

//         // start request for data from api
//         console.log('start api get id');
//         const api_url = "https://api.spoonacular.com/recipes/guessNutrition?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&title="
//         fetch(api_url+queryStr)
//         .then(res => {
//             console.log(res.json())
//             $('#output').html(res)
//         })
//             //from video.. to get id:
//             // const api_url = "https://api.spoonacular.com/recipes/search?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&number=1&query="

//         .catch(error => console.log('ERROR'));
//         console.log('end api')

//     })
// })





