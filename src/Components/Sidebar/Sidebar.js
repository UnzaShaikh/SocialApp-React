import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faComments, faPlay, faUserGroup, faBookmark, faCircleQuestion, faBriefcase, faGraduationCap, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Users } from '@/dummyData'
import Closefriends from '../Closefriends/Closefriends'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper p-6">
                <ul className="sidebarList p-0 m-0 list-none">
                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faRss} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Feed</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faComments} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Chats</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faPlay} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Videos</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faUserGroup} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Group</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faBookmark} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faCircleQuestion} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Questions</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faBriefcase} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Jobs</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faCalendar} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Events</span>
                    </li>

                    <li className="sidebarlistItem">
                        <FontAwesomeIcon icon={faGraduationCap} className="sidebarIcon inline w-4 " />
                        <span className="sidebarlistItemText">Feed</span>
                    </li>

                </ul>
                <button className='sidebarBtn w-36 border-none p-3 rounded font-normal bg-gray-300'>Show More</button>
                <hr className='sidebarHr mt-5 mb-5' />
                <ul className="sidebarFriendList p-0 m-0 list-none">
                    {Users.map(u=>(
                        <Closefriends key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
