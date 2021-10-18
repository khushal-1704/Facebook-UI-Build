import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'

function SidebarRow({ src, title, alt, url }) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} style={{ height: "30px", width: "30px" }} />}
            {url && <img src={`https://www.facebook.com/rsrc.php/v3/${url}`} alt={alt} />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
