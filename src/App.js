import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './services/api';
import { FORECAST_WINDOW, FORECAST_WINDOW_SM, FORECAST_WINDOW_MD, FORECAST_WINDOW_LG } from './constants'; 
import styled from 'styled-components';
import { Emoji, Button, Loading } from './ui';
import { withSize } from './hoc';
import { CurrentWeather, ForecastSlider } from './weather';

// Styling for the app component.
const Layout = styled.div`
    font-family: 'Roboto Mono', monospace;
    color: rgba(0,0,0,0.85);
    padding: 25px;

    .options {
        text-align: center;
        margin-top: 40px;
    }

    .content {
        display: flex;
        justify-content: center;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;

    .title {
        letter-spacing: 0.09em;
        text-transform: uppercase;
    }

    .description {
        @media screen and (min-width: 500px) {
            max-width: 80%;
        }
        margin: auto;
    }
`;

/**
 * Top level component for application, all state is defined here and pass down to child components.
 * IMPROVEMENTS: Can move to using Redux. "Unit" would be used throughout the entire app wherever temperate is displayed
 * so it would make sense to add it to a central store.
 */
const App = ({
    width,
    sm,
    md,
    lg,
}) => {
    // state definitions using hooks
    const [ unit, setUnit] = useState('C');
    const [ weatherData, setWeatherData] = useState([]);
    const [ active, setActive] = useState(0);
    const [ start, setStart] = useState(0);
    // forecast window is the number of weather dates to display on the screen
    const [ forecastWindow, setForecastWindow] = useState(FORECAST_WINDOW);

    /**
     * Works the same as componentDidMount, makes API request to retrieve data from endpoint.
     */
    useEffect(() => {
        weatherData.length === 0 && fetchWeatherData().then(({ data }) => {
            setWeatherData(data);
        })
    });

    /**
     * For accessibility, updates the forecast window depending on the screen size.
     */
    useEffect(() => {
        if(sm) {
            setForecastWindow(FORECAST_WINDOW_SM);
        } else if (md) {
            setForecastWindow(FORECAST_WINDOW_MD);
        } else if (lg) {
            setForecastWindow(FORECAST_WINDOW_LG);
        } else {
            setForecastWindow(FORECAST_WINDOW);
        }
    }, [width]); // only re-run if width changes

    /**
     * Updates the unit of temperature to either celsius or fahrenheit.
     */
    const handleTempUnitToggle = () => {
        setUnit(unit === 'C' ? 'F' : 'C')
    };

    /**
     * Updates the active index.
     * 
     * @param {integer} index - Next index to display current weather for.
     */
    const handleActiveChange = (index) => {
        setActive(index);
    };

    /**
     * Updates the start index. If active is not between start, start + FORECAST_WINDOW then it will be updated to be the start of the new forecast
     * window or the end.
     * 
     * @param {integer} index - Next index to set as the start of the 7 day forecast window.
     */
    const handleStartChange = (index) => {
        setStart(index);
        // if active will be out of the forecast window then set active to the first element in the window
        if (active < index) {
            setActive(index)
        };
        // if active will be out of the forecast window then set active to the last element in the window
        if (active >= index + forecastWindow) {
            setActive(index + forecastWindow - 1);
        }
    };

    return (
        <Layout>
            <Header>
                <h1 className="title">Atmospheric Conditions For Mechanical Beings</h1>
                <p className="description">
                    Greetings fellow machine <Emoji symbol="🤖" />! 
                    Please use the following advisory information on atmospheric conditions to avoid 
                    electrical shortage do not travel outside for long durations during inclement weather.
                </p>
            </Header>
            <div className="content">
                {weatherData.length > 0 ? (
                    <span>
                        <CurrentWeather
                            {...weatherData[active]}
                            unit={unit}
                        />
                        <ForecastSlider 
                            data={weatherData}
                            unit={unit}
                            start={start}
                            active={active}
                            forecastWindow={forecastWindow}
                            onActiveChange={handleActiveChange}
                            onStartChange={handleStartChange}
                        />
                    </span>
                ) : (
                    <Loading />
                )}
            </div>
            <div className="options">
                <h5>Options:</h5>
                <Button
                    onClick={handleTempUnitToggle}
                >
                    {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
                </Button>
                <p>Supports mobile devices and small screen augmentations.</p>
            </div>
        </Layout>
    )
};

export default withSize(App);