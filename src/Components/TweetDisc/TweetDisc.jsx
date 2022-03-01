import React from 'react'
import Tweet from '../Wall/Tweet'
import TweetDiscContainer from './TweetDiscContainer'


function TweetDisc({userInfo}) 
{
  const {tweetClicking,clickReplyId,setClickReplyId}=TweetDiscContainer()

  return (
    <Tweet tweetInfo={tweetClicking} userInfo={userInfo} clickReplyId={clickReplyId} setClickReplyId={setClickReplyId}/>
  )
}

export default TweetDisc