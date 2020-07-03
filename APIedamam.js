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
        })

        .catch(error => {
            console.log('ERROR');
            $('#name').html('This item does not exist.')
        })

        console.log('end api');

    })
})
