import React from 'react';
import { getDayFromDate, getDisplayTemp } from '../services/helpers';
import { Emoji } from '../ui';
import styled from 'styled-components';

const ForecastItemWrapper = styled.div`
    width: 55px;
    padding: 10px 25px;
    text-align: center;
    cursor: pointer;
    box-sizing: content-box;
    margin: 5px;
    border: ${({ active}) => active ? '2px solid rgba(0,0,0,0.65)' : '2px solid white'};

    &:hover {
        border: 2px solid rgba(0,0,0,0.5);
    }

    .emoji {
        font-size: 40px;
    }

    .temp {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .low {
            opacity: 0.5;
        }
    }
`;

const ForecastItem = ({
    index,
    date,
    tempLow,
    tempHigh,
    symbol,
    active,
    unit,
    onActiveChange
}) => (
    <ForecastItemWrapper 
        active={active}
        onClick={() => onActiveChange(index)}
    >
        <div className="day">{getDayFromDate(date)}</div>
        <Emoji symbol={symbol}/>
        <div className="temp">
            <span className="high">{getDisplayTemp(tempHigh, unit)}</span>
            <span className="low">{getDisplayTemp(tempLow, unit)}</span>
        </div>
    </ForecastItemWrapper>
);

export default ForecastItem;