import React from 'react'
import Tweet from '../Wall/Tweet'
import TweetDiscContainer from './TweetDiscContainer'


function TweetDisc({userInfo}) 
{
  const {tweetClicking,clickReplyId,replies,setClickReplyId}=TweetDiscContainer()

  return (
    <div className="FeedContainer">
    <Tweet tweetInfo={tweetClicking} userInfo={userInfo} 
    clickReplyId={clickReplyId} setClickReplyId={setClickReplyId}/>

    {replies.map(reply=>(
      <Tweet tweetInfo={reply} key={reply.id} userInfo={userInfo} Replies={true}
      clickReplyId={clickReplyId} setClickReplyId={setClickReplyId}/>
    ))}
    </div>
  )
}

export default TweetDisc