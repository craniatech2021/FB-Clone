import React from 'react';
import '../style/style.scss';
import {SubscriptionsOutlined, Flag, Home, Search, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../provider/stateProvider';


function Header() {
    
    const [ {user} ] = useStateValue()

    return (
        <div className='header'>
            <div className='header-left'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                alt='facebook-logo'
                />

                <div className='header-input'>
                    <Search />
                    <input 
                    type='text'
                    placeholder='Search Facebook'
                    />
                </div>
            </div>

            <div className='header-middle'>
                <div className='header_option active'>
                    <Home fontSize='large' className='home' />
                </div>

                <div className='header_option'>
                    <Flag fontSize='large' />
                </div>

                <div className='header_option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>

                <div className='header_option'>
                    <StorefrontOutlined fontSize='large' />
                </div>

                <div className='header_option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>

            </div>


            <div className='header-right'>
                <div className='header-info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>

                <IconButton>
                    <Forum />
                </IconButton>

                <IconButton>
                    <NotificationsActive />
                </IconButton>

                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
