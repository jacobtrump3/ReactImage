import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Zooming from 'zooming';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: (innerWidth <= 1024) ? true : false
        }
    }

    componentDidMount() {
        if (innerWidth <= 1024) {
            new Zooming({
                customSize: { width: innerWidth, height: innerHeight }
            }).listen('#test');
        }
    }

    render() {
        return (
            <span>
                {!this.state.touch &&
                    <ReactImageMagnify {...{
                        smallImage: {
                            src: 'https://raw.githubusercontent.com/malaman/react-image-zoom/master/example/1.jpg',
                            width: 240,
                            height: 240
                        },
                        largeImage: {
                            src: 'https://raw.githubusercontent.com/malaman/react-image-zoom/master/example/1.jpg',
                            width: 480,
                            height: 480
                        }
                    }} />
                }
                {this.state.touch &&
                    <img id="test" src="https://raw.githubusercontent.com/malaman/react-image-zoom/master/example/1.jpg" />
                }
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);