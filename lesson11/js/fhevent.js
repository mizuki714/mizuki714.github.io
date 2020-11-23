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
            if( towns[i].name=="Fish Haven){
            //create cards
            let card = document.createElement('section');

             //img
             let image = document.createElement('img');
             image.setAttribute('src',"images/" + towns[i].photo);
             image.setAttribute("alt", `Image of ${towns[i].name}`);
             card.appendChild(image);

             
            //town name
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);

           //events
           let p4 = document.createElement('p');
           p1.textContent = "Events: " + towns[i].events;
           card.appendChild(p4);

           
            }
        }
    });