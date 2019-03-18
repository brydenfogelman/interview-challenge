var moment = require('moment');

// Simple data structure for "Weather" Object:
// {
//     id: integer (unique),
//     date: string (YYYY-MM-DD),
//     tempHigh: integer,
//     tempLow: integer,
//     summary: string,
//     advisory: string,
//     symbol: string,
//     precipitation: integer,
// }
// The data model was choosen to be as simple as possible to cover all the base needs to allow for quick development.
// As a robot, you are very concerned wether your solar panels will be effective and if the chance of electrical shortage is high. 
// To account for this precipitation and advisory were included to add extra data.
// If more data was generated we could use the date field to select data within a 14 day range (see server.js).

// IMPROVEMENTS:
// Right now our weather data is not very smart and does not include any information about location. Assuming we were using a relational database we
// could add the following field:
// {
//     location: integer (primary related key),
// }
// So what we would be doing here is linking a "Weather" object to a "Location" Object (1 location to many weather objects).
// "Location" Object:
// {
//     id: integer (unique),
//     lat: float,
//     long: float,
//     city: string,
//     state: string,
//     country: string,
// }
// What if we wanted to include time series data, say temperate at hour intervals? Well we could create a similair relationship as above.
// "Weather" has many "WeaatherTimeSeries". We could also simplify the "Weather" object to just contain data and any information about the conditions.
// All the information regarding weather could be contained in "WeatherTimeSeries".

const seed = [
    {
        id: 1,
        date: '2019-03-17',
        tempHigh: 20,
        tempLow: 10,
        summary: 'High occurence of crepuscular rays with little interference.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '☀️',
        precipitation: 0,
    },
    {
        id: 2,
        date: '2019-03-18',
        tempHigh: 18,
        tempLow: 11,
        summary: 'Solar panels will only charge at 75% efficiency.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '🌤️',
        precipitation: 0,
    },
    {
        id: 3,
        date: '2019-03-19',
        tempHigh: 14,
        tempLow: 8,
        summary: 'Full coverage of solar rays, potential risk of shortage.',
        advisory: 'Chance of electrical shortage is moderate.',
        symbol: '☁️',
        precipitation: 20,
    },
    {
        id: 4,
        date: '2019-03-20',
        tempHigh: 12,
        tempLow: 10,
        summary: 'WARNING! Precipitation will likely occur.',
        advisory: 'Chance of electrical shortage is high.',
        symbol: '🌧️',
        precipitation: 77,
    },
    {
        id: 5,
        date: '2019-03-21',
        tempHigh: 13,
        tempLow: 9,
        summary: 'WARNING! Precipitation will likely occur.',
        advisory: 'Chance of electrical shortage is high.',
        symbol: '🌧️',
        precipitation: 60,
    },
    {
        id: 6,
        date: '2019-03-22',
        tempHigh: 15,
        tempLow: 10,
        summary: 'EXTREME ATMOSPHERIC CONDIITIONS. Thunder may cause spontaneous combustion.',
        advisory: 'Chance of electrical shortage is extremely high.',
        symbol: '⛈️',
        precipitation: 100,
    },
    {
        id: 7,
        date: '2019-03-23',
        tempHigh: 17,
        tempLow: 12,
        summary: 'Solar panels will only charge at 75% efficiency.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '🌤️',
        precipitation: 5,
    },
    {
        id: 8,
        date: '2019-03-24',
        tempHigh: 22,
        tempLow: 15,
        summary: 'High occurence of crepuscular rays with little interference.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '☀️',
        precipitation: 0,
    },
    {
        id: 9,
        date: '2019-03-25',
        tempHigh: 19,
        tempLow: 10,
        summary: 'WARNING! Precipitation will likely occur.',
        advisory: 'Chance of electrical shortage is high.',
        symbol: '🌧️',
        precipitation: 70,
    },
    {
        id: 10,
        date: '2019-03-26',
        tempHigh: 17,
        tempLow: 9,
        summary: 'WARNING! Precipitation will likely occur.',
        advisory: 'Chance of electrical shortage is high.',
        symbol: '🌧️',
        precipitation: 50,
    },
    {
        id: 11,
        date: '2019-03-27',
        tempHigh: 15,
        tempLow: 8,
        summary: 'Solar panels will only charge at 75% efficiency.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '🌤️',
        precipitation: 0,
    },
    {
        id: 12,
        date: '2019-03-28',
        tempHigh: 16,
        tempLow: 9,
        summary: 'High occurence of crepuscular rays with little interference.',
        advisory: 'Chance of electrical shortage is low.',
        symbol: '☀️',
        precipitation: 0,
    },
    {
        id: 13,
        date: '2019-03-26',
        tempHigh: 10,
        tempLow: 5,
        summary: 'WARNING! Precipitation will likely occur.',
        advisory: 'Chance of electrical shortage is high.',
        symbol: '🌧️',
        precipitation: 90,
    },
    {
        id: 14,
        date: '2019-03-30',
        tempHigh: 20,
        tempLow: 10,
        summary: 'Random weather conditions, prediction systems are not accurate.',
        advisory: 'Chance of electrical shortage is moderate.',
        symbol: '🌦️',
        precipitation: 30,
    }
];

export default seed.map((obj, index) => {
    obj.date = moment().add(index,'days').format('YYYY-MM-DD');
    return obj;
});