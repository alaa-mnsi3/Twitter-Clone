import React from 'react'
import { Link } from 'react-router-dom'
import TweetingBox from '../TweetingBox/TweetingBox'
import TweetBody from './TweetBody/TweetBody'
import TweetDiscFooter from './TweetFooter/TweetDiscFooter'
import TweetFooter from './TweetFooter/TweetFooter'
import WallContainer from './WallContainer'

function Tweet({tweetInfo,userInfo,clickReplyId,handleReplyTweet,Replies=false,TweetReply=false}) 
{
    const {handleRemoveLiked,handleLikedTweet}=WallContainer(userInfo)

    return (
        <div className={Replies?"wallWrapper replies":"wallWrapper"}>

            {/* Photo of userName */}
            <div className="TweetingFormContainer">
                <img src={tweetInfo?.data()?.userPhoto} alt=''/>
            </div>

            {/* Tweet */}
            <div className="wall__Tweet">

                {/* TweetBody */}
                <Link to={`/tweets/${tweetInfo?.id}`} className={(!Replies)? "":"disabledLink"}>
                    <TweetBody
                    tweet={tweetInfo?.data()?.tweet} username={tweetInfo?.data()?.username}
                    imageTweet={tweetInfo?.data()?.imageTweet} time={tweetInfo?.data()?.timeStamp?.seconds * 1000}
                    />
                </Link>
                

                {/* Footer Tweeting */}
                {TweetReply?
                    <TweetDiscFooter tweet={tweetInfo?.data()} userInfo={userInfo}/>
                    :
                    Replies? 
                    null
                    :
                    <TweetFooter handleReplyTweet={handleReplyTweet} userName={userInfo?.username} tweet={tweetInfo?.data()} 
                    handleLikedTweet={handleLikedTweet} handleRemoveLiked={handleRemoveLiked} Id={tweetInfo?.id}/>
                }
                
                {/* TweetingBox for Reply */}
                {clickReplyId === tweetInfo?.id && <TweetingBox userInfo={userInfo} tweetInfo={tweetInfo?.data()} ReplyTweeting={true}/>}
                
            </div>
        </div>
    )
}

export default React.memo(Tweet)