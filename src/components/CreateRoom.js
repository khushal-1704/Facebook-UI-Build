import React from 'react'
import './CreateRoom.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar } from '@material-ui/core'

function CreateRoom() {
    return (
        <div className='createRoom'>
            <div className='create__option'>
                <VideoCallIcon style={{ color: 'pink' }} />
                <h3>Create Room</h3>
            </div>
            <div className="online__people">
                <div className="people">
                    <Avatar src='/images/user-5.jfif' />

                </div>
                <div className="people">
                    <Avatar src='/images/user-6.jfif' />

                </div>
                <div className="people">
                    <Avatar src='/images/user-7.jfif' />

                </div>
            </div>
        </div>
    )
}

export default CreateRoom
