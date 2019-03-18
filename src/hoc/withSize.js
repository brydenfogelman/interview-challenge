import React, { Component } from 'react';
import { isSmall, isMedium, isLarge, isXLarge } from './index';

// Higher order component to pass with, height and screen sizes as props.
export const withSize = Wrapped =>
    class extends Component {
        state = {
            width: null,
            height: null,
            sm: false,
            md: false,
            lg: false,
            xl: false
        };

        handleResize = () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
                sm: isSmall(window.innerWidth),
                md: isMedium(window.innerWidth),
                lg: isLarge(window.innerWidth),
                xl: isXLarge(window.innerWidth)
            });
        };

        componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        };

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        };

        render() {
            return <Wrapped {...this.state} {...this.props} />;
        };
    };

export default withSize;
