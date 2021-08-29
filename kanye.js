/* function kanye() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quotes(data))
}


function quotes(data) {
    console.log(data)

    const ul = document.getElementById('quote');
    const p = document.createElement('p');
    p.classList.add('quote');

    p.innerText = data.quote;


    ul.appendChild(p);

} */

const kanye = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quotes(data))
}

const quotes = data => {

    const ul = document.getElementById('quote');
    ul.innerText = data.quote;

}