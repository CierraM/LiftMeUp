//This file is to connect data with the scriptures page
//Do not use this file to fetch data. Fetch data with the classes imported from the models.

import {
    clearElement,
    createCardHtml,
    insertHtml
}
from "../helpers/helpers.js"
import Scriptures from "../models/scriptures-model.js"
/**
 * This is the main function
 * 
 * This function runs when the page loads.
 * Grabs a list of scriptures from the model
 * Uses a loop to do the following:
 * 1. call createCardHtml to wrap the scripture in html
 * 2. call insertHtml to add the cards
 * 
 * Not sure how this will work yet, but we should be able to receive data in
 * a paginated format. This function will also need to add an intersection observer
 * to call the next page of data
 * 
 */
const scriptureGetLimit = 100;

function main() {
    
    loadAll();
    
}

//gets random scriptures, scriptureGetLimit at a time
function loadAll() {  
    let list = Scriptures.getScriptureList()
    clearElement('feed')
    if (list.length > scriptureGetLimit) {
        for (let i = 0; i < scriptureGetLimit; i ++){
                let cardHtml = createCardHtml(list[i]);
                insertHtml('feed', cardHtml)
            
        }
    } else {
        list.forEach(item => {
            let cardHtml = createCardHtml(item);
            insertHtml('feed', cardHtml)
        })
    }

}




main()
 
//Something else to consider: searching or filtering on this page? Will add in later.