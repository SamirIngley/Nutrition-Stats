
$(function(){
    $('#searchButton').click(function(){
        
        var queryStr = $('#searchBox').val()
        console.log(queryStr)
        
        console.log('start api');
        fetch("https://api.spoonacular.com/recipes/guessNutrition?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&title="+queryStr)
        .then(res => res.text())
        .then(data => {
            console.log(data);
            $('#output').html(data)
        })
        .catch(error => console.log('ERROR'));
        console.log('end api');

    })
})





