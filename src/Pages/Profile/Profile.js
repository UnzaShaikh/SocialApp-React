"use client"
import Feed from '@/Components/Feed/Feed'
import Rightbar from '@/Components/Rightbar/Rightbar'
import Sidebar from '@/Components/Sidebar/Sidebar'
import Topbar from '@/Components/Topbar/Topbar'
import React from 'react'

const Profile = () => {
    return (
        <>

            <Topbar />

            <div className='profile'>
                <div className='profileLeft'>
                    <Sidebar />
                </div>
                <div className="profileRight">
                <div className="profileCover">
                    <img className='profileRightCoverImg' src="/assets/post3.jpg" alt="" />
                    <img className='profileRightUserImg' src="/assets/people1.jpg" alt="" />
                </div>
                    
                    <div className="profileInfo flex items-center justify-center flex-col">
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className='profileInfoDesc'>Hello my friends!</span>
                    </div>
                    <div className="profileBottom">
                        <div className="profileBottomFeedbar">
                            <Feed />
                        </div>
                        <div className="profileBottomRightbar">
                            <Rightbar profile />
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Profile
