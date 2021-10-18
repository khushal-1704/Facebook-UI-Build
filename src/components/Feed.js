import React from 'react'
import CreateRoom from './CreateRoom'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            {/* StoryReel */}
            <StoryReel />
            {/* <Message /> */}
            <MessageSender />
            <CreateRoom />
            <Post profilePic='/images/user-1.jfif' image='/images/nature-2.jfif' username='Jenny' message='Mother Nature......' timestamp='10:20pm' />
            <Post profilePic='/images/user-2.jfif' image='/images/fox.jpg' username='John' message='Meet my new friend Foxy' timestamp='00:20am' />
            <Post profilePic='/images/user-3.jfif' image='/images/jodhpur.jpg' username='Lilly ' message='Blue City of Rajasthan' timestamp='09:00pm' />
            <Post profilePic='/images/user-4.jpg' image='/images/jaipur.jpg' username='James Calioth' message='Love this City' timestamp='06:30am' />


        </div>
    )
}

export default Feed
