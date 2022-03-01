import React from 'react'
import { Link } from 'react-router-dom'
import TweetingBox from '../TweetingBox/TweetingBox'
import TweetBody from './TweetBody/TweetBody'
import TweetFooter from './TweetFooter/TweetFooter'
import WallContainer from './WallContainer'

function Tweet({tweetInfo,userInfo,clickReplyId,setClickReplyId}) 
{
    const {handleRemoveLiked,handleLikedTweet}=WallContainer(userInfo)

    return (
        <>
        <div className="wallWrapper">

            {/* Photo of userName */}
            <div className="TweetingFormContainer">
                <img src={tweetInfo?.data().userPhoto} alt=''/>
            </div>

            {/* Tweet */}
            <div className="wall__Tweet">

                {/* TweetBody */}
                <Link to={`/tweets/${tweetInfo?.id}`}>
                    <TweetBody
                    tweet={tweetInfo?.data()?.tweet} username={tweetInfo?.data().username}
                    imageTweet={tweetInfo?.data().imageTweet} time={tweetInfo?.data()?.timeStamp?.seconds * 1000}
                    />
                </Link>

                {/* Footer Tweeting */}
                <TweetFooter setClickReplyId={setClickReplyId} tweet={tweetInfo?.data()} 
                handleLikedTweet={handleLikedTweet} handleRemoveLiked={handleRemoveLiked} Id={tweetInfo?.id}/>
                
                {/* TweetingBox for Reply */}
                {clickReplyId === tweetInfo?.id && <TweetingBox userInfo={tweetInfo?.data()} ReplyTweeting={true}/>}
            </div>
        </div>
      </>
    )
}

export default Tweet