import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

var pinchZoom = require('pinch-zoom');

class Index extends React.Component {
    componentDidMount(){
        pinchZoom(
            document.getElementById('wrapper'),
            {
                draggable: true,
                maxScale: 4
            }
        );
    }
    render() {
        return (
                <div id="wrapper">
                    <img src="https://cdn-images-1.medium.com/fit/c/120/120/1*lKN9xV1YEin-2wfAiGySBA.png" alt="" />
                </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);