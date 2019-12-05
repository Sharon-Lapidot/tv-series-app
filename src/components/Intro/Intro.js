import React from 'react';

const Intro = (props) => {
    return (
        <div className={'intro'}>
            <p>{props.message}</p>
        </div>
    );
};

export default Intro;