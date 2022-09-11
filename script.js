

/*
Fired when the extension is first installed, when the extension is updated to a new version, 
and when Chrome is updated to a new version.
*/
chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({
        "id": "SaveOn",
        "title": "Save Text",
        "contexts": ["selection"], /* The different contexts a menu can appear in */
    });

    /*
    chrome.contextMenus.create({
        "id": "context2",
        "title": "aaaaaaa",
        "contexts": ["image"], //specify a context so it seperates the use case of 2 different contextMenu items
    });
    this would add in normal context menu - but does it ovverides the other one ? */

});



//can be used to if i have an already filled array ... or --> || [] (if visited or downloaded first time)
var savedTexts = [];



//CLASS for 
class Visited {
    constructor(link, saved_data) {
        this.link = link;
        this.saved_data = saved_data;
    }
}


//Building the structure for copying the higlighted text and storing it in chrome local storage
chrome.contextMenus.onClicked.addListener(function (clickText) {


    //var value = clickText.selectionText;
    //console.log(clickText.menuItemId);

    //console.log(clickText.menuItemId);

    //console.log("HELLO");


    //if (clickText.menuItemId == "SaveOn" && clickText.selectionText) {

    //you can see the printed text when you inspect the extension
    //console.log(clickText.selectionText);

    //console.log(clickText.pageUrl);
    var data = new Visited(clickText.pageUrl, clickText.selectionText);
    //savedTexts.push(data);

    /*
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "MERT" }, function (response) {
            console.log(response);
        };

    */

    //both sides print them as [Object Object] --> which is good with the class Visitor I made.
    //Just stringify and parse where necessary
    //console.log(JSON.stringify(savedTexts));
    //console.log(savedTexts.toString());

    //***

    //console.log(JSON.stringify(savedTexts) + "\nLength of it is : " + savedTexts.length);
    //console.log(savedTexts.map(JSON.stringify));
    //var a = savedTexts.map(JSON.stringify);

    /*
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.todo == "MERT") {
            console.log("DONE");
        }
        else if (request.todo != "MERT") {
            console.log("ABORT");
        }
    });
    */


    //chrome.storage.local.set({ 'savedText': savedTexts });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, Array(data), function (response) {

            //check for error below so that you can 
            if (!chrome.runtime.lastError) {
                console.log(JSON.stringify(response.res));
            }
        });
    });



});




chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    /*
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
    */
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "sex" }, function (response) {
            if (!chrome.runtime.lastError) {

                //receive sex
                console.log(JSON.stringify(response.res));
            }
        });
    });
});






/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    //console.log(request);
    //console.log(request);

    var x = JSON.stringify(request);
    console.log(x);
});
*/

        //Maybe just use local storage - ?? or need it for context menu bak !!!
/*

//console log stuff so you see if they are being duplicated
//console.log('Value is set to ' + clickText.selectionText 
//console.log(JSON.stringify(savedTexts));
//console.log(savedTexts.toString());
//console.log(savedTexts);
//});

//getsavedText();
});
//console.log(savedTexts.toString());

*/



/*
export function returnSavedTexts() {
    console.log(savedTexts.toString());
}

//Building the structure for displaying the text based on the website user is on - [ so the data stored is different ]
// ? ? ?

/*
shows the other divs
if youre on x website - brings that x on top (parent elemetn ??)
make it as list so you scroll and website titles as bold
 */