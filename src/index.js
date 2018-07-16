import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ReactImageMagnify from 'react-image-magnify';

import ReactTouchEvents from "react-touch-events";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouse: true,
            touch: false
        }
    }
    handleTap() {
        this.setState({
            mouse: false,
            touch: true
        });
    }
    render() {
        return (
            <ReactTouchEvents
                onTap={this.handleTap.bind(this)}
            >
                <span>
                    6
                <div>
                        <ReactImageMagnify {...{
                            smallImage: {
                                src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                                width: 240, height: 240
                            },
                            largeImage: {
                                src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            enlargedImageContainerDimensions : {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        }} />
                    </div>
                </span>
            </ReactTouchEvents>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);