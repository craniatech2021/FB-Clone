import React from 'react';
import { Avatar } from '@material-ui/core';
import '../style/style.scss';

function Story({img, profileSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${img})`}} className='story'>
            <Avatar className='story_avatar' src={profileSrc} />
            <h4> {title} </h4>
        </div>
    )
}

export default Story
