import React from 'react'
import './Wall.css'
import WallContainer from './WallContainer';
import Tweet from './Tweet';

function Wall({userInfo}) 
{
  const {clickReplyId,TweetsWall,handleReplyTweet}=WallContainer(userInfo)

  return (
    // Tweets
    <div className="wallSection">
      {/* Tweet */}
      {TweetsWall?.map(tweet => 
        (
          <Tweet key={tweet.id} tweetInfo={tweet}
          userInfo={userInfo} handleReplyTweet={handleReplyTweet}
          clickReplyId={clickReplyId}/>
        )
      )}
    </div>
  )
}

export default React.memo(Wall)