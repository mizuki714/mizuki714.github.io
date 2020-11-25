

//references the JSON file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Select the page
var townName = "";
if (document.getElementById("preston")) {
    townName = "Preston";
} else if (document.getElementById("sodasprings")) {
    townName = "Soda Springs";
} else if (document.getElementById("fishhaven")) {
    townName = "Fish Haven";
}

//Method to fetch the JSON file,
fetch(requestURL)

    .then(function (response) {
        // return a promise 
        return response.json();
    })
    //and extract JSON content
    .then(function (jsonObject) {
        let towns = jsonObject['towns'];
       
        //for loop to loop through the code and create cards
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == townName) {
                //create cards
                let card = document.createElement('section');
                //town name
                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name + " Events:";
                card.appendChild(h2);
                document.querySelector('div.eventcard').appendChild(card);

                //attempt at looping through the events
                for (let e = 0; e < towns[i].events.length; e++) {
                    //events
                    let p1 = document.createElement('p');
                    p1.textContent = towns[i].events[e];
                    card.appendChild(p1);
                }

            }
        }
    });