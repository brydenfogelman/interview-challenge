import React from 'react';
import { Icon } from '../ui';
import ForecastItem from './ForecastItem';
import { FORECAST_WINDOW, MAX_FORECAST_DAYS } from '../constants';
import styled from 'styled-components';

const ForecastWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

/**
 * Container component to render ForecastItems.
 */
const ForecastSlider = ({
    data,
    active,
    start,
    unit,
    onActiveChange,
    onStartChange,
}) => {

    const items = data.map((obj, index) => (
        <ForecastItem 
            key={obj.id}
            index={index}
            active={index === active}
            onActiveChange={onActiveChange}
            unit={unit}
            {...obj} 
        />
    ));

    return (
        <ForecastWrapper>
            <Icon
                icon="chevron_left"
                // disable when at the start of the list
                disabled={start === 0}
                // move start to the left
                onClick={() => onStartChange(start - 1)}
            />
            {items.slice(start, start + FORECAST_WINDOW)}
            <Icon
                icon="chevron_right"
                // check to if FORECAST_WINDOW will be outside the range of available data
                disabled={start + FORECAST_WINDOW >= MAX_FORECAST_DAYS && start + FORECAST_WINDOW < data.length}
                // move start to the right
                onClick={() => onStartChange(start + 1)}
            />
        </ForecastWrapper>
    );
};

export default ForecastSlider;