import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ImageZoom from 'react-medium-image-zoom';

import ReactImageMagnify from 'react-image-magnify';

import ReactTouchEvents from "react-touch-events";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            touch: false
        }
    }

    handleTap() {
        this.setState({
            touch: true
        });
    }
    render() {
        return (
            <ReactTouchEvents
                onTap={this.handleTap.bind(this)}
            >
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
                        <ImageZoom
                            image={{
                                src: 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg'
                            }}
                        />
                    }
                </span>
            </ReactTouchEvents>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);