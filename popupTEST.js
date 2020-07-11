

// This UPDATES the TOTALS when we add an item
// Updates basket
// and Updates the graphs

// either "at load" or upon search or upon adding item

// Function I call whenever graphs need to be updated :)
function reDrawGraphs() {

    console.log('REDRAWING THE GRAPHS NOW !!!! ')

    chrome.storage.sync.get(['caloriesTotal', 'carbsTotal', 'proteinTotal', 'fatTotal', 'sugarTotal', 'saturatedTotal', 'calciumTotal', 'ironTotal', 'fiberTotal', 'potassiumTotal', 'magnesiumTotal', 'sodiumTotal', 'vitdTotal', 'basket', 'currentG', 'legendS'], function(nutrient){

        // var caloriesValue = parseInt(nutrient.caloriesTotal)
        var carbsValue = parseInt(nutrient.carbsTotal)
        var proteinValue = parseInt(nutrient.proteinTotal)
        var fatValue = parseInt(nutrient.fatTotal)
        var sugarValue = parseInt(nutrient.sugarTotal)
        var fiberValue = parseInt(nutrient.fiberTotal)
        var saturatedValue = parseInt(nutrient.saturatedTotal)

        var calciumValue = parseInt(nutrient.calciumTotal)/1000
        var potassiumValue = parseInt(nutrient.potassiumTotal)/1000
        var magnesiumValue = parseInt(nutrient.magnesiumTotal)/1000
        var ironValue = parseInt(nutrient.ironTotal)/1000
        var sodiumValue = parseInt(nutrient.sodiumTotal)/1000
        var vitdValue = parseInt(nutrient.vitdTotal)*0.025

        var ctx2 = document.getElementById('graph2').getContext('2d');
        var myChart2 = new Chart(ctx2, {
            type: nutrient.currentG,
            data: {
                labels: ['Carbs', 'Protein', 'Fat', 'Saturated', 'Sugar', 'Fiber'],
                datasets: [{
                    data: [carbsValue, proteinValue, fatValue, saturatedValue, sugarValue, fiberValue],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)', // carbs blue
                        'rgba(255, 206, 86, 0.2)', // protein yellow
                        'rgba(75, 192, 192, 0.2)', // fat green
                        'rgba(153, 102, 255, 0.2)', // saturated purp
                        'rgba(255, 99, 132, 0.2)', // sugar red
                        'rgba(0, 255, 255, 0.2)', // fiber light blue

                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)', // carbs blue
                        'rgba(255, 206, 86, 1)', // protein yellow
                        'rgba(75, 192, 192, 1)', // fat green
                        'rgba(153, 102, 255, 1)', // saturated purp
                        'rgba(255, 99, 132, 1)', // sugar red
                        'rgba(0, 255, 255, 1)' // fiber light blue

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
                },
                title:{
                    display:true,
                    text:'Macronutrients'
                },
                legend:{
                    display:nutrient.legendS,
                    position:'right',
                }
            }
        });

        var ctx3 = document.getElementById('graph3').getContext('2d');
        var myChart3 = new Chart(ctx3, {
            type: nutrient.currentG,
            data: {
                labels: ['Calcium', 'Potassium', 'Magnesium', 'Iron', 'Sodium', 'Vit D'],
                datasets: [{
                    data: [calciumValue, potassiumValue, magnesiumValue, ironValue, sodiumValue, vitdValue],
                    backgroundColor: [
                        'rgba(51, 51, 255, 0.2)', // calcium darker blue
                        'rgba(255, 153, 51, 0.2)', // potassium orange
                        'rgba(51, 255, 153, 0.2)', // magnesium light green
                        'rgba(160, 160, 160, 0.2)', // iron gray
                        'rgba(255, 102, 178, 0.2)', // sodium pink
                        'rgba(255, 255, 102, 0.2)' // vitd light yellow


                    ],
                    borderColor: [
                        'rgba(51, 51, 255, 1)', // calcium darker blue
                        'rgba(255, 153, 51, 1)', // potassium orange
                        'rgba(51, 255, 153, 1)', // magnesium light green
                        'rgba(160, 160, 160, 1)', // iron gray
                        'rgba(255, 102, 178, 1)', // sodium pink
                        'rgba(255, 255, 102, 1)' // vitd light yellow



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
                },
                title:{
                    display:true,
                    text:'Micronutrients'
                },
                legend:{
                    display:nutrient.legendS,
                    position:'right',
                }
            }
        });
    })
}




// Listening for click event on Submit for adding items id: add-button
$(function(){

    chrome.storage.sync.get(['caloriesLimit', 'caloriesTotal', 'carbsLimit', 'carbsTotal', 'proteinLimit', 'proteinTotal', 'fatLimit', 'fatTotal', 'sugarLimit', 'sugarTotal', 'saturatedTotal', 'saturatedLimit', 'calciumTotal', 'calciumLimit', 'ironTotal', 'ironLimit', 'fiberTotal', 'fiberLimit', 'potassiumTotal', 'potassiumLimit', 'magnesiumTotal', 'magnesiumLimit', 'sodiumTotal', 'sodiumLimit', 'vitdTotal', 'vitdLimit', 'basket', 'currentG', 'legendS'], function(nutrient){
        
        // When the user opens the popup, display the current Totals and the limits
        console.log('running totals');
        $('#caloriesTotal').text(nutrient.caloriesTotal)
        $('#caloriesLimit').text(nutrient.caloriesLimit)
        $('#carbsTotal').text(nutrient.carbsTotal)
        $('#carbsLimit').text(nutrient.carbsLimit)
        $('#proteinTotal').text(nutrient.proteinTotal)
        $('#proteinLimit').text(nutrient.proteinLimit)
        $('#fatTotal').text(nutrient.fatTotal)
        $('#fatLimit').text(nutrient.fatLimit)
        $('#sugarTotal').text(nutrient.sugarTotal)
        $('#sugarLimit').text(nutrient.sugarLimit)

        $('#saturatedTotal').text(nutrient.saturatedTotal)
        $('#saturatedLimit').text(nutrient.saturatedLimit)
        $('#calciumTotal').text(nutrient.calciumTotal)
        $('#calciumLimit').text(nutrient.calciumLimit)
        $('#potassiumTotal').text(nutrient.potassiumTotal)
        $('#potassiumLimit').text(nutrient.potassiumLimit)
        $('#magnesiumTotal').text(nutrient.magnesiumTotal)
        $('#magnesiumLimit').text(nutrient.magnesiumLimit)
        $('#ironTotal').text(nutrient.ironTotal)
        $('#ironLimit').text(nutrient.ironLimit)
        $('#fiberTotal').text(nutrient.fiberTotal)
        $('#fiberLimit').text(nutrient.fiberLimit)
        $('#sodiumTotal').text(nutrient.sodiumTotal)
        $('#sodiumLimit').text(nutrient.sodiumLimit)
        $('#vitdTotal').text(nutrient.vitdTotal)
        $('#vitdLimit').text(nutrient.vitdLimit)

        $('#currentG').text(nutrient.currentG)

        // $('#grams').text('g')
        // $('#mgrams').text('mg')
        // $('#iu').text('iu')


            
        // $('#basket').text(nutrient.basket)

        // graph values
        var caloriesValue = parseInt(nutrient.caloriesTotal)
        var carbsValue = parseInt(nutrient.carbsTotal)
        var proteinValue = parseInt(nutrient.proteinTotal)
        var fatValue = parseInt(nutrient.fatTotal)
        var sugarValue = parseInt(nutrient.sugarTotal)
        var fiberValue = parseInt(nutrient.fiberTotal)
        var saturatedValue = parseInt(nutrient.saturatedTotal)

        var calciumValue = parseInt(nutrient.calciumTotal)/1000
        var potassiumValue = parseInt(nutrient.potassiumTotal)/1000
        var magnesiumValue = parseInt(nutrient.magnesiumTotal)/1000
        var ironValue = parseInt(nutrient.ironTotal)/1000
        var sodiumValue = parseInt(nutrient.sodiumTotal)/1000
        var vitdValue = parseInt(nutrient.vitdTotal)*0.025


        // FIRST "TOTAL" GRAPH on page load
        // console.log('Graph values: ', caloriesValue, carbsValue, proteinValue, fatValue, sugarValue)

        // var ctx = document.getElementById('graph').getContext('2d');
        // var myChart = new Chart(ctx, {
        //     type: 'horizontalBar',
        //     data: {
        //         labels: ['Carbs', 'Protein', 'Fat', 'Saturated', 'Sugar', 'Calcium', 'Potassium', 'Magnesium', 'Iron', 'Fiber', 'Sodium', 'Vit D'],
        //         datasets: [{
        //             label: 'Nutrient Totals',
        //             data: [carbsValue, proteinValue, fatValue, saturatedValue, sugarValue, calciumValue, potassiumValue, magnesiumValue, ironValue, fiberValue, sodiumValue, vitdValue],
        //             backgroundColor: [
        //                 // 'rgba(255, 99, 132, 0.2)', // calories red
        //                 'rgba(54, 162, 235, 0.2)', // carbs blue
        //                 'rgba(255, 206, 86, 0.2)', // protein yellow
        //                 'rgba(75, 192, 192, 0.2)', // fat green
        //                 'rgba(153, 102, 255, 0.2)', // saturated purp

        //                 'rgba(255, 102, 102, 0.2)', // sugar light red
        //                 'rgba(51, 51, 255, 0.2)', // calcium darker blue
        //                 'rgba(255, 153, 51, 0.2)', // potassium orange
        //                 'rgba(51, 255, 153, 0.2)', // magnesium light green
        //                 'rgba(160, 160, 160, 0.2)', // iron gray
        //                 'rgba(0, 255, 255, 0.2)', // fiber light blue
        //                 'rgba(255, 102, 178, 0.2)', // sodium pink
        //                 'rgba(255, 255, 102, 0.2)' // vitd light yellow


        //             ],
        //             borderColor: [
        //                 // 'rgba(255, 99, 132, 1)', // calories red
        //                 'rgba(54, 162, 235, 1)', // carbs blue
        //                 'rgba(255, 206, 86, 1)', // protein yellow
        //                 'rgba(75, 192, 192, 1)', // fat green
        //                 'rgba(153, 102, 255, 1)', // saturated purp

        //                 'rgba(255, 102, 102, 1)', // sugar light red
        //                 'rgba(51, 51, 255, 1)', // calcium darker blue
        //                 'rgba(255, 153, 51, 1)', // potassium orange
        //                 'rgba(51, 255, 153, 1)', // magnesium light green
        //                 'rgba(160, 160, 160, 1)', // iron gray
        //                 'rgba(0, 255, 255, 1)', // fiber light blue
        //                 'rgba(255, 102, 178, 1)', // sodium pink
        //                 'rgba(255, 255, 102, 1)' // vitd light yellow



        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             // yAxes: [{
        //             //     ticks: {
        //             //         beginAtZero: true
        //             //     }
        //             // }]
        //         },
        //         title:{
        //             display:true,
        //             text:'Nutrient Totals'
        //         },
        //         legend:{
        //             display:false,
        //             position:'right',
        //         }
        //     }
        // });

        // GRAPHS 2 n 3 !!


        var pie = 'pie'
        var horizontalB = 'horizontalBar'
        var currentGraphValue = $('#currentG').text()

        // new current graph gets displayed
        var legendSF = false
        var legendST = true

        // set text to current graph
        // if no text
        
        // new current graph equals itself or pie if undefined (like a default value)
        // get the new current from current graph value on the page

            
        if (nutrient.currentG === undefined) {
            chrome.storage.sync.set({'currentG':horizontalB});
            chrome.storage.sync.set({'legendS':false});
        }

        // Updating Item Count
        var arrayLength = nutrient.basket.length;
        console.log(parseInt(arrayLength)+' items in basket') 
        $('#item-amount').html(parseInt(arrayLength)+' items in basket')
       
        if (nutrient.basket){
            console.log(nutrient.basket);
            for (var index=0; index<arrayLength; index++){
                $('#basket').append("<li>" + String(nutrient.basket[index].name) + "</li>")
                console.log('BASKET sync ', String(nutrient.basket[index].name))
            }
        }


        // DRAW GRAPHHS UPON DOC LOAD
        reDrawGraphs();



        // TOGGLE CHART TYPE
        $('#switch').click(function(){

            console.log('SWITCH: ',currentGraphValue)

            chrome.storage.sync.get(['currentG','legendS'], function(nutrient){
                // there exists a default value at currentG html
                console.log("BEFORE SWITCH: ", nutrient.currentG)
                if (nutrient.currentG === pie) {
                    chrome.storage.sync.set({'currentG':horizontalB});
                    chrome.storage.sync.set({'legendS':false});
                    console.log('AFTER SWITCH: ', nutrient.currentG)
                    // $('#current-graph').html('bar')
                    // location.reload()
                    reDrawGraphs();



                } else {
                    chrome.storage.sync.set({'currentG':pie});
                    chrome.storage.sync.set({'legendS':true});
                    console.log('AFTER SWITCH: ', nutrient.currentG)
                    // $('#current-graph').html(pie)
                    // location.reload()
                    reDrawGraphs();
                }
            });
        });


        
        
    });

        
    

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

        var newSaturatedTotal = 0;
        var newCalciumTotal = 0;
        var newPotassiumTotal = 0;
        var newMagnesiumTotal = 0;
        var newIronTotal = 0;
        var newFiberTotal = 0;
        var newSodiumTotal = 0;
        var newVitdTotal = 0;




        // ADDING A NEW ITEM -> GET PUSHED TO BASKET ARRAY 
        // Updating Basket to display items

        // chrome.storage.sync.set({key: value}, function() {
        //     console.log('Value is set to ' + value);
        //   });
        

        chrome.storage.sync.get({basket:[]}, function(item){

            // number of items in basket
            // var arrayLength = nutrient.basket.length;
            // console.log(parseInt(arrayLength)+' items in basket') 
            // $('#item-amount').html(parseInt(arrayLength)+' items in basket')

            // basket items
            var errMsg = "No data for "
            var name = $('#name').html()
            // var basket = $('#basket').html()
            var basket = item.basket;
            console.log("BASKET ITEMS: ", basket)
    

            // if it's a real name
            if (name){
                // if the name of the item isn't real and is our error message
                if (name.slice(0,11) === errMsg){
                    console.log('This item cant be added to basket, it dne')
                    console.log(' LOOK AT ME !!!!! '+name.slice(0,11))
                } else {
                    console.log(' LOOK AT ME !!!!! '+name)

                    basket.push({name: name})
                    console.log(basket)
                    chrome.storage.sync.set({basket:basket}, function() {
                        $('#basket').append("<li>" + name + "</li>")
                        console.log('Synced to BASKET: ',basket)
                    })
                    // UPDATE BASKET item-amount
                    var arrayLength = basket.length;
                    console.log(parseInt(arrayLength)+' items in basket') 
                    $('#item-amount').html(parseInt(arrayLength)+' items in basket')
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
            

        // UPDATING ALL THE TOTALS FOR EACH NUTRIENT
 

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

        // SATURATED
        chrome.storage.sync.get('saturatedTotal', function(nutrient){
            // var newsaturatedTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.saturatedTotal){
                newSaturatedTotal += parseInt(nutrient.saturatedTotal);
                console.log('current total: ', newSaturatedTotal);

            }

            // Get the html from protein id, which the api gave us
            var saturatedAmount = $('#saturated').html(); 
            console.log('saturated of ingredient found: ', saturatedAmount);

            if (saturatedAmount){
                newSaturatedTotal += parseInt(saturatedAmount);
                console.log('new saturated Total: ', newSaturatedTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'saturatedTotal':newSaturatedTotal})

            // Update UI - presents new total
            $('#saturatedTotal').text(newSaturatedTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        // CALCIUM
        chrome.storage.sync.get('calciumTotal', function(nutrient){
            // var newcalciumTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.calciumTotal){
                newCalciumTotal += parseInt(nutrient.calciumTotal);
                console.log('current total: ', newCalciumTotal);

            }

            // Get the html from protein id, which the api gave us
            var calciumAmount = $('#calcium').html(); 
            console.log('calcium of ingredient found: ', calciumAmount);

            if (calciumAmount){
                newCalciumTotal += parseInt(calciumAmount);
                console.log('new calcium Total: ', newCalciumTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'calciumTotal':newCalciumTotal})

            // Update UI - presents new total
            $('#calciumTotal').text(newCalciumTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        // POTASSIUM
        chrome.storage.sync.get('potassiumTotal', function(nutrient){
            // var newpotassiumTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.potassiumTotal){
                newPotassiumTotal += parseInt(nutrient.potassiumTotal);
                console.log('current total: ', newPotassiumTotal);

            }

            // Get the html from protein id, which the api gave us
            var potassiumAmount = $('#potassium').html(); 
            console.log('potassium of ingredient found: ', potassiumAmount);

            if (potassiumAmount){
                newPotassiumTotal += parseInt(potassiumAmount);
                console.log('new potassium Total: ', newPotassiumTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'potassiumTotal':newPotassiumTotal})

            // Update UI - presents new total
            $('#potassiumTotal').text(newPotassiumTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // MAGNESIUM
        chrome.storage.sync.get('MagnesiumTotal', function(nutrient){
            // var newmagnesiumTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.magnesiumTotal){
                newMagnesiumTotal += parseInt(nutrient.magnesiumTotal);
                console.log('current total: ', newMagnesiumTotal);

            }

            // Get the html from protein id, which the api gave us
            var magnesiumAmount = $('#magnesium').html(); 
            console.log('magnesium of ingredient found: ', magnesiumAmount);

            if (magnesiumAmount){
                newMagnesiumTotal += parseInt(magnesiumAmount);
                console.log('new magnesium Total: ', newMagnesiumTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'magnesiumTotal':newMagnesiumTotal})

            // Update UI - presents new total
            $('#magnesiumTotal').text(newMagnesiumTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

                
        // IRON
        chrome.storage.sync.get('ironTotal', function(nutrient){
            // var newironTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.ironTotal){
                newIronTotal += parseInt(nutrient.ironTotal);
                console.log('current total: ', newIronTotal);

            }

            // Get the html from protein id, which the api gave us
            var ironAmount = $('#iron').html(); 
            console.log('iron of ingredient found: ', ironAmount);

            if (ironAmount){
                newIronTotal += parseInt(ironAmount);
                console.log('new iron Total: ', newIronTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'ironTotal':newIronTotal})

            // Update UI - presents new total
            $('#ironTotal').text(newIronTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // FIBER
        chrome.storage.sync.get('fiberTotal', function(nutrient){
            // var newfiberTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.fiberTotal){
                newFiberTotal += parseInt(nutrient.fiberTotal);
                console.log('current total: ', newFiberTotal);

            }

            // Get the html from protein id, which the api gave us
            var fiberAmount = $('#fiber').html(); 
            console.log('fiber of ingredient found: ', fiberAmount);

            if (fiberAmount){
                newFiberTotal += parseInt(fiberAmount);
                console.log('new fiber Total: ', newFiberTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'fiberTotal':newFiberTotal})

            // Update UI - presents new total
            $('#fiberTotal').text(newFiberTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })

        // SODIUM
        chrome.storage.sync.get('sodiumTotal', function(nutrient){
            // var newsodiumTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.sodiumTotal){
                newSodiumTotal += parseInt(nutrient.sodiumTotal);
                console.log('current total: ', newSodiumTotal);

            }

            // Get the html from protein id, which the api gave us
            var sodiumAmount = $('#sodium').html(); 
            console.log('sodium of ingredient found: ', sodiumAmount);

            if (sodiumAmount){
                newSodiumTotal += parseInt(sodiumAmount);
                console.log('new sodium Total: ', newSodiumTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'sodiumTotal':newSodiumTotal})

            // Update UI - presents new total
            $('#sodiumTotal').text(newSodiumTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // VITAMIN D
        chrome.storage.sync.get('vitdTotal', function(nutrient){
            // var newvitdTotal = 0;
            console.log('new total init');

            // if a total exists, we add item to new total which is 0 so far
            if (nutrient.vitdTotal){
                newVitdTotal += parseInt(nutrient.vitdTotal);
                console.log('current total: ', newVitdTotal);

            }

            // Get the html from protein id, which the api gave us
            var vitdAmount = $('#vitd').html(); 
            console.log('vitd of ingredient found: ', vitdAmount);

            if (vitdAmount){
                newVitdTotal += parseInt(vitdAmount);
                console.log('new vitd Total: ', newVitdTotal);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'vitdTotal':newVitdTotal})

            reDrawGraphs();


            // Update UI - presents new total
            $('#vitdTotal').text(newVitdTotal)
            console.log('update UI');


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })


        // Total GRAPHs on click
        reDrawGraphs();

        


        
        
    });



    // Delete Basket button: resets totals, set the totals to 0
    $('#delete-basket').click(function(){

        chrome.storage.sync.set({'caloriesTotal':0})
        chrome.storage.sync.set({'carbsTotal':0})
        chrome.storage.sync.set({'proteinTotal':0})
        chrome.storage.sync.set({'fatTotal':0})
        chrome.storage.sync.set({'sugarTotal':0})
        chrome.storage.sync.set({'saturatedTotal':0})
        chrome.storage.sync.set({'calciumTotal':0})
        chrome.storage.sync.set({'potassiumTotal':0})
        chrome.storage.sync.set({'magnesiumTotal':0})
        chrome.storage.sync.set({'ironTotal':0})
        chrome.storage.sync.set({'fiberTotal':0})
        chrome.storage.sync.set({'sodiumTotal':0})
        chrome.storage.sync.set({'vitdTotal':0})

        chrome.storage.sync.set({basket: []})

        close();

    });




});