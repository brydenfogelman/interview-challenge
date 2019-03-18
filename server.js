import express from 'express';
import cors from 'cors';
import seed from './db';
// import * as moment from 'moment';

const app = express();
const port = 3001;

// Enable all CORS request as the server is running at a different port then react.
// Note this is not production safe, instead specify specific origins that are CORS enabled
app.use(cors());

app.get('/api/weather/', (req, res) => {
    // IMPROVEMENTS: With a proper database we could filter by start and end date
    // const now = moment().format('YYYY-MM-dd');
    // const end = moment().add(14,'days').format('YYYY-MM-dd');
    // <query database and filter by range>

    // here we are just slicing the data but we should check to make sure we selected 14 days
    const data = seed.slice(0,14);

    return res.json(data);
});

// IMPROVEMENT can add another API endpoint to get location data based on lat, long. Note, we would need to update the weather
// endpoint to accept a location id and on the frontend wait until a location is supplied.
// app.get('/api/location', (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));