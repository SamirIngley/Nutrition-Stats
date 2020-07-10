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

        var noData = []
        
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

            if (data.calories){
                console.log('Calories: ', data.calories)
                $('#calories').html(data.calories.toFixed(0))
            } else {
                $('#calories').html('0')
                noData.push('calories') 
            }

            if (data.totalNutrients) {

                if (data.totalNutrients.CHOCDF){
                    console.log('Carbs: ', data.totalNutrients.CHOCDF.quantity)
                    $('#carbs').html(data.totalNutrients.CHOCDF.quantity.toFixed(0))
                } else {
                    $('#carbs').html('0')
                    noData.push('carbs') 
                }

                if (data.totalNutrients.PROCNT){
                    console.log('Protein: ', data.totalNutrients.PROCNT.quantity)
                    $('#protein').html(data.totalNutrients.PROCNT.quantity.toFixed(0))
                } else {
                    $('#protein').html('0')
                    noData.push('protein') 
                }

                if (data.totalNutrients.FAT){
                    console.log('Fat: ', data.totalNutrients.FAT.quantity)
                    $('#fat').html(data.totalNutrients.FAT.quantity.toFixed(0))
                } else {
                    $('#fat').html('0')
                    noData.push('fat') 
                }

                if (data.totalNutrients.FASAT){
                    $('#saturated').html(data.totalNutrients.FASAT.quantity.toFixed(0))
                } else {
                    $('#saturated').html('0')
                    noData.push('saturated fat') 
                }

                if (data.totalNutrients.SUGAR){
                    console.log('Sugar: ', data.totalNutrients.SUGAR.quantity)
                    $('#sugar').html(data.totalNutrients.SUGAR.quantity.toFixed(0))
                } else {
                    $('#sugar').html('0')
                    noData.push('sugar') 
                }

                if (data.totalNutrients.CA){
                    $('#calcium').html(data.totalNutrients.CA.quantity.toFixed(0))
                } else {
                    $('#calcium').html('0')
                    noData.push('calcium') 
                }

                if (data.totalNutrients.FE){
                    $('#iron').html(data.totalNutrients.FE.quantity.toFixed(0))
                } else {
                    $('#iron').html('0')
                    noData.push('iron') 
                }

                if (data.totalNutrients.FIBTG){
                    $('#fiber').html(data.totalNutrients.FIBTG.quantity.toFixed(0))
                } else {
                    $('#fiber').html('0')
                    noData.push('fiber') 
                }

                if (data.totalNutrients.K){
                    $('#potassium').html(data.totalNutrients.K.quantity.toFixed(0))
                } else {
                    $('#potassium').html('0')
                    noData.push('potassium') 
                }

                if (data.totalNutrients.MG){
                    $('#magnesium').html(data.totalNutrients.MG.quantity.toFixed(0))
                } else {
                    $('#magnesium').html('0')
                    noData.push('magnesium') 
                }

                if (data.totalNutrients.NA){
                    $('#sodium').html(data.totalNutrients.NA.quantity.toFixed(0))
                } else {
                    $('#sodium').html('0')
                    noData.push('sodium') 
                }

                if (data.totalNutrients.VITD){
                    console.log("VITD DATA: ", data.totalNutrients.VITD.quantity)
                    $('#vitd').html(data.totalNutrients.VITD.quantity.toFixed(0))
                } else {
                    $('#vitd').html('0')
                    noData.push('vitd') 
                }
            } else {
                $('#name').html("We don't have data on this item")
            }

            if (noData.length > 0) {
                $('#name').html('No data for '+nameQueryStr)
            } else {
                $('#name').html(nameQueryStr)

            }

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
