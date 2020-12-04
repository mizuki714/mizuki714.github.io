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

            //car img
            let image = document.createElement('img');
            image.setAttribute('src', "images/" + rentals[i].photo);
            image.setAttribute("alt", `Image of ${rentals[i].name}`);
            card.appendChild(image);

            //car name
            let h3 = document.createElement('h3');
            h3.textContent = rentals[i].name;
            card.appendChild(h3);
            document.querySelector('div.rentalcards').appendChild(card);

            //car description
            let p1 = document.createElement('p');
            p1.textContent = "Description: " + rentals[i].desc;
            card.appendChild(p1);

            //car reserve price full
            let p2 = document.createElement('p');
            p2.textContent = "Half-Day (3-hr) Reservation Price: " + rentals[i].reservehalf;
            card.appendChild(p2);

            //car reserve price half
            let p3 = document.createElement('p');
            p3.textContent = "Full Day Reservation Price: " + rentals[i].reservefull;
            card.appendChild(p3);

            //rental price walk in half
            let p4 = document.createElement('p');
            p4.textContent = "Half-Day (3-hr) Walk-in Price: " + rentals[i].walkhalf;
            card.appendChild(p4);

            //rental price walk in full
            let p5 = document.createElement('p');
            p5.textContent = "Full Day Walk-in Price: " + rentals[i].walkfull;
            card.appendChild(p5);

            //maximum capacity
            let p6 = document.createElement('p');
            p6.textContent = "Max Persons: " + rentals[i].capacity;
            card.appendChild(p6);
        }
    });