// This file is for getting data about memes


/**
 * A class for handling data fetching and manipulation for memes
 * 
 * Add methods and properties that you need to fetch meme data
 * and format it the way you need to work with it.
 * Please document any methods you add.
 */
 class Memes {
     static url = "https://reddit-reflector.herokuapp.com/programmerhumor";
    constructor() {
    }
    static getRandomMeme(cb) {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                let index = Math.floor(Math.random() * data.data.children.length);
                let url = data.data.children[index].data.url
                
                cb({
                    href: url
                }) 
         })
    }
}


export default Memes;