import React from 'react'
const Closefriends = ({user}) => {
  return (
    <li className="sidebarFriend flex items-center mb-4">
                        <img src={user.profilePicture} alt="" className="sidebarfriendImg" />
                        <span className="sidebarUserName">{user.username}</span>
                    </li>
  )
}

export default Closefriends
