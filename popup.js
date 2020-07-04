

// This UPDATES the TOTALS when we add an item


// Listening for click event on Submit for adding items id: add-button
$(function(){

    // When the user opens the popup, display the current Totals and the limits
    chrome.storage.sync.get(['caloriesLimit', 'caloriesTotal', 'carbsLimit', 'carbsTotal', 'proteinLimit', 'proteinTotal', 'fatLimit', 'fatTotal', 'sugarLimit', 'sugarTotal'], function(nutrient){
        $('#caloriesTotal').text(nutrient.caloriesTotal)
        $('#caloriesLimit').text(nutrient.caloriesLimit)
        console.log('running totals');
        $('#carbsTotal').text(nutrient.carbsTotal)
        $('#carbsLimit').text(nutrient.carbsLimit)
        $('#proteinTotal').text(nutrient.proteinTotal)
        $('#proteinLimit').text(nutrient.proteinLimit)
        $('#fatTotal').text(nutrient.fatTotal)
        $('#fatLimit').text(nutrient.fatLimit)
        $('#sugarTotal').text(nutrient.sugarTotal)
        $('#sugarLimit').text(nutrient.sugarLimit)
    })

    // submit button id
    $('#add-button').click(function(){
        console.log('add item clicked');

        // Get the current total from chrome storage
        // first param is variable value which we are retreiving, chrome storage expects callback function as second - all chrome APIs are asynchronous
        

        // CALORIES
        chrome.storage.sync.get('caloriesTotal', function(nutrient){
            var newCaloriesTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total
            if (nutrient.caloriesTotal){
                newCaloriesTotal += parseInt(nutrient.caloriesTotal);
                console.log('current total: ', newCaloriesTotal);

            }

            // if user entered some amount, update new total
            // Get the html from protein id, which the api gave us
            var caloriesAmount = $('#calories').html(); 
            console.log('calories of ingredient found: ', caloriesAmount);

            if (caloriesAmount){
                newCaloriesTotal += parseInt(caloriesAmount);
                console.log('new Calories Total: ', newCaloriesTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'caloriesTotal':newCaloriesTotal})

            // Update UI - presents new total
            $('#caloriesTotal').text(newCaloriesTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // CARBOHYDRATES
        chrome.storage.sync.get('carbsTotal', function(nutrient){
            var newCarbsTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total
            if (nutrient.carbsTotal){
                newCarbsTotal += parseInt(nutrient.carbsTotal);
                console.log('current total: ', newCarbsTotal);

            }

            // if user entered some amount, update new total
            // Get the html from protein id, which the api gave us
            var carbsAmount = $('#carbs').html(); 
            console.log('carbs of ingredient found: ', carbsAmount);

            if (carbsAmount){
                newCarbsTotal += parseInt(carbsAmount);
                console.log('new Carbs Total: ', newCarbsTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'carbsTotal':newCarbsTotal})

            // Update UI - presents new total
            $('#carbsTotal').text(newCarbsTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // PROTEIN
        chrome.storage.sync.get('proteinTotal', function(nutrient){
            var newProteinTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total
            if (nutrient.proteinTotal){
                newProteinTotal += parseInt(nutrient.proteinTotal);
                console.log('current total:', newProteinTotal);

            }

            // if user entered some amount, update new total
            // Get the html from protein id, which the api gave us
            var proteinAmount = $('#protein').html(); 
            console.log('protein of ingredient found: ', proteinAmount);

            if (proteinAmount){
                newProteinTotal += parseInt(proteinAmount);
                console.log('new Protein Total: ', newProteinTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'proteinTotal':newProteinTotal})

            // Update UI - presents new total
            $('#proteinTotal').text(newProteinTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        // FAT
        chrome.storage.sync.get('fatTotal', function(nutrient){
            var newFatTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total
            if (nutrient.fatTotal){
                newFatTotal += parseInt(nutrient.fatTotal);
                console.log('current total: ', newFatTotal);

            }

            // if user entered some amount, update new total
            // Get the html from protein id, which the api gave us
            var fatAmount = $('#fat').html(); 
            console.log('fat of ingredient found: ', fatAmount);

            if (fatAmount){
                newFatTotal += parseInt(fatAmount);
                console.log('new Protein Total: ', newFatTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'fatTotal':newFatTotal})

            // Update UI - presents new total
            $('#fatTotal').text(newFatTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        // SUGAR
        chrome.storage.sync.get('sugarTotal', function(nutrient){
            var newSugarTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total
            if (nutrient.sugarTotal){
                newSugarTotal += parseInt(nutrient.sugarTotal);
                console.log('current total: ', newSugarTotal);

            }

            // if user entered some amount, update new total
            // Get the html from protein id, which the api gave us
            var sugarAmount = $('#sugar').html(); 
            console.log('sugar of ingredient found: ', sugarAmount);

            if (sugarAmount){
                newSugarTotal += parseInt(sugarAmount);
                console.log('new Sugar Total: ', newSugarTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'sugarTotal':newSugarTotal})

            // Update UI - presents new total
            $('#sugarTotal').text(newSugarTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        
    })
});