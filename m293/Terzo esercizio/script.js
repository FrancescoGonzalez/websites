function call(from, to, index) {
    let URL = `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&limit=5`;

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }


            return response.json();
        })
        .then(data => {
            let arrival, departure;

            const sectionArray = data.connections[index].sections;
            console.log(sectionArray)
            if (sectionArray.length === 1) {
                departure = new Date(sectionArray[0].departure.departure);
                arrival = new Date(sectionArray[0].arrival.arrival);
            } else if (sectionArray.length <= 0) {
                alert("Something went wrong. Try again")
            } else {
                departure = new Date(sectionArray[0].departure.departure);
                arrival = new Date(sectionArray[sectionArray.length - 1].arrival.arrival);
            }


            const container = document.createElement('div');
            container.className = 'm-5 p-3 bg-white rounded shadow';

            // Create the row
            const row = document.createElement('div');
            row.className = 'row justify-content-around';

            // Create the first column
            const col1 = document.createElement('div');
            col1.className = 'col text-center';
            const p1 = document.createElement('p');
            p1.className = 'mb-0';
            p1.textContent = from;
            const time1 = document.createElement('p');
            const strong1 = document.createElement('b');
            strong1.textContent = returnString(departure);
            time1.appendChild(strong1);

            // Append children to first column
            col1.appendChild(p1);
            col1.appendChild(time1);

            // Create the second column (for the arrow and duration)
            const col2 = document.createElement('div');
            col2.className = 'col text-center';
            const p2 = document.createElement('p');
            p2.className = 'mb-0';
            p2.textContent = '->';
            const duration = document.createElement('p');
            const strong2 = document.createElement('b');
            let d = new Date(arrival - departure) DA RIVEDERE!!!
            strong2.textContent = returnString(d);
            duration.appendChild(strong2);

            // Append children to second column
            col2.appendChild(p2);
            col2.appendChild(duration);

            // Create the third column
            const col3 = document.createElement('div');
            col3.className = 'col text-center';
            const p3 = document.createElement('p');
            p3.className = 'mb-0';
            p3.textContent = to;
            const time3 = document.createElement('p');
            const strong3 = document.createElement('b');
            strong3.textContent = returnString(arrival);
            time3.appendChild(strong3);

            // Append children to third column
            col3.appendChild(p3);
            col3.appendChild(time3);

            // Append columns to the row
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);

            // Append the row to the container
            container.appendChild(row);

            /*
             <div class="m-5 p-3 bg-white rounded shadow">
               <div class="row justify-content-around">
                   <div class="col text-center">
                       <p class="mb-0">from</p>
                       <p><b>returnString(departure)</b></p>
                   </div>
                   <div class="col text-center">
                       <p class="mb-0">-></p>
                       <p><b>30 min</b></p>
                   </div>
                   <div class="col text-center">
                       <p class="mb-0">to</p>
                       <p><b>returnString(arrival)</b></p>
                   </div>
               </div>
             </div>
            */

            addToDOM(container)
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function addToDOM(item) {
    let div = document.getElementById("data");
    div.appendChild(item);
}

function returnString(date) {
    let hours, mins;
    if (date.getHours().toString().length === 1) {
        hours = "0" + date.getHours().toString();
    } else {
        hours = date.getHours().toString();
    }
    if (date.getMinutes().toString().length === 1) {
        mins = "0" + date.getMinutes().toString();
    } else {
        mins = date.getMinutes().toString();
    }

    return hours + ":" + mins;
}

function caller() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    for (let i = 0; i < 6; i++) {
        call(from, to, i)
    }
}
