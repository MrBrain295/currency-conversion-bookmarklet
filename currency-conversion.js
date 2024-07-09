(async function () {
  var base = prompt("Enter an ISO 4217 currency code as the base.");
  var secondCurrency = prompt("Enter an ISO 4217 currency code as the target.");

  var apiURL = `https://v6.exchangerate-api.com/v6/**your API key**/latest/${base}`;

  var response = await fetch(apiURL);
  var data = await response.json();
  var rate = data.conversion_rates[secondCurrency];

  alert(`One ${base} is worth ${rate} ${secondCurrency}.`);
})();
