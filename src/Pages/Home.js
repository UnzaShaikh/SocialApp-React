"use client"
import React from 'react'
import Topbar from '@/Components/Topbar/Topbar'
import Sidebar from '@/Components/Sidebar/Sidebar'
import Feed from '@/Components/Feed/Feed'
import Rightbar from '@/Components/Rightbar/Rightbar'
const Home = () => {
  return (
   <>
    <Topbar/>
    <div className="homeContainer flex w-full">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    
   </>
  )
}

export default Home
