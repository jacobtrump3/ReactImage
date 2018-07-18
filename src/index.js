import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: (innerWidth <= 1024) ? true : false,
            small: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            small: !this.state.small
        });
    }

    render() {
        return (
            <span>
                {!this.state.touch &&
                    <ReactImageMagnify {...{
                        smallImage: {
                            src: 'https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg',
                            width: 240,
                            height: 240
                        },
                        largeImage: {
                            src: 'https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg',
                            width: 480,
                            height: 480
                        }
                    }} />
                }
                {
                    this.state.touch &&
                    this.state.small &&
                    <img onClick={this.handleClick} src="https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg" />
                }
                {
                    this.state.touch &&
                    !this.state.small &&
                    <img style={{width: innerWidth, height: innerHeight}} onClick={this.handleClick} src="https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg" />
                }
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);