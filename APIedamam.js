// DOCS: https://developer.edamam.com/edamam-docs-nutrition-api
// FOOD TEXT ANALYSIS

// "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"




$(function(){
    $('#searchButton').click(function(){
        
        // var queryStr = $('#searchBox').val()
        // console.log(queryStr)
        
        console.log('start api');

        fetch("https://api.edamam.com/api/nutrition-data?app_id=adec199b&app_key=20ffecd0c1e546e27733a30af29950f5&ingr=1%20large%20apple")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log('Calories: ', data.calories)
            console.log('Protein: ', data.totalNutrients.PROCNT.quantity)
            console.log('Carbs: ', data.totalNutrients.CHOCDF.quantity)
            console.log('Sugar: ', data.totalNutrients.SUGAR.quantity)
            console.log('Fat: ', data.totalNutrients.FAT.quantity)

            // $('#name').html(queryStr)
            $('#protein').html(data.totalNutrients.PROCNT.quantity)
            $('#fat').html(data.totalNutrients.FAT.quantity.toFixed(2))
            $('#sugar').html(data.totalNutrients.SUGAR.quantity.toFixed(2))
            $('#carbs').html(data.totalNutrients.CHOCDF.quantity.toFixed(2))
            $('#calories').html(data.calories.toFixed(2))
            // $('.modal').addClass("open")

        })

        .catch(error => {
            console.log('ERROR');
            $('#name').html('This item does not exist.')
        })

        console.log('end api');

    })
})
