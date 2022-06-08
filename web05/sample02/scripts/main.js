function demoJSON() {
    const jsonString = `{ "firstname": "Max", "lastname": "Mustermann", "phone": { "type": "mobile", "number": "01234567" }, "email": "max.mustermann@example.com", "address": { "street": "Musterstraße", "number": 99, "code": 12345, "city": "Musterstadt" } }`;

    // JSON.parse
    const parsedJSONString = JSON.parse(jsonString);
    console.log(parsedJSONString.firstname);
    console.log(parsedJSONString.lastname);
    console.log(parsedJSONString.phone.type);
    console.log(parsedJSONString.phone.number);
    console.log(parsedJSONString.email);
    console.log(parsedJSONString.address.street);
    console.log(parsedJSONString.address.number);
    console.log(parsedJSONString.address.code);
    console.log(parsedJSONString.address.city);

    // JSON kann auch direkt innerhalb von JavaScript eingebettet werden
    const person = {
        "firstname": "Max",
        "lastname": "Mustermann",
        "phone": {"type": "mobile", "number": "01234567"},
        "email": "max.mustermann@example.com",
        "address": {"street": "Musterstraße", "number": 99, "code": 12345, "city": "Musterstadt"}
    };

    // JavaScript erkennt dann automatisch den JSON-Code und wandelt ihn in ein entsprechendes JavaScript-Objekt um

    console.log(person.firstname);
    console.log(person.lastname);
    console.log(person.phone.type);
    console.log(person.phone.number);
    console.log(person.email);
    console.log(person.address.street);
    console.log(person.address.number);
}