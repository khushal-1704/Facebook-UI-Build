import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu'

function Header() {


    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>

            <div className="header__main">
                <div className="header__option header__option--active" >
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <MenuIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>kushal</h4>
                </div>
                <IconButton>
                    <AddIcon className='white' />
                </IconButton>
                <IconButton>
                    <ForumIcon className='white' />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon className='white' />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon className='white' />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
