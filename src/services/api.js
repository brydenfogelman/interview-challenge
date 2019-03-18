import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "content-type": "application/json"
    }
};

const api = axios.create({
    ...config
});

export const fetchWeatherData = () => {
    return api.get('/api/weather/');
};