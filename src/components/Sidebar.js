import React, { useReducer } from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src="https://images.unsplash.com/photo-1554020632-57ebe4b1933f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" title='Peace' />
            <SidebarRow url={'yx/r/-XF4FQcre_i.png'} title='Friends' />
            <SidebarRow url={"yD/r/mk4dH3FK0jT.png"} title='Groups' />
            <SidebarRow url={"ys/r/9BDqQflVfXI.png"} title='Marketplace' />
            <SidebarRow url={"yG/r/A1HlI2LVo58.png"} title='Watch' />
            <SidebarRow url={"y7/r/AYj2837MmgX.png"} title='Memories' />
            <SidebarRow url={"yr/r/2uPlV4oORjU.png"} title='Saved' />
            <SidebarRow url={"yZ/r/i7hepQ2OeZg.png"} title='Pages' />
            <SidebarRow url={"yv/r/QAyfjudAqqG.png"} title='Events' />
            <SidebarRow url={"y6/r/U_sRIAvZ0k2.png"} title='Jobs' />
            <div className="bottom"></div>
        </div>
    )
}

export default Sidebar
