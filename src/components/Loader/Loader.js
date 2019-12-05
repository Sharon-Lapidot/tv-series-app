import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = (props) => {
    return (
        <div>
            <img
                style={{'width': '38px','opacity': '0.5'}}
                alt={'Loader-icon'}
                src={loaderSrc}
            />
        </div>
    );
};

export default Loader;