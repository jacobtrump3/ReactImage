import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Zooming from 'zooming';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: (innerWidth < 1024) ? true : false
        }
    }

    componentDidMount() {
        if (innerWidth < 1024) {
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
                            src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg',
                            width: 240,
                            height: 240
                        },
                        largeImage: {
                            src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg',
                            width: 480,
                            height: 480
                        }
                    }} />
                }
                {this.state.touch &&
                    <img id="test" src="https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg" />
                }
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);