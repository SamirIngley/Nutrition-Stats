// EDAMAM NUTRITION API 
// DOCS: https://developer.edamam.com/edamam-docs-nutrition-api
// FOOD TEXT ANALYSIS


$(function(){
    $('#searchButton').click(function(){

         // loading...
         var loadingStart="loading."
         var loadingMiddle="loading.."
         var loadingEnd="loading..."
         var empty=""
 
         $('#loading').html(loadingStart)
        
        var nameQueryStr = $('#searchBox').val()
        console.log(queryStr)
        // queryStr.replace(" ",/%20/g);
        var queryStr = encodeURI(nameQueryStr)
        console.log(queryStr)

        $('#loading').html(loadingMiddle)


        urlquery = "https://api.edamam.com/api/nutrition-data?app_id=adec199b&app_key=20ffecd0c1e546e27733a30af29950f5&ingr="+queryStr

        console.log('start api');

        fetch(urlquery)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log('Calories: ', data.calories)
            console.log('Protein: ', data.totalNutrients.PROCNT.quantity)
            console.log('Carbs: ', data.totalNutrients.CHOCDF.quantity)
            console.log('Sugar: ', data.totalNutrients.SUGAR.quantity)
            console.log('Fat: ', data.totalNutrients.FAT.quantity)

            $('#name').html(nameQueryStr)
            $('#calories').html(data.calories.toFixed(0))
            $('#carbs').html(data.totalNutrients.CHOCDF.quantity.toFixed(0))
            $('#protein').html(data.totalNutrients.PROCNT.quantity.toFixed(0))
            $('#fat').html(data.totalNutrients.FAT.quantity.toFixed(0))
            $('#sugar').html(data.totalNutrients.SUGAR.quantity.toFixed(0))
            // $('.modal').addClass("open")

        })

        $('#loading').html(loadingEnd)

        $('#loading').html(empty)


        // .catch(error => {
        //     console.log('ERROR');
        //     $('#name').html('This item does not exist.')
        // })


        console.log('end api');

    })
})
