
// This updates the totals when we add an item

// Listening for click event on Submit id: add-button
$(function(){

    // When the user opens the popup, display the current Total
    chrome.storage.sync.get('proteinTotal', function(protein){
        $('#proteinTotal').text(protein.proteinTotal)
    })

    //submit button id
    $('#add-button').click(function(){

        // Get the current total from chrome storage
        chrome.storage.sync.get('proteinTotal', function(protein){
            var newProteinTotal = 0;

            // if a total exists, we add it to new total
            if (protein.proteinTotal){
                newProteinTotal += parseInt(protein.proteinTotal);
            }

            // if something was entered, update new total
            var proteinAmount = $('#item-protein-amount').val;
            if (proteinAmount){
                newProteinTotal += parseInt(proteinAmount);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'proteinTotal':newProteinTotal})
            
            // Update UI - presents new total
            $('#proteinTotal').text(newProteinTotal)


            // if input box, clear it using below
            // $('#item-protein-amount').val('');
        })
    })
});