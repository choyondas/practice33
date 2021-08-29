const buddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => myBuddy(data))
}

const myBuddy = friend => {

    const friendRes = friend.results;

    for (friend of friendRes) {
        console.log(friend)
        const h2 = document.createElement('h2');

        const div = document.getElementById('buddy');
        h2.innerText = `
        ${friend.name.title} ${friend.name.first} ${friend.name.last}
        `

        div.appendChild(h2);
    }


}
const countryName =