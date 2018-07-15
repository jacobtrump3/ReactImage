import React from 'react';
import ReactDOM from 'react-dom';


var pinchZoom = require('pinch-zoom');

class Index extends React.Component {
    componentDidMount() {
        pinchZoom(
            document.getElementById('wrapper'),
            {
                maxScale: 4
            }
        );
    }
    render() {
        return (
            <img id="wrapper" src="https://cdn-images-1.medium.com/fit/c/120/120/1*lKN9xV1YEin-2wfAiGySBA.png" alt="" />
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);