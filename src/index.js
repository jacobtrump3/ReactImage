import React from 'react';
import ReactDOM from 'react-dom';

import Magnifier from 'magnifier';

class Index extends React.Component {
    componentDidMount(){
        new Magnifier('#skyline');
    }
    render() {
        return (
            <img id="skyline" style={{ width: 240, height: 240 }} src='https://raw.githubusercontent.com/malaman/react-image-zoom/master/example/1.jpg' />
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);