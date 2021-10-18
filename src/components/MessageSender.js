import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'; import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function MessageSender() {
    const [input, setInput] = useState('')
    const [imgURl, setImgUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        //some clever db stuff

        setInput("")
        setImgUrl("")
    }
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar />
                <form >
                    <input value={input}
                        onChange={(e) => setInput(e.target.value)} type="text" placeholder={`What's on your mind ? Peace`} className='message__input' />
                    <input value={imgURl}
                        onChange={(e) => setImgUrl(e.target.value)} type="text" placeholder='Image URL' className='url' />
                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'yellow' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
