import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ReactImageMagnify from 'react-image-magnify';

import ReactTouchEvents from "react-touch-events";

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById('myModal');

class Index extends React.Component {
componentDidMount(){

}
handleTap() {
    if(window.innerWidth <= 760) {
        modal.style.display = "block";
        modalImg.src = 'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg';
    }
}
render() {
    return (
        <div>
            <ReactTouchEvents
                onTap={this.handleTap.bind(this)}
            >
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


            </ReactTouchEvents>

            <div id="myModal" className="modal">
                <span onClick={function(){modal.style.display = "none";}} className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
            </div>
        </div>
    );
}
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);