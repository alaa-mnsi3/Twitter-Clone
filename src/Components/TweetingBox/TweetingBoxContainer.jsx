import {useEffect, useState} from 'react'
import { db } from '../../Firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore"; 
import {useDispatch, useSelector} from 'react-redux'
import { getReplyIDAction } from '../../store/Slices/IdReplySlice'

function TweetingBoxContainer(userInfo,ReplyTweeting)
{
  const dispatch=useDispatch()
  const [tweet,setTweet]=useState("");
  const [Reply,setReply]=useState("")
  const [heightTextarea,setHightTextarea]=useState('100')
  const [emojiPicker,setEmojiPicker]=useState(false)
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const {id,replyCount}=useSelector(state=> state.IdReplySlice)
  const userId = useSelector(state => state.userIdSlice)

  const [imageTweet,setImageTweet]=useState([])

  // set Emoji to tweet 
  const onEmojiClick = (event, emojiObject) => 
  {
    setChosenEmoji(emojiObject);
  };

  // for adding Emoji to tweet or reply
  useEffect(()=>
  {
    if(chosenEmoji)
    {
      if(ReplyTweeting)
      {
        setReply(prev => {return prev + chosenEmoji?.emoji})

      }
      else
      {
        setTweet(prev => {return prev + chosenEmoji?.emoji})

      }
    }
  },[chosenEmoji,ReplyTweeting])

  // for Tweeting tweets
  const onTweet=async(e)=>
  {
    try {
      await addDoc(collection(db, "tweets"), 
      {username:userInfo.username,userPhoto:userInfo.userPhoto,timeStamp:serverTimestamp(),
      tweet,imageTweet,liked:[],Reply:0});

      setTweet('');
      setImageTweet([]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // for tweeting Replies
  const onReply=async()=>
  {
    // for adding replies in firebase replies
    try {
      await addDoc(collection(db, "Replies"),{username:userInfo.username,
      userPhoto:userInfo.userPhoto,userId:userId,tweet:Reply,tweetId:id,timeStamp:serverTimestamp()});
    } 
    catch(e)
    {
      console.error("Error adding document: ", e);
    }

    // for updating number of replies
    const washingtonRef = doc(db, "tweets", id);
    await updateDoc(washingtonRef, {
      Reply:(replyCount)
    });

    // for number of replies
    dispatch(getReplyIDAction({Id:id,replyCount}));

    setReply("")
  }

  // set images to tweets or replies
  const handleImagesTweeting=(e)=>
  {
    console.error("Error adding document: ", e);

    const files=e.target.files;
    let fileReader=new FileReader();
    fileReader.readAsDataURL(files[0])
    fileReader.onload=(e)=>
    {
      setImageTweet(prev=>[...prev,e.target.result])    
    }
  }

  // for textarea
  const handleOnChange=(e)=>
  {
    if(ReplyTweeting)
    {
      setReply(e.target.value)
    }
    else
    {
      setTweet(e.target.value)
    }
  }

    return  {handleImagesTweeting,setEmojiPicker,emojiPicker,Reply,handleOnChange,onEmojiClick,tweet,imageTweet,onReply,onTweet,heightTextarea,setHightTextarea}
}

export default TweetingBoxContainer