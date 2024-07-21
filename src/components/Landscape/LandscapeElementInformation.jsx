import React from 'react';
import './Landscape.scss';

const LandscapeElementInformation = (props) => {
    return (
        <div className={'info'}>
           <h1 className={'info-title'}>{props.info.title}</h1>
            <p className={'info-description'}>
                {props.info.description}
            </p>
        </div>
    );
};

export default LandscapeElementInformation;