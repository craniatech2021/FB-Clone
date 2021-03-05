import React from 'react';
import '../style/style.scss';
import SidebarRow from './Row/SidebarRow';
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import { useStateValue } from '../provider/stateProvider';


function Sidebar() {
    const [ {user} ] = useStateValue()
    return (
        <div className='sidebar'>
            <SidebarRow 
            src={user.photoURL} 
            title={user.displayName} 
            />

            <SidebarRow 
            Icon={LocalHospital}
            title='Covid-19 Information Center'
            />

            <SidebarRow
            Icon={EmojiFlags}
            title='Pages'
            />

            <SidebarRow 
            Icon={People}
            title='Friends'
            />

            <SidebarRow 
            Icon={Chat}
            title='Messanger'
            />

            <SidebarRow 
            Icon={Storefront}
            title='Marketplace'
            />

            <SidebarRow 
            Icon={VideoLibrary}
            title='Videos'
            />

            <SidebarRow 
            Icon={ExpandMoreOutlined}
            title='Marketplace'
            />
        </div>
    )
}

export default Sidebar
