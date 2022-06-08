function createTable(persons) {

    const container = document.getElementById('container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');

    thead.innerHTML = '<tr><th>Vorname</th><th>Nachname</th><th>Position</th>';
    const tbody = document.createElement('tbody');

    for (let i = 0; i < persons.length; i++) {

        const person = persons[i];
        console.log(person)
        const tr = document.createElement('tr');
        tr.innerHTML = ` <td> ${person.firstName} </td> <td> ${person.lastName} </td> <td> ${person.position} </td> `;
        tbody.appendChild(tr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);

}

document.addEventListener('DOMContentLoaded', async (event) => {
    const config = {method: 'GET', headers: {'Accept': 'application/json'}}
    const response = await fetch('data/persons.json', config);
    const persons = await response.json();
    createTable(persons);
});
