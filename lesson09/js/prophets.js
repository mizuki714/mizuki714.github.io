//references the JSON file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//Method to fetch the JSON file,
fetch(requestURL)

    .then(function (response) {
        // return a promise 
        return response.json();
    })
    //and extract JSON content
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
    });

//for loop to loop through the code and create cards
for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');


    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

    card.appendChild(h2);

    document.querySelector('div.cards').appendChild(card);

/*

    let p = document.createElement('p');

    p.textContent = "Date of Birth: " + prophets[i].birthdate +
     "Place of Birth: " + prophets[i].birthplace;

     card.appendChild(p);



let image = document.createElement('src');

    image.setAttribute('src', prophets[i].imageurl);
    card.appendChild(image);
     */
}