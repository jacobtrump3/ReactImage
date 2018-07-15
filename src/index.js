import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

var pinchZoom = require('pinch-zoom');

import ImageZoom from 'react-medium-image-zoom';

class Index extends React.Component {
    componentDidMount() {
        pinchZoom(
            document.getElementById('react-img')
        );

        pinchZoom(
            document.getElementById('react-img-tap'),
            {
                tapreset: true
            }
        );
    }
    render() {
        return (
            <span>
                <h1>Module: pinch-zoom</h1>
                <div id="img-container">
                    <img id="react-img" src="https://cdn-images-1.medium.com/fit/c/120/120/1*lKN9xV1YEin-2wfAiGySBA.png" alt="React" />
                </div>
                <hr />
                <h2>Module: pinch-zoom (with single tap reset)</h2>
                <div id="img-container">
                    <img id="react-img-tap" src="https://cdn-images-1.medium.com/fit/c/120/120/1*lKN9xV1YEin-2wfAiGySBA.png" alt="React" />
                </div>
                <hr />
                <h3>Module: react-medium-image-zoom</h3>
                <ImageZoom 
                    image={{
                        src: 'http://www.novasoftware.com/Images/Case-Study/JavaScript/html5.png'
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