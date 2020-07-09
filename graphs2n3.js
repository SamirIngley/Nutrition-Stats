


// Listening for click event on Submit for adding items id: add-button
$(function(){

    chrome.storage.sync.get(['caloriesLimit', 'caloriesTotal', 'carbsLimit', 'carbsTotal', 'proteinLimit', 'proteinTotal', 'fatLimit', 'fatTotal', 'sugarLimit', 'sugarTotal', 'saturatedTotal', 'saturatedLimit', 'calciumTotal', 'calciumLimit', 'ironTotal', 'ironLimit', 'fiberTotal', 'fiberLimit', 'potassiumTotal', 'potassiumLimit', 'magnesiumTotal', 'magnesiumLimit','magnesium', 'sodiumTotal', 'sodiumLimit', 'vitdTotal', 'vitdLimit', 'basket'], function(nutrient){
        // var caloriesValue = parseInt(nutrient.caloriesTotal)
        var carbsValue = parseInt(nutrient.carbsTotal)
        var proteinValue = parseInt(nutrient.proteinTotal)
        var fatValue = parseInt(nutrient.fatTotal)
        var sugarValue = parseInt(nutrient.sugarTotal)
        var saturatedValue = parseInt(nutrient.saturatedTotal)
        var calciumValue = parseInt(nutrient.calciumTotal)/1000
        var potassiumValue = parseInt(nutrient.potassiumTotal)/1000
        var magnesiumValue = parseInt(nutrient.magnesiumTotal)/1000
        var ironValue = parseInt(nutrient.ironTotal)/1000
        var fiberValue = parseInt(nutrient.fiberTotal)
        var sodiumValue = parseInt(nutrient.sodiumTotal)/1000
        var vitdValue = parseInt(nutrient.vitdTotal)*0.025

        var ctx2 = document.getElementById('graph2').getContext('2d');
        var myChart2 = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: ['Carbs', 'Protein', 'Fat', 'Saturated', 'Sugar'],
                datasets: [{
                    label: 'Nutrient Totals',
                    data: [carbsValue, proteinValue, fatValue, saturatedValue, sugarValue],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)', // carbs blue
                        'rgba(255, 206, 86, 0.2)', // protein yellow
                        'rgba(75, 192, 192, 0.2)', // fat green
                        'rgba(153, 102, 255, 0.2)', // saturated purp
                        'rgba(255, 99, 132, 0.2)', // sugar red


                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)', // carbs blue
                        'rgba(255, 206, 86, 1)', // protein yellow
                        'rgba(75, 192, 192, 1)', // fat green
                        'rgba(153, 102, 255, 1)', // saturated purp
                        'rgba(255, 99, 132, 1)', // sugar red


                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    
                },
                title:{
                    display:true,
                    text:'Macronutrients'
                },
                legend:{
                    display:true,
                    position:'right',
                }
            }
        });

        var ctx3 = document.getElementById('graph3').getContext('2d');
        var myChart3 = new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['Calcium', 'Potassium', 'Magnesium', 'Iron', 'Fiber', 'Sodium', 'Vit D'],
                datasets: [{
                    label: 'Nutrient Totals',
                    data: [calciumValue, potassiumValue, magnesiumValue, ironValue, fiberValue, sodiumValue, vitdValue],
                    backgroundColor: [
                        'rgba(51, 51, 255, 0.2)', // calcium darker blue
                        'rgba(255, 153, 51, 0.2)', // potassium orange
                        'rgba(51, 255, 153, 0.2)', // magnesium light green
                        'rgba(160, 160, 160, 0.2)', // iron gray
                        'rgba(0, 255, 255, 0.2)', // fiber light blue
                        'rgba(255, 102, 178, 0.2)', // sodium pink
                        'rgba(255, 255, 102, 0.2)' // vitd light yellow


                    ],
                    borderColor: [
                        'rgba(51, 51, 255, 1)', // calcium darker blue
                        'rgba(255, 153, 51, 1)', // potassium orange
                        'rgba(51, 255, 153, 1)', // magnesium light green
                        'rgba(160, 160, 160, 1)', // iron gray
                        'rgba(0, 255, 255, 1)', // fiber light blue
                        'rgba(255, 102, 178, 1)', // sodium pink
                        'rgba(255, 255, 102, 1)' // vitd light yellow



                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    // yAxes: [{
                    //     ticks: {
                    //         beginAtZero: true
                    //     }
                    // }]
                },
                title:{
                    display:true,
                    text:'Micronutrients'
                },
                legend:{
                    display:true,
                    position:'right',
                }
            }
        });

    })

    $('#add-button').click(function(){
        console.log('add item clicked');
        chrome.storage.sync.get(['caloriesTotal', 'carbsTotal', 'proteinTotal', 'fatTotal', 'sugarTotal', 'saturatedTotal', 'basket'], function(nutrient){

            var ctx2 = document.getElementById('graph2').getContext('2d');    
            var myChart2 = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: ['Carbs', 'Protein', 'Fat', 'Saturated', 'Sugar'],
                    datasets: [{
                        data: [newCarbsTotal, newProteinTotal, newFatTotal, newSaturatedTotal, newSugarTotal],
                        backgroundColor: [
                            // 'rgba(255, 99, 132, 0.2)', // calories red
                            'rgba(54, 162, 235, 0.2)', // carbs blue
                            'rgba(255, 206, 86, 0.2)', // protein yellow
                            'rgba(75, 192, 192, 0.2)', // fat green
                            'rgba(153, 102, 255, 0.2)', // saturated purp
    
                            'rgba(255, 102, 102, 0.2)', // sugar light red
                            'rgba(51, 51, 255, 0.2)', // calcium darker blue
                            'rgba(255, 153, 51, 0.2)', // potassium orange
                            'rgba(51, 255, 153, 0.2)', // magnesium light green
                            'rgba(160, 160, 160, 0.2)', // iron gray
                            'rgba(0, 255, 255, 0.2)', // fiber light blue
                            'rgba(255, 102, 178, 0.2)', // sodium pink
                            'rgba(255, 255, 102, 0.2)' // vitd light yellow
    
    
                        ],
                        borderColor: [
                            // 'rgba(255, 99, 132, 1)', // calories red
                            'rgba(54, 162, 235, 1)', // carbs blue
                            'rgba(255, 206, 86, 1)', // protein yellow
                            'rgba(75, 192, 192, 1)', // fat green
                            'rgba(153, 102, 255, 1)', // saturated purp
    
                            'rgba(255, 102, 102, 1)', // sugar light red
                            'rgba(51, 51, 255, 1)', // calcium darker blue
                            'rgba(255, 153, 51, 1)', // potassium orange
                            'rgba(51, 255, 153, 1)', // magnesium light green
                            'rgba(160, 160, 160, 1)', // iron gray
                            'rgba(0, 255, 255, 1)', // fiber light blue
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
                        text:'Macronutrients'
                    },
                    legend:{
                        display:true,
                        position:'right',
                    }
                }
            });

            var ctx3 = document.getElementById('graph2').getContext('2d');
            var myChart3 = new Chart(ctx3, {
                type: 'pie',
                data: {
                    labels: ['Calcium', 'Potassium', 'Magnesium', 'Iron', 'Fiber', 'Sodium', 'Vit D'],
                    datasets: [{
                        data: [newCalciumTotal/1000, newPotassiumTotal/1000, newMagnesiumTotal/1000, newIronTotal/1000, newFiberTotal, newSodiumTotal/1000, newVitdTotal*0.025],
                        backgroundColor: [
                            'rgba(51, 51, 255, 0.2)', // calcium darker blue
                            'rgba(255, 153, 51, 0.2)', // potassium orange
                            'rgba(51, 255, 153, 0.2)', // magnesium light green
                            'rgba(160, 160, 160, 0.2)', // iron gray
                            'rgba(0, 255, 255, 0.2)', // fiber light blue
                            'rgba(255, 102, 178, 0.2)', // sodium pink
                            'rgba(255, 255, 102, 0.2)' // vitd light yellow
    
    
                        ],
                        borderColor: [
                            'rgba(51, 51, 255, 1)', // calcium darker blue
                            'rgba(255, 153, 51, 1)', // potassium orange
                            'rgba(51, 255, 153, 1)', // magnesium light green
                            'rgba(160, 160, 160, 1)', // iron gray
                            'rgba(0, 255, 255, 1)', // fiber light blue
                            'rgba(255, 102, 178, 1)', // sodium pink
                            'rgba(255, 255, 102, 1)' // vitd light yellow
    
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    // scales: {
                        // yAxes: [{
                        //     ticks: {
                        //         beginAtZero: true
                        //     }
                        // }]
                    // },
                    title:{
                        display:true,
                        text:'Micronutrients'
                    },
                    legend:{
                        display:true,
                        position:'right',
                    }
                }
            });
    
    
    });
    })
})