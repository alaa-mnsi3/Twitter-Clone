import { useState,useEffect }  from 'react'
import { collection, onSnapshot,query, orderBy, doc, updateDoc, arrayRemove } from "firebase/firestore"; 
import { db } from '../../Firebase';

function WallContainer(userInfo) 
{
    const [TweetsWall,setTweetsWall]=useState()
    const [clickReplyId,setClickReplyId]=useState("")
    
    // for order Tweets and listening for any changes
    useEffect(() =>
    {
        onSnapshot(
          query(collection(db, "tweets"), orderBy("timeStamp", "desc")),
          (snapshot) => {
            setTweetsWall(snapshot.docs);
          }
        )
    },[db])

    // Function for Liking post
    const handleLikedTweet=async(id,liked)=>
    {
      const washingtonRef = doc(db, "tweets", id);
      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
        liked:[...liked,userInfo.username]
      });
    }

    // Function for removing liking post
    const handleRemoveLiked=async(id)=> 
    {
      const washingtonRef = doc(db, "tweets", id);
      // Atomically remove a region from the "regions" array field.
      await updateDoc(washingtonRef, {
        liked: arrayRemove(userInfo.username)
      });
    }

    return {handleRemoveLiked,handleLikedTweet,clickReplyId,TweetsWall,setClickReplyId}
}

export default WallContainer