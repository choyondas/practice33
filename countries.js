const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countries();
const displayCountries = data => {
    const divcountry = document.getElementById('countries');
    console.log(data)
    for (const country of data) {


        const div = document.createElement('div');
        div.classList.add('style');

        div.innerHTML = `
<h2>${country.name}</h2>
<p>${country.capital}</p>
<p>${country.population}</p>
<img width="100px" src="${country.flag}">
<br>
<br>
<button onclick="button('${country.name}')" >details</button>


`



        /* const h2 = document.createElement('h2');
        const button = document.createElement('button');
        h2.innerText = country.name;
        button.innerText = 'details'
        const p = document.createElement('p');


        p.innerText = country.capital;
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(button) */

        divcountry.appendChild(div);
    }

}

const button = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displaycountry(data[0]))

}
const displaycountry = country => {
    const details = document.getElementById('details');
    details.innerHTML =
        `
<h2>${country.name}</h2>
<img width="200px" src ="${country.flag}">
<p>Population: ${country.population}</p>



`

}