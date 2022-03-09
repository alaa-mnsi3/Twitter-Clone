import React, { useMemo } from 'react'
import TweetTime from './TweetTime'
import {BsFillPatchCheckFill} from "react-icons/bs"
import SwiperComp from '../../SwiperComponent/SwiperComp';

// contents of Tweeting
function TweetBody({username,imageTweet,tweet,time}) 
{
    const Images= useMemo(()=> imageTweet,[imageTweet])
    return (
        <>
            {/* userName and time that tweet is published */}
            <div className="wall__Info__Tweet">
                <h3>
                {
                    username?.charAt(0).toUpperCase() + username?.slice(1)
                }
                </h3>
                {
                    username === "alaa Hammad" &&<BsFillPatchCheckFill className='wall__Info__Tweet__verified'/>
                }
                <TweetTime time={time}/>
            </div>

            {/* Tweet */}
            <p>{tweet}</p>

            {/* The Image is Published */}
            {
                Images?.length ?
                <div className="Wall__Image__Wrapper">
                    <SwiperComp dataSwiping={Images}/>
                </div>
                :
                null
            }
        </>
  )
}

export default React.memo(TweetBody)