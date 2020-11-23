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
            if( towns[i].name=="Soda Springs"){
            //create cards
            let card = document.createElement('section');

             

             
            //town name
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name + " Events:";
            card.appendChild(h2);
            document.querySelector('div.ss-card').appendChild(card);

           //events
           let p1 = document.createElement('p');
           p1.textContent = towns[i].events[0] ;
           card.appendChild(p1);
           let p2 = document.createElement('p');
           p2.textContent = towns[i].events[1] ;
           card.appendChild(p2);
           let p3 = document.createElement('p');
           p3.textContent = towns[i].events[2] ;
           card.appendChild(p3);

            }
        }
    });