import React from 'react';
import { Emoji } from '../ui';
import { getDayFromDate, getDisplayTemp } from '../services/helpers';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
    width: 100%;
    @media screen and (min-width: 500px) {
        max-width: 500px;
    }
    min-height: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;

    .summary {
        font-weight: bold;
    }

    .advisory {
        opacity: 0.5;
    }

    .weather-info {
        display: flex;
        align-items: center;
        margin: auto;

        .emoji {
            font-size: 75px;
            margin-right: 25px;
        }
    }

    .weather-table {
        text-align: left;
        tbody > tr > td:first-child {
            width: 100px;
        }
    }
`

/**
 * Displays weather information about the currently selected day.
 */
const CurrentWeather = ({
    date,
    summary,
    tempLow,
    tempHigh,
    symbol,
    advisory,
    precipitation,
    unit
}) => {
    return (
        <WeatherWrapper>
            {/* Use helper to get name of day from date */}
            <h3>{getDayFromDate(date, true)}</h3>
            <p className="summary">{summary}</p>
            <p className="advisory">{advisory}</p>
            <div className="weather-info">
                <Emoji symbol={symbol}/>
                <table className="weather-table">
                    <tbody>
                        <tr>
                            <td>High</td>
                            <td>
                                {/* Use helper to display temperate */}
                                {getDisplayTemp(tempHigh, unit, true)}
                            </td>
                        </tr>
                        <tr>
                            <td>Low</td>
                            <td>
                                {getDisplayTemp(tempLow, unit, true)}
                            </td>
                        </tr>
                        <tr>
                            <td>Precip.</td>
                            <td>{precipitation}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </WeatherWrapper>
    );
};

export default CurrentWeather;