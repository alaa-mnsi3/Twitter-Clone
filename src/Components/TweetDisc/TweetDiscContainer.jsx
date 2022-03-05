import {useEffect, useState}  from 'react'
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase';

function TweetDiscContainer() 
{
    const Id=useParams().id
    const [tweetClicking,setTweetClicking]=useState(null)
    const [clickReplyId,setClickReplyId]=useState("")
    const [replies,setReplies]=useState([])
    
    useEffect(() =>
    {
      onSnapshot(doc(db, "tweets", Id), (doc) => 
      {
        setTweetClicking(doc);
      })
      onSnapshot(
        query(collection(db, "Replies"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          snapshot.forEach(doc=>{
           if(doc.data().tweetId===Id)
           {
              setReplies(prev => [...prev,doc]);
           } 
          })
        }
      )
    },[db])


    return {tweetClicking,clickReplyId,setClickReplyId,replies}
}

export default TweetDiscContainer