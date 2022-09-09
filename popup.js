
/*
addEventListener('contextmenu', (event) => {
    console.log("Ekle buraya settingsi")


});

*/

//import { returnSavedTexts } from "./script.js";


document.addEventListener('DOMContentLoaded', function () {

    //Disable context menu iwithinn the extension window
    //window.addEventListener("contextmenu", e => e.preventDefault());

    /*
    setInterval(function () {
        // Is service worker available?
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/script.js').then(() => {
                console.log('Service worker registered!');
            }).catch((error) => {
                console.warn('Error registering service worker:');
                console.warn(error);
            });
        }
    }, 2000);
    */


    //var getTexts = JSON.parse(localStorage.getItem('savedText')) || [];



    var getTexts = JSON.parse(localStorage.getItem('savedText')) || [];
    console.log(getTexts);






    //chrome.storage.sync.get(['savedText'], function (result) {
        //console.log("this: " + result.savedText);
        //console.log(result.savedText.toString());

        //Array(1)
        //console.log(result.savedText);

        //Array of objects

        //var a = JSON.stringify(result.savedText);
        //console.log(a);
        //var b = JSON.parse(a);
        //console.log(b);

        //console.log(JSON.stringify(getTexts));


        //result.savedText returns an array so we wouldnt want to push in to a new one to make [[{}]] instead
        //we just assign/equal them both (to each other)


        //***
        //Array but with object elements each of them having link and saved_data and like 0 1 2 {] {} {}...
        //getTexts.push(...result.savedText);
        //console.log(getTexts);


       /*


        //We could have done value check as well, since they all divided "link":"saved_data" - key:value in this instance
        const createMap = getTexts.map(JSON.stringify);
        //console.log(createMap);

        //Set has 2 values only (both sorted and holds map value)
        sortedSet = new Set(createMap);
        //console.log(sortedSet);

        //Back to array by parsing it ?? map parsing bak buna ! then make array from it - (reverse the process ?)
        //07.09.2022
        backToText = Array.from(sortedSet).map(JSON.parse);
        //console.log(backToText);

        //getTexts back equal to sorted set
        getTexts = [...backToText];
        //console.log(getTexts);


        /*
        if () {
            //some code
            console.log("yes");
        }
        else {
            getTexts = [];
            getTexts.push(...result.savedText);
        }
        */

        //console.log(JSON.stringify(getTexts));

        //parse it, so you can make array again, mor einfo and add references on this

        //console.log(d);
        //console.log(JSON.stringify(getTexts));
        //returnSavedTexts();
    //});

    /*
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "MERT" }, function (response) {
            console.log(response);
        });

    });
    /*
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        //console.log(request);
        //console.log(request);

        var x = JSON.stringify(request);
        //console.log(x);
        localStorage.setItem('savedText', x);
        var y = localStorage.getItem('savedText');
        console.log(y);
        var z = JSON.parse(y);
        console.log(z);

        //renderSavedItems(z);

        //ALL GOOD - ALL IS LEFT TO WAIT FOR LISTENER MORE OR
        //or look at context menu - set interval to send promises !! ? or set a tab limit - when user exits ?





        //localStorage.setItem('savedText', request);
        // !!! localStorage.setItem('savedText', JSON.stringify(savedTexts));
    });
    */

    //This works within content script
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

    document.getElementById('clear').addEventListener("click", function () {
        localStorage.clear();

        //stop sw fast so it doesnt copy :D race with time ?
        /*
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister()
            }
        });
        */
    });


    function renderSavedItems(text_items) {
        //Display quickly in a form of list
        var ul = document.createElement('ul');
        document.querySelector(".show_text").appendChild(ul);

        //JSON.stringify(text_items);
        //console.log(JSON.stringify(text_items));
        //look at the parsing here
        text_items.forEach((item) => {
            let li = document.createElement('li');
            ul.appendChild(li);

            //console.log("count of li items is: " + i);
            let data_to_add = JSON.stringify(item.saved_data).replace(/"/g, '');
            //console.log(item);
            li.innerHTML += data_to_add;

            //Add break tags between elements
            ul.appendChild(document.createElement('br'));
        });
    }

    /*
    function renderSavedItems(text_items) {
        const el = document.createElement("p");
        //console.log("text items: " + text_items.toString());
        el.innerHTML = `
                        <span>The texts that you copied are below</span>
                        <br>
                        <br>
                        <!--<hr>-->
                        <span>${text_items.toString()}</span>
                        `;
        const list = document.querySelector(".show_text");
        list.append(el);
    }
    */

});

/*
document.getElementById("show_button").addEventListener("click", getsavedText);

function getsavedText() {
    //Make sure the elements are not wiped off div after displayed there !!! 
    const el = document.createElement("p");
    const node = document.createTextNode(displayText);
    el.appendChild(node);
    const div = document.getElementById("show_data");
    div.appendChild(el);
}
8?

});



/*
//Building the structure for displaying the text on the extension itself
function createtextOnExtension() {
/*
const el = document.createElement("p");
const node = document.createTextNode(displayText);
el.appendChild(node);

const div = document.getElementById("show_data");
div.appendChild(text);

}

*/
