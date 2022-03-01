import {useEffect, useState}  from 'react'
import { doc, onSnapshot } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase';

function TweetDiscContainer() 
{
    const Id=useParams().id
    const [tweetClicking,setTweetClicking]=useState(null)
    const [clickReplyId,setClickReplyId]=useState("")
    
    useEffect(() =>
    {
      onSnapshot(doc(db, "tweets", Id), (doc) => 
      {
        setTweetClicking(doc);
      })
    },[db])

    return {tweetClicking,clickReplyId,setClickReplyId}
}

export default TweetDiscContainer