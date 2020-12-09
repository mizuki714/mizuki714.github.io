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
        //for loop to loop through the code and create a table
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('car name" 'Price' etc.)
        var col = [];
        for (var i = 0; i < rentals.length; i++) {
            for (var key in rentals[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                    console.log(key)
                }
            }
            //create table
            let table = document.createElement("table");
            let tr = table.insertRow(-1);
            console.log(table)
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th"); // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < rentals.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = rentals[i][col[j]];
                }
            }
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divShowData = document.getElementById("rentaltable");
            divShowData.innerHTML = "";
            divShowData.appendChild(table);
        }
    });