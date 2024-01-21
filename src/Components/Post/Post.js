"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { Users } from '@/dummyData'
import { useState } from 'react'
const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
   
  const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className='post'>
      <div className='postWrapper p-3'>
        <div className='postTop flex items-center justify-between'>
            <div className="postLeft flex items-center">
                <img  className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0]?.profilePicture}
 alt="" />
                <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0]?.username}
</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
            <FontAwesomeIcon icon={faEllipsisVertical} className='w-1' />
            </div>
        </div>
        <div className='postCenter mt-5 mb-5 '>
            <span className="postText">{post.desc}</span>
            <img  className="postImg"src={post.photo} alt="" />
        </div>
        <div className='postBottom flex items-center justify-between'>
            <div className="postBottomLeft">
                <img className="likeIcon"src="assets/like.png" onClick={likeHandler} alt="" />
                <img className="likeIcon"src="assets/heart.png" alt="" />
                <span className="postLikeCoun">{like} people liked it</span>
            </div>
            <div className="poostBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
