import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    .material-icons {
        font-size: 40px;
        padding: 20px;
        cursor: pointer;
        transition: 0.7s;

        &:hover {
            opacity: 0.5;
        }

        &.disabled {
            cursor: not-allowed;
            opacity: 0.2;
        }
    }
`;

// Common icon component designed to be interacted with using material icons.
// If disabled is true, onClick will not be triggered.
const Icon = ({icon, disabled, onClick}) => (
    <Wrapper>
        <i 
            className={`material-icons ${disabled && 'disabled'}`}
            onClick={() => {
                if(!disabled) onClick();
            }}
        >
            {icon}
        </i>
    </Wrapper>
);

export default Icon;