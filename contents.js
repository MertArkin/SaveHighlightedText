
//console.log("sex");



//chrome.runtime.sendMessage({ todo: "MERT" });
//console.log("sex");


//function grabTextFromContextMenu() { }


//var result = chrome.storage.local.get(['savedText']);
var message = [];


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request.length != 0) {

        //console.log(sender);
        //console.log(sendResponse);
        sendResponse({ res: "got it" });
        localStorage.setItem('savedText', request);
    }

    //PUT ELSE HERE !

});

/*
result.then(
    (a) => {
        // The promise didn't resolve. Hence, it will
        // not be executed.
        //console.log({ result });
        //console.log(result.savedText);
        //console.log(a.savedText);
        if (a.savedText.length == 0) {
            message = []
            //console.log(message);
        }
        else {
            message = [...a.savedText];
        }
        console.log(message);
        //localStorage.setItem('savedText', a);
        chrome.runtime.sendMessage(message);
    },
    (error) => {
        // A rejected prmise will execute this
        console.log('We have encountered an Error!'); // Log an error
    });

    */


//setInterval(grabTextFromContextMenu, 1000);

//!

//chrome.runtime.sendMessage({ todo: "MERT" });






/*



 */