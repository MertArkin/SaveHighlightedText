
//console.log("sex");



//chrome.runtime.sendMessage({ todo: "MERT" });
//console.log("sex");


//function grabTextFromContextMenu() { }


//var result = chrome.storage.local.get(['savedText']);
//var sendpopup = false;





//if page is reloaded dont empty array just push ???

/*

var save = new Array(localStorage.getItem('savedText'));
console.log(save);

*/



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


    console.log(request);

    /*
    var x = JSON.stringify(request);
    console.log(x);

    var y = JSON.parse(x);
    console.log(y);
    */

    //console.log(request.todo);

    if (Array.isArray(request) && request != "MERT") {

        //console.log(sender);
        //console.log(sendResponse);
        sendResponse({ res: "got it" });
        //sendpopup = true;

        //chrome.storage.local.set({ data: request });

        var save = JSON.parse(localStorage.getItem('savedText')) || [];
        console.log(save);

        //YOU CAN CHANGE THIS PART TO DO MAP OR FILTER ARRAY - 
        request.forEach((item) => {
            let newItem = {
                link: item.link,
                saved_data: item.saved_data,
            };

            console.log(newItem);

            save.push(newItem);
            // console.log(item.link);
        });


        localStorage.setItem('savedText', JSON.stringify(save));

        //var b = localStorage.getItem('savedText');
        //console.log(b);
    }

    if (request.todo == "MERT") {
        var a = JSON.parse(localStorage.getItem('savedText'));

        //localStorage.setItem('persistent', JSON.stringify(message));
        sendResponse({ res: a });
    }


    //solve !!
    else if (request == "sex") {
        sendResponse({ res: "sex" });


    }



    /*
    if (sendpopup == true) {
        chrome.runtime.sendMessage({ todo: "MERT" }, function (response) {
            console.log(response);
        });
    }
    */


});



    //PUT ELSE HERE !



/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

});
*/
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

        //saved - stored
        
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