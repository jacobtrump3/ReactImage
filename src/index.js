import React from 'react';
import ReactDOM from 'react-dom';

import ReactImageMagnify from 'react-image-magnify';

import './index.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: (innerWidth <= 1024) ? true : false,
            zoomStatus: false
        }
        this.handleExpand = this.handleExpand.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleExpand(){
        document.getElementById('myModal').style.display = 'block';
    }

    handleClose(){
        document.getElementById('myModal').style.display = 'none';
    }

    handleZoom(){
        if(!this.state.zoom){
            // zoom in
            document.getElementsByClassName('modal-content')[0].style.width = '200%';
            this.setState({
                zoom: true
            });
        } else {
            // zoom out
            document.getElementsByClassName('modal-content')[0].style.width = '80%';
            this.setState({
                zoom: false
            });
        }
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
                            width: 720,
                            height: 720
                        }
                    }} />
                }
                {
                    this.state.touch &&
                    <div>
                        {/* Trigger the Modal */}
                        <img onDoubleClick={this.handleExpand} style={{ width: '100%', maxWidth: '240px' }} id='myImg' alt='github' src="https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg" />
                        {/* The Modal */}
                        <div id="myModal" className="modal">
                            {/* The Close Button */}
                            <span onClick={this.handleClose} className="close">&times;</span>
                            {/* Modal Content (The Image) */}
                            <img style={{}} onDoubleClick={this.handleZoom} className="modal-content" id="img01" src="https://www.qnap.com/solution/ifttt_agent/assets/images/app/icon_14.jpg"/>
                            {/* Modal Caption (Image Text) */}
                            <div id="caption">GitHub</div>
                        </div>
                    </div>
                }
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);