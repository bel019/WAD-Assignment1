const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let questions = "Choose an option:\n" +
    "1. Check currency rates\n" +
    "2. Get country code\n" +
    "3. Check for avilable currency\n" +
    "4. Add new currency\n" +
    "5. Get the best rate\n" +
    "6. Check current currency\n" +
    "7. Convert currency to\n" +
    "8. Converter\n" +
    "9. Exit\n" +
    "==========================\n";

let handleOption = function (option) {
    switch (+option) {
        case 1:
            console.log(module.exports.CheckAllRates());
            break;
        case 2:
            rl.question("Enter the country name: ", (countryCode) => {
                console.log(module.exports.CheckCountryCode(countryCode));
                rl.question(questions, handleOption);
            });
            return;
        case 3:
            console.log(module.exports.CheckAvailableCurrency());
            break;
        case 4:
            rl.question("Enter the new currency code: ", (newCode) => {
                rl.question("Enter the exchange rate: ", (newRate) => {
                    console.log(module.exports.AddNewCurrency(newCode, parseFloat(newRate)))
                    rl.question(questions, handleOption);
                });
            });
            return;
        case 5:
            console.log(module.exports.GetBestRate());
            break;
        case 6:
            console.log(module.exports.ConvertFrom());
            break;
        case 7:
            rl.question("Enter the currency code to convert to: ", (currencyCode) => {
                console.log(module.exports.ConvertTo(currencyCode));
                rl.question(questions, handleOption);
            });
            return;
        case 8:
            rl.question("Enter the amount to convert: ", (amount) => {
                console.log(module.exports.Converter(parseFloat(amount)));
                rl.question(questions, handleOption);
            });
            return;
        case 9:
            rl.close();
            break;
    }
    setTimeout(() => { rl.question(questions, handleOption); }, 1500);
}
rl.question(questions, handleOption);


rl.on("close", function () {
    console.log("\nThank you for using SGD converter !!!");
    process.exit(0);
});

module.exports = {
    // Default variables for currency conversion
    currencyFrom: "SGD",
    currencyTo: "USD",
    availableCurrency: { USD: 0.74, RM: 3.45, RMB: 5.30, YEN: 111.06 },
    countyCode: [
        { 'United States': 'USD' },
        { 'Malaysia': 'RM' },
        { 'China': 'RMB' },
        { 'Japan': 'YEN' },
    ],

    // Returns the available currency rates.
    CheckAllRates() {
        return this.availableCurrency;
    },

    // Get country code
    CheckCountryCode(countryCode) {
        const result = this.countyCode.find((obj) => obj[countryCode]);

        if (!result) return "Invalid County Code provided !!!";
        else return result;
    },

    // Retrieves all available currency codes.
    CheckAvailableCurrency() {
        return Object.keys(this.availableCurrency);
    },

    // Adds a new currency code with its corresponding rate.
    AddNewCurrency(code, rate) {
        this.availableCurrency[code] = rate;
        return "Added " + code + " with " + rate + " to the available currency array";
    },

    // Returns the best currency exchange rate from the available rates.
    GetBestRate() {
        let bestRate = 0;
        let bestCurrency;

        for (const currencyCode in this.availableCurrency) {
            const rate = this.availableCurrency[currencyCode];
            if (rate > bestRate) {
                bestRate = rate;
                bestCurrency = currencyCode;
            }
        }

        return { currency: bestCurrency, rate: bestRate };
    },

    // Retrieves the target currency for conversion.
    ConvertFrom() {
        return "Convert from: " + this.currencyFrom;
    },

    // Converts SGD to the specified currency.
    ConvertTo(currency) {
        if (this.currencyFrom !== currency) {
            if (this.availableCurrency[currency] !== undefined) {
                this.currencyTo = currency;
                return "Converting from " + this.currencyFrom + " to: " + currency;
            } else {
                return "Selected currency is not available.";
            }
        } else {
            return "Please choose a different currency.";
        }
    },

    // Returns the converted currency value.
    Converter(amount_to_convert) {
        if (typeof (amount_to_convert) === "number") {
            const result = this.availableCurrency[this.currencyTo] * amount_to_convert;
            return "Total converted amount: $" + result;
        }
        else {
            return "Please provide a type number";
        }
    }
}