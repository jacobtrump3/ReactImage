import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ReactImageMagnify from 'react-image-magnify';

class Index extends React.Component {
    render() {
        return (
            <span>
                <ReactImageMagnify {...{
                    smallImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 240,
                        height: 240,
                        isActivatedOnTouch: true,
                        isEnlargedImagePortalEnabledForTouch: true
                    },
                    largeImage: {
                        src: 'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414',
                        width: 760,
                        height: 760
                    }
                }} />
            </span>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);