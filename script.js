const adviceNumber = document.querySelector('strong span'),
adviceText = document.querySelector('h1 span'),
changeAdvice = document.querySelector('.dice');

let randomNo = Math.floor((Math.random() * 1643));

showAdvice(randomNo);

async function fetchQuotes() {
    let quote = await fetch("https://type.fit/api/quotes");
    return quote.json();
}

async function drewAdvice(randomNo) {
    const response = await fetchQuotes();
    let advice = response[randomNo].text;
    return advice;
}

async function showAdvice(randomNo) {
    adviceText.innerText = await drewAdvice(randomNo);
    adviceNumber.innerText = randomNo;
}

changeAdvice.addEventListener('click', () => {
    randomNo = Math.floor((Math.random() * 1643))
    showAdvice(randomNo);
});