
import React from 'react';
import * as moment from 'moment';

/**
 * Converts from celius /  fahrenheit to fahrenheit / celius.
 * 
 * @param {number} temp - Tempature to be converted.
 * @param {string} unit - Unit to convert to. Either 'C' for celius or 'F' for fahrenheit.
 */
export const convertTemp = (temp, unit) => {
    //(32°F − 32) × 5/9
    // converting to fahrenheit
    if (unit === 'F') {
        return parseInt(( temp + 32 ) * 9 / 5);    
    } else {
        return temp;
    }
};

/**
 * Uses moment to return the name of the day given the date.
 * 
 * @param {string} date - Date in format of YYYY-MM-DD.
 * @param {string} long - Optional. Change the format at which the name is returned. If false three letter day is returned otherwise return the 
 * whole name.
 */
export const getDayFromDate = (date, long) => {
    return moment(date).format(long ? 'dddd' : 'ddd');
};

/**
 * Returns a node object with the temperature, degree symbol and optionally the unit.
 * 
 * @param {integer} temp - Temperature.
 * @param {string} unit - The unit to be displayed after temperature. Either 'C' for celsius or 'F' for fahrenheit.
 * @param {boolean} showUnit -  Optional. If true display the unit, otherwise do not display.
 */
export const getDisplayTemp = (temp, unit, showUnit) => {
    return (
        <span>
            {convertTemp(temp, unit)}&#176;{showUnit && unit}
        </span>
    );
};