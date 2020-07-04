
// OPTIONS PAGE: Set limits, Reset Total

$(function(){
    // listen to click of save limits
    $('#save-limits').click(function(){

        // grab value of limit boxes
        var caloriesLimit = $('#caloriesLimit').val();
        var carbsLimit = $('#carbsLimit').val();
        var proteinLimit = $('#proteinLimit').val();
        var fatLimit = $('#fatLimit').val();
        var sugarLimit = $('#sugarLimit').val();

        chrome.storage.sync.set({'caloriesLimit' : caloriesLimit}, function(){
            console.log('calories limit set: ', caloriesLimit)
        });

        chrome.storage.sync.set({'carbsLimit' : carbsLimit}, function(){
            console.log('carbs limit set: ', carbsLimit)
        });

        chrome.storage.sync.set({'proteinLimit' : proteinLimit}, function(){
            console.log('protein limit set: ', proteinLimit)
        });

        chrome.storage.sync.set({'fatLimit' : fatLimit}, function(){
            console.log('fat limit set: ', fatLimit)
        });

        chrome.storage.sync.set({'sugarLimit' : sugarLimit}, function(){
            console.log('sugar limit set: ', sugarLimit)
        });

        // if amount is entered 
        // if (proteinLimit){
        //     // set limit and close tab
        //     chrome.storage.sync.set({'proteinLimit' : proteinLimit}, function(){
        //         close();
        //     });
        // }
    });

    $('#reset-limits').click(function(){
        chrome.storage.sync.set({'caloriesLimit':0})
        chrome.storage.sync.set({'carbsLimit':0})
        chrome.storage.sync.set({'proteinLimit':0})
        chrome.storage.sync.set({'fatLimit':0})
        chrome.storage.sync.set({'sugarLimit':0})
    });


    // Reset totals, set the totals to 0
    $('#reset-totals').click(function(){

        chrome.storage.sync.set({'caloriesTotal':0})
        chrome.storage.sync.set({'carbsTotal':0})
        chrome.storage.sync.set({'proteinTotal':0})
        chrome.storage.sync.set({'fatTotal':0})
        chrome.storage.sync.set({'sugarTotal':0})

        chrome.storage.sync.set({basket: []})

    });

});