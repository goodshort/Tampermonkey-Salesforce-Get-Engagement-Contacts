// ==UserScript==
// @name         GetEngagementContacts
// @namespace    
// @version      0.2
// @updateURL    
// @downloadURL  
// @description  Retrieves and copy the Engagement Contacts emails
// @author       Adrien Biencourt
// @match        https://*.lightning.force.com/lightning/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        addButton('Get Engagement Contacts');
        var newHTML = document.createElement ('div');
        newHTML.innerHTML = '<input type="text" value="Hello World" id="copy-emails">';
        document.body.appendChild (newHTML);
    },false);

    function addButton(text, cssObj) {
        cssObj = cssObj || {position: 'fixed', top: '5px', left:'400px', 'z-index': 3, fontWeight: '600', fontSize: '14px', backgroundColor: '#00cccc', color: 'white', border: 'none', padding: '10px 20px', 'border-radius': '15px' }
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.addEventListener('click', function(){
            getEngagementContacts();
        });
        Object.keys(cssObj).forEach(key => {btnStyle[key] = cssObj[key]})
        return button
    }

    function getEngagementContacts() {
        let tables = document.querySelectorAll('tbody');
        let emails = "";
        let found = false;
        let stop = false;
        for (var j = 0; tables.length > j; j++){
            if (!found) {
                console.log("Checking table #" + j);
                if (tables[j].rows.length > 1) {
                    console.log("Table #" + j + " contains " + tables[j].rows.length + " rows. Proceeding...");
                    let testEmail = tables[j].rows[1].childNodes[2].innerText;
                    if (testEmail.includes("UDC Notify")) {
                        if (!found) {
                            console.log("Table #" + j + " contains 'UDC Notify'. Retrieving emails...");
                            found = true;
                            for (var i = 0; tables[j].rows.length > i; i++){
                                console.log(tables[j].rows[i].childNodes[3].innerText);
                                emails += tables[j].rows[i].childNodes[3].innerText + ";";
                            }

                            // if found
                        } else {
                            alert("Make sure to only have ONE 'Engagement Contacts' tab open at a time");
                            emails = "";
                            stop = true;
                            break;
                        }
                    }
                } else {
                    console.log("Table #" + j + " contains " + tables[j].rows.length + " rows. Skipping...");
                }
            }
        }
        if (!stop) {
            console.log(emails);
            if (emails == "") {
                alert("Could not retrieve email addresses. Make sure to open the 'Engagement Contacts' table in a separate tab of your Engagement");
            } else {
                document.getElementById("copy-emails").value = emails;
                console.log("Starting copyText for 'emails' " + emails);
                copyText();
            }
        }
    }

    function copyText() { // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
        /* Get the text field */
        var copyText = document.getElementById("copy-emails");
        console.log("copyText: " + copyText);

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

})();
