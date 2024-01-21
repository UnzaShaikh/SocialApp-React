import React from 'react'
import { Users } from '@/dummyData'
import Online from '../Online/Online'
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer flex items-center">
          <img className="birthdayImg w-6 h-6 m-3" src="assets/gift.png" />
          <span className="birthdatText font-light text-sm"><b>Pole foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className='rightbarTitle mb-5 font-bold'>Online Friends</h4>
        <ul className="rigthbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle text-lg font-bold mb-3'>User Information</h4>
        <div className="rightbarInfo mb-8">
          <div className="rightbarInfoItem mb-3">
            <span className="rightbarInfoKey font-bold mr-4 text-gray-500">City:</span>
            <span className="rightbarInfoValue font-light  text-gray-500">Madrid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey font-bold mr-4 text-gray-500">Relationship:</span>
            <span className="rightbarInfoValue font-light  text-gray-500">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle text-lg font-bold mb-3'>User friends</h4>
        <div className="rightbarFollowings flex flex-wrap justify-between ">
          <div className="rightbarFollowing flex flex-col mb-6">
            <img src="assets/people1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  }








  return (
    <div className='rightbar flex-4'>
      <div className="rightbarWrapper p-5">
      {profile ? <ProfileRightbar /> : <HomeRightbar /> }
      
        
        
      </div>
    </div>
  )
}

export default Rightbar
