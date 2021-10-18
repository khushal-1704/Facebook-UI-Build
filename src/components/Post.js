import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import NearMeTwoToneIcon from '@material-ui/icons/NearMeTwoTone';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar src={profilePic} />
                <div className="post__info">
                    <span style={{ fontSize: '20px', fontWeight: "600" }}>{username}</span>
                    <span style={{ fontSize: "16px", color: 'gray' }}>{timestamp}</span>
                </div>
            </div>
            <div className="post__top">
                {message}
            </div>
            <div className="post__mid">
                <img src={image} alt="" />
            </div>
            <div className="post__bottom">
                <div className="bottom__option btn--1">
                    <ThumbUpAltTwoToneIcon />
                    <span>Like</span>
                </div>
                <div className="bottom__option btn--2">
                    <ChatBubbleTwoToneIcon />
                    <span>Comment</span>
                </div>
                <div className="bottom__option btn--3">
                    <NearMeTwoToneIcon />
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default Post




