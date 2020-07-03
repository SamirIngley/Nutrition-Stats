

$(function(){
    // listen to click of save limits
    $('#save-limits').click(function(){

        // grab value of limit boxes
        var proteinLimit = $('#protein-limit').val();

        // if amount is entered 
        if (proteinLimit){
            // set limit and close tab
            chrome.storage.sync.set({'proteinLimit' : proteinLimit}, function(){
                close();
            });
        }
    });

    // Reset totals, set the totals to 0
    $('#reset-totals').click(function(){
        chrome.storage.sync.set({'proteinTotal':0})
    })

});