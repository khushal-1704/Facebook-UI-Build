import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

function Story({ profileSrc, img, title }) {
    return (
        <div className='story' style={{ backgroundImage: `url(${img})` }}>
            <Avatar src={profileSrc} className='story__avatar' />
            <h4>{title}</h4>

        </div>
    )
}

export default Story
