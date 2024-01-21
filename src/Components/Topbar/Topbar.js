import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faMessage,faBell } from '@fortawesome/free-solid-svg-icons'
import Profile from '@/Pages/Profile/Profile'
function Topbar() {
    return (
        <div className='topbarContainer w-full bg-blue-500 flex items-center justify-center sticky top-0'>
            <div className="topbarLeft  ">
                <span className='logo size-6 ml-6 font-bold'>LamaSocial</span>
            </div>
            <div className="topbarCenter  text-white">
                <div className="searchBar w-full h-8 bg-white rounded-3xl flex items-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 inline text-black text-xl ml-3' />
                    <input className='searchInput rounded-none outline-none ' type="search" placeholder='Search for friend,post or video' />
                </div>
            </div>
            <div className="topbarRight flex items-center justify-around text-white ">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons flex">
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faUser}  className='w-4 inline'/>
                        <span className="topbarIconBadge h-4 w-4 bg-red-600 rounded-lg">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faMessage} className='w-4 inline' />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faBell} className='w-4 inline'/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/people1.jpg" alt="" className='w-8 h-8 object-cover rounded-full ' onClick={()=>{
                    <Profile/>
                }} />
            </div>
        </div>
    )
}

export default Topbar
