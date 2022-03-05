import React from 'react'
import '@google/model-viewer';

const Model = ({source, poster, desc}) => {
    return (        
            <model-viewer
                src={source}
                ios-src=""
                poster={poster}
                alt={desc}
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar>
            </model-viewer>
    )
}

export default Model