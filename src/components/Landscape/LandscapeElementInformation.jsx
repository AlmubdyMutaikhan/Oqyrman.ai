import React from 'react';
import './Landscape.scss';

const LandscapeElementInformation = (props) => {
    return (
        <div className={'info'}>
           <h1 className={'info-title'}>{props.info.title}</h1>
            <p className={'info-description'}>
                {props.info.description}
            </p>
            {props.isLink && <a href={props.link} className='info-link'>Өту</a> }
        </div>
    );
};

export default LandscapeElementInformation;