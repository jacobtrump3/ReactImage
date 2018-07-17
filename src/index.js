import React from 'react';
import ReactDOM from 'react-dom';

import ReactImageZoom from 'react-image-zoom';

class Index extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ReactImageZoom
                {...{
                    width: 400,
                    zoomWidth: 400,
                    img: 'https://raw.githubusercontent.com/malaman/react-image-zoom/master/example/1.jpg'
                }} />
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);