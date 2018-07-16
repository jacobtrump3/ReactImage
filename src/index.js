import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ImageZoom from 'react-medium-image-zoom';

import ReactImageMagnify from 'react-image-magnify';

import $ from 'jquery';

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mouse: false,
            touch: true
        }
    }

    componentDidMount(){
        $(document).mousemove(() => {
            this.setState({
                mouse: true,
                touch: false
            });
            $(document).off('mousemove');
        });
    }
    render() {
        return (
            <span>
                Touch detected: {this.state.touch ? 'true' : 'false'}<br />
                Mouse detected: {this.state.mouse ? 'true' : 'false'}
                <hr />
                <h1>A combination based on touch or mouse</h1>
                {this.state.mouse &&
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
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);