# Assignment 1

<h2>Setup before using</h2>

1. Create a file called new app.js
2. Import the module using the correct file path e.g <br>
   const myModule = require('./Beltran_webapi.js');
3. Use a const to reference the available function <br><br>

<h2>How to call individual functions</h2>

<h4>Function 1 (CheckAllRates)</h4>

Returns the rates for each available currency. No parameters are required.

```
console.log(myModule.CheckAllRates());
```

<br>

<h4>Function 2 (CheckRateByCode)</h4>

// Returns the country code for the given full country name
```
console.log(myModule.CheckCountryCode('United States'));
```

<br>

<h4>Function 3 (CheckAvailableCurrency)</h4>

Returns the available currency codes.

```
console.log(myModule.CheckAvailableCurrency());
```

<br>

<h4>Function 4 (AddNewCurrency)</h4>

Adds a new currency with the specified code and rate. To view the newly added currency, use CheckRates().

Take note

- The new code provide must be a string
- The new rate can be integer or float

```
console.log(myModule.AddNewCurrency("newCurrency", 2.8));
```

<br>

<h4>Function 5 (GetBestRate)</h4>

Returns the highest currency exchange rate among the available rates.

```
console.log(myModule.GetBestRate());
```

<br>

<h4>Function 6 (ConvertFrom)</h4>

Returns the current currency in use.

```
console.log(myModule.ConvertFrom());
```

<br>

<h4>Function 7 (ConvertTo)</h4>

Sets the target currency for conversion, defaulting to "USD". To view available currencies, use CheckRates().

Take note

- The currency to convert to must be a string

```
console.log(myModule.ConvertTo("RM"));
```

<br>

<h4>Function 8 (Converter)</h4>

Returns the current currency in use and requires a numeric parameter representing the amount to be converted to the selected currency.

Take note

- The new rate can be integer or float

```
console.log(myModule.Converter(100));
```
