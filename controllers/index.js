//This file is for connecting the index.html page with data
import {
    clearElement,
    createCardHtml,
    createMemeHtml,
    insertHtml
}
from "../helpers/helpers.js"

/**
 * This is the main function
 * 
 * This function runs when the page loads.
 * Add loadQuote event listener for the button
 * 
 */
function main() {

}

/**
 * This is the event listener function for the button...
 * 
 * This gets the value of the select
 * Calls the getRandomQuote function to get a random quote from the correct model
 * If it is a meme, pass it to the createMemeHtml function
 * else passes the data to the createCardHtml function to render the quote to the screen
 * Call the clearElement function to clear the div.
 * Pass the returned html to the insertHtml function
 * 
 */
function loadQuote() {

}


main()

export {}