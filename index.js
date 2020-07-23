"use strict";
// const quotes = [{
//     "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
//     "quoteAuthor": "Thomas Edison"
//     }, {
//     "quoteText": "You can observe a lot just by watching.",
//     "quoteAuthor": "Yogi Berra"
//     }, {
//     "quoteText": "A house divided against itself cannot stand.",
//     "quoteAuthor": "Abraham Lincoln"
//     }, {
//     "quoteText": "Difficulties increase the nearer we get to the goal.",
//     "quoteAuthor": "Johann Wolfgang von Goethe"
//     }, {
//     "quoteText": "Fate is in your hands and no one elses",
//     "quoteAuthor": "Byron Pulsifer"
//     }, {
//     "quoteText": "Be the chief but never the lord.",
//     "quoteAuthor": "Lao Tzu"
//     }, {
//     "quoteText": "Nothing happens unless first we dream.",
//     "quoteAuthor": "Carl Sandburg"
//     }, {
//     "quoteText": "Well begun is half done.",
//     "quoteAuthor": "Aristotle"
//     }
// ];

fetch("./quotes.json")
    .then(resp => {
        return resp.json();
    })
    .then(quotes => {
        const quoteBtn = document.querySelector('#quoteBtn');
        const quoteAuthor = document.querySelector('#quoteAuthor');
        const quote = document.querySelector('#quote');

        quoteBtn.addEventListener('click', () => {
            let number = Math.floor(Math.random()*quotes.length);
            quoteAuthor.innerHTML = quotes[number].quoteAuthor;
            quote.innerHTML = quotes[number].quoteText;
        })
    })

