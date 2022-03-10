import { useState,useEffect }  from 'react'
import { collection, onSnapshot,query, orderBy, doc, updateDoc, arrayRemove } from "firebase/firestore"; 
import { db } from '../../Firebase';
import {useDispatch} from 'react-redux'
import { getReplyIDAction } from '../../store/Slices/IdReplySlice'

function WallContainer(userInfo) 
{
    const [TweetsWall,setTweetsWall]=useState()
    const [clickReplyId,setClickReplyId]=useState("")
    const [likedList,setLikedList]=useState([])
    const [showingLike,setShowingLike]=useState(false)
    const dispatch=useDispatch()

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
        liked:[...liked,{username:userInfo.username,userPhoto:userInfo.userPhoto}]
      });
    }

    // Function for removing liking post
    const handleRemoveLiked=async(id)=> 
    {
      const washingtonRef = doc(db, "tweets", id);
      // Atomically remove a region from the "regions" array field.
      await updateDoc(washingtonRef, {
        liked: arrayRemove({username:userInfo.username,userPhoto:userInfo.userPhoto})
      });
    }

    // for replying
    const handleReplyTweet=(Id,replyCount)=>
    {
      setClickReplyId(Id);
      dispatch(getReplyIDAction({Id,replyCount}));
    }

    // for showing likes
    const handleShowLikes=(likes)=>
    {
      setLikedList(likes)
      setShowingLike(prev=>!prev)
    }
    return {handleRemoveLiked,handleLikedTweet,clickReplyId,TweetsWall,showingLike,likedList,handleShowLikes,handleReplyTweet}
}

export default WallContainer