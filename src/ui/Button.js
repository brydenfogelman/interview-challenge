import styled from 'styled-components';

// Common styled button.
const Button = styled.button`
    padding: 5px 15px;
    background-color: white;
    border: 2px solid black;
    font-size: 16px;
    display: inline-block;
    width: ${({ width }) => width};
    transition: 0.7s;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    };
`

export default Button;