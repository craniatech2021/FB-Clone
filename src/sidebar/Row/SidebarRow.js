import React from 'react';
import '../../style/style.scss';
import { Avatar } from '@material-ui/core';

function SidebarRow({src, title, Icon }) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} /> }
            {Icon && <Icon />}
            <h4> {title} </h4>
        </div>
    )
}

export default SidebarRow
