var base = prompt("Enter a ISO 4217 currency code to use as the base for the conversion.");
var apiURL = "https://v6.exchangerate-api.com/v6/c337911db4952f08dc1e0e61/latest/" + base;
var secondCurrency = prompt("Enter a ISO 4217 currency code to use as the currency being converted to.");
var r = await fetch(apiURL).then(response => response.json());
var rate = r.conversion_rates[secondCurrency];
alert(`One ${base} is worth ${rate} ${secondCurrency}.`);
