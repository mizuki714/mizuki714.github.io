//references the JSON file
const requestURL = "./data/scoots.json";
//Method to fetch the JSON file,
fetch(requestURL)

    .then(function (response) {
        // return a promise 
        return response.json();
    })
    //and extract JSON content
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const rentals = jsonObject['rentals'];


        //for loop to loop through the code and create cards
        for (let i = 0; i < rentals.length; i++) {
            //create cards
            let card = document.createElement('section');

            //car name
            let p = document.createElement('p');
            p.textContent = rentals[i].name;
            card.appendChild(p);
            document.querySelector('div.rentaltypes').appendChild(card);

        }
    });