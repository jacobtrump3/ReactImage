import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ImageZoom from 'react-medium-image-zoom';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    render() {
        return (
            <span>
                <h1>Module: react-medium-image-zoom</h1>
                <ImageZoom
                    image={{
                        src: 'https://frontendmasters.com/assets/html5css3.png'
                    }}
                />
                <hr />
                <h2>Module: react-image-magnify</h2>
                <ReactImageMagnify {...{
                    smallImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 240,
                        height: 240
                    },
                    largeImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 480,
                        height: 480
                    }
                }} />
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);