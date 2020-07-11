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


        urlquery = "https://api.edamam.com/api/nutrition-data?app_id=a79d12c6&app_key=d52dd6e4e97c052fa687301f3547ff42&ingr="+queryStr

        console.log('start api');

        fetch(urlquery)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.calories){
                console.log('Calories: ', data.calories)
                $('#calories').html('Calories: '+data.calories.toFixed(0))
            } else {
                $('#calories').html('0')
                noData.push('calories') 
            }

            if (data.totalNutrients) {

                if (data.totalNutrients.CHOCDF){
                    console.log('Carbs: ', data.totalNutrients.CHOCDF.quantity)
                    $('#carbs').html('Carbs: '+data.totalNutrients.CHOCDF.quantity.toFixed(0))
                } else {
                    $('#carbs').html('0')
                    noData.push('carbs') 
                }

                if (data.totalNutrients.PROCNT){
                    console.log('Protein: ', data.totalNutrients.PROCNT.quantity)
                    $('#protein').html('Protein: '+data.totalNutrients.PROCNT.quantity.toFixed(0))
                } else {
                    $('#protein').html('0')
                    noData.push('protein') 
                }

                if (data.totalNutrients.FAT){
                    console.log('Fat: ', data.totalNutrients.FAT.quantity)
                    $('#fat').html('Fat: '+data.totalNutrients.FAT.quantity.toFixed(0))
                } else {
                    $('#fat').html('0')
                    noData.push('fat') 
                }

                if (data.totalNutrients.FASAT){
                    $('#saturated').html('Saturated: '+data.totalNutrients.FASAT.quantity.toFixed(0))
                } else {
                    $('#saturated').html('0')
                    noData.push('saturated fat') 
                }

                if (data.totalNutrients.SUGAR){
                    console.log('Sugar: ', data.totalNutrients.SUGAR.quantity)
                    $('#sugar').html('Sugar: '+data.totalNutrients.SUGAR.quantity.toFixed(0))
                } else {
                    $('#sugar').html('0')
                    noData.push('sugar') 
                }

                if (data.totalNutrients.CA){
                    $('#calcium').html('Calcium: '+data.totalNutrients.CA.quantity.toFixed(0))
                } else {
                    $('#calcium').html('0')
                    noData.push('calcium') 
                }

                if (data.totalNutrients.FE){
                    $('#iron').html('Iron: ', data.totalNutrients.FE.quantity.toFixed(0))
                } else {
                    $('#iron').html('0')
                    noData.push('iron') 
                }

                if (data.totalNutrients.FIBTG){
                    $('#fiber').html('Fiber: ', data.totalNutrients.FIBTG.quantity.toFixed(0))
                } else {
                    $('#fiber').html('0')
                    noData.push('fiber') 
                }

                if (data.totalNutrients.K){
                    $('#potassium').html('Potassium: ', data.totalNutrients.K.quantity.toFixed(0))
                } else {
                    $('#potassium').html('0')
                    noData.push('potassium') 
                }

                if (data.totalNutrients.MG){
                    $('#magnesium').html('Magnesium: ', data.totalNutrients.MG.quantity.toFixed(0))
                } else {
                    $('#magnesium').html('0')
                    noData.push('magnesium') 
                }

                if (data.totalNutrients.NA){
                    $('#sodium').html('Sodium: ', data.totalNutrients.NA.quantity.toFixed(0))
                } else {
                    $('#sodium').html('0')
                    noData.push('sodium') 
                }

                if (data.totalNutrients.VITD){
                    console.log("VITD DATA: ", data.totalNutrients.VITD.quantity)
                    $('#vitd').html('Vit D: ', data.totalNutrients.VITD.quantity.toFixed(0))
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


            $('.modal').addClass("open")
            
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
