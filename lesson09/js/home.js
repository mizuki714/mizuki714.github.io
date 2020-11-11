//references the JSON file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//Method to fetch the JSON file,
fetch(requestURL)

    .then(function (response) {
        // return a promise 
        return response.json();
    })
    //and extract JSON content
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];


        //for loop to loop through the code and create cards
        for (let i = 0; i < towns.length; i++) {
            //create cards
            let card = document.createElement('section');

            //town name
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);

            //town motto
            let h4 = document.createElement('h4');
            h4.textContent = towns[i].motto;
            card.appendChild(h4);

            //year
            let p1 = document.createElement('p');
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            card.appendChild(p1);

            //population
            let p2 = document.createElement('p');
            p2.textContent = "Population: " + towns[i].currentPopulation;
            card.appendChild(p2);

            //rainfall
            let p3 = document.createElement('p');
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(p3);

            //img
            let image = document.createElement('img');
            image.setAttribute('src', towns[i].photo);
            card.appendChild(image);

        }
    });