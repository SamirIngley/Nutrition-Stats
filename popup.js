

// This UPDATES the TOTALS when we add an item


// Listening for click event on Submit for adding items id: add-button
$(function(){

    // When the user opens the popup, display the current Totals and the limits
    chrome.storage.sync.get(['caloriesLimit', 'caloriesTotal', 'carbsLimit', 'carbsTotal', 'proteinLimit', 'proteinTotal', 'fatLimit', 'fatTotal', 'sugarLimit', 'sugarTotal', 'basket'], function(nutrient){
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
            
        // $('#basket').text(nutrient.basket)

        //graph
        var ctx = document.getElementById('graph').getContext('2d');
        var caloriesValue = parseInt(nutrient.caloriesTotal)
        var carbsValue = parseInt(nutrient.carbsTotal)
        var proteinValue = parseInt(nutrient.proteinTotal)
        var fatValue = parseInt(nutrient.fatTotal)
        var sugarValue = parseInt(nutrient.sugarTotal)
        
        console.log('Graph values: ', caloriesValue, carbsValue, proteinValue, fatValue, sugarValue)


        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Calories', 'Carbs', 'Protein', 'Fat', 'Sugar'],
                datasets: [{
                    label: 'Nutrient Totals',
                    data: [caloriesValue, carbsValue, proteinValue, fatValue, sugarValue],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        var arrayLength = nutrient.basket.length;
        console.log(parseInt(arrayLength)+' items in basket') 
        $('item-amount').html(parseInt(arrayLength)+' items in basket')
       
        if (nutrient.basket){
            console.log(nutrient.basket);
            for (var index=0; index<arrayLength; index++){
                $('#basket').append("<li>" + String(nutrient.basket[index].name) + "</li>")
                console.log('log ', String(nutrient.basket[index].name))
            }
        }
    })

    


    // submit button id
    $('#add-button').click(function(){
        console.log('add item clicked');
        // Get the current total from chrome storage
        // first param is variable value which we are retreiving, chrome storage expects callback function as second - all chrome APIs are asynchronous
        
        var newCaloriesTotal = 0;
        var newCarbsTotal = 0;
        var newProteinTotal = 0;
        var newFatTotal = 0;
        var newSugarTotal = 0;


        // ADDING A NEW ITEM -> GET PUSHED TO BASKET ARRAY 
        // Updating Basket to display items

        // chrome.storage.sync.set({key: value}, function() {
        //     console.log('Value is set to ' + value);
        //   });
        

        chrome.storage.sync.get({basket:[]}, function(item){
            var name = $('#name').html()
            // var basket = $('#basket').html()
            var basket = item.basket;
            console.log("BASKET ITEMS: ", basket)

            var arrayLength2 = basket.length;
            console.log(parseInt(arrayLength2)+' items in basket') 
            $('item-amount').html(parseInt(arrayLength2)+' items in basket')
       

            // if it's a real name
            if (name){
                if (name == 'This item does not exist'){
                    console.log('This item cant be added to basket, it dne')
                } else {
                    // var name_str = name+' '
                    // console.log('ITEM NAME:', name_str)

                    // chrome.storage.sync.set({'basket':newCaloriesTotal})
                    basket.push({name: name})
                    console.log(basket)
                    chrome.storage.sync.set({basket:basket}, function() {
                        $('#basket').append("<li>" + name + "</li>")
                        console.log('Synced to BASKET',item.basket)
                    })
                }
            }

        })

        // Listen to Storage Changes
        chrome.storage.onChanged.addListener(function(changes, namespace) {
            for (var key in changes) {
              var storageChange = changes[key];
              console.log('Storage key "%s" in namespace "%s" changed. ' +
                          'Old value was "%s", new value is "%s".',
                          key,
                          namespace,
                          storageChange.oldValue,
                          storageChange.newValue);
            }
          });
            

        // CALORIES
        chrome.storage.sync.get('caloriesTotal', function(nutrient){
            // var newCaloriesTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.caloriesTotal){
                newCaloriesTotal += parseInt(nutrient.caloriesTotal);
                console.log('current total: ', newCaloriesTotal);

            }

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
            // var newCarbsTotal = 0;
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
            // var newProteinTotal = 0;
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
            // var newFatTotal = 0;
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
            // var newSugarTotal = 0;
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

        // graph


        chrome.storage.sync.get(['caloriesTotal','carbsTotal', 'proteinTotal', 'fatTotal', 'sugarTotal'], function(nutrient){

        var ctx = document.getElementById('graph').getContext('2d');
        // var caloriesValue = parseInt(nutrient.caloriesTotal)
        // var carbsValue = parseInt(nutrient.carbsTotal)
        // var proteinValue = parseInt(nutrient.proteinTotal)
        // var fatValue = parseInt(nutrient.fatTotal)
        // var sugarValue = parseInt(nutrient.sugarTotal)
        
        console.log('2nd Graph values: ', newCaloriesTotal, newCarbsTotal, newProteinTotal, newFatTotal, newSugarTotal )


        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Calories', 'Carbs', 'Protein', 'Fat', 'Sugar'],
                datasets: [{
                    label: 'Nutrient Totals',
                    data: [newCaloriesTotal, newCarbsTotal, newProteinTotal, newFatTotal, newSugarTotal],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        
        })
        
    });

    // Delete Basket button: resets totals, set the totals to 0
    $('#delete-basket').click(function(){

        chrome.storage.sync.set({'caloriesTotal':0})
        chrome.storage.sync.set({'carbsTotal':0})
        chrome.storage.sync.set({'proteinTotal':0})
        chrome.storage.sync.set({'fatTotal':0})
        chrome.storage.sync.set({'sugarTotal':0})

        chrome.storage.sync.set({basket: []})

    });

});