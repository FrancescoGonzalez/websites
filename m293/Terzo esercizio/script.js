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

            const row = document.createElement('div');
            row.className = 'row justify-content-around';

            const col1 = document.createElement('div');
            col1.className = 'col text-center';
            const p1 = document.createElement('p');
            p1.className = 'mb-0';
            p1.textContent = from;
            const time1 = document.createElement('p');
            const strong1 = document.createElement('b');

            strong1.textContent = returnString(departure);
            time1.appendChild(strong1);

            col1.appendChild(p1);
            col1.appendChild(time1);

            const col2 = document.createElement('div');
            col2.className = 'col text-center';
            const p2 = document.createElement('p');
            p2.className = 'mb-0';
            p2.textContent = to;
            const time2 = document.createElement('p');
            const strong2 = document.createElement('b');
            strong2.textContent = returnString(arrival);
            time2.appendChild(strong2);

            col2.appendChild(p2);
            col2.appendChild(time2);

            row.appendChild(col1);
            row.appendChild(col2);

            container.appendChild(row);

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
