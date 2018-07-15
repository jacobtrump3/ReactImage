import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

var pinchZoom = require('pinch-zoom');

import ImageZoom from 'react-medium-image-zoom';

class Index extends React.Component {
    componentDidMount() {
        pinchZoom(
            document.getElementById('react-img'),
            {
                tapreset : true
            }
        );
    }
    render() {
        return (
            <span>
                <h1>Module: pinch-zoom</h1>
                <div id="img-container">
                    <img id="react-img" src="https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414" alt="React" />
                </div>
                <hr />
                <h2>Module: react-medium-image-zoom</h2>
                <ImageZoom 
                    image={{
                        src: 'https://frontendmasters.com/assets/html5css3.png'
                    }}
                />
                <hr />
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);