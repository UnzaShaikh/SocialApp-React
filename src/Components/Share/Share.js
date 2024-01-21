import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faImages,faLocationDot,faTags } from '@fortawesome/free-solid-svg-icons'
const Share = () => {
    return (
        <div className='share w-full h-44 rounded-xl'>
            <div className="shareWrapper p-3 m-3">
                <div className="shareTop flex items-center">
                    <img src="/assets/people1.jpg" alt="" className="shareProfilePic" />
                    <input placeholder="what's is your mind Safak?" className="shareInput border-none w-80 focus:outline-none" />
                </div>
                <hr className='shareHr m-5' />
                <div className="shareBottom flex items-center justify-between">
                    <div className="shareOptions flex m-5">
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faImages} className='shareIcon w-6 inline text-red-500' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faTags} className='shareIcon w-6 inline text-blue-800' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faLocationDot} className='shareIcon w-4 inline text-green-700' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faFaceSmile} className='shareIcon w-6 inline text-orange-400' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='sharebtn'>Share</button>
                </div>
            </div>

        </div>
    )
}

export default Share
