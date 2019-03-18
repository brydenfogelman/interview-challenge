import React from 'react';

// Simple Emoji component to load and display accesible emojis
// Source: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
const Emoji = ({label, symbol}) => (
    <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);

export default Emoji;