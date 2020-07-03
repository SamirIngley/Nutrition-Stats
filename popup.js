
// This updates our totals

// Listening for click event on Submit id: add-button
$(function(){
    $('#add-button').click(function(){
        chrome.storage.sync.get('proteinTotal', function(protein){
            var newProteinTotal = 0;

            // if a total exists, we add it to new total
            if (protein.total){
                newProteinTotal += parseInt(protein.proteinTotal);
            }

            // if something was entered, update new total
            var proteinAmount = $('#protein-amount').val;
            if (proteinAmount){
                newProteinTotal += parseInt(proteinAmount);
            }

            // Set the new total in the chrome storage
            chrome.storage.sync.set({'proteinTotal':newProteinTotal})
            
            // Update UI
            $('#proteinTotal')
        })
    })
});