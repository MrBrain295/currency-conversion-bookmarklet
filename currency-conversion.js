var base = prompt("Enter a ISO 4217 currency code as the base.");
var apiURL = "https://v6.exchangerate-api.com/v6/**your API key**/latest/" + base;
var secondCurrency = prompt("Enter a ISO 4217 currency code as the target.");
var r = await fetch(apiURL).then(response => response.json());
var rate = r.conversion_rates[secondCurrency];
alert(`One ${base} is worth ${rate} ${secondCurrency}.`);
