import React,{useEffect, useState} from 'react'
import { db } from '../../Firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

function TweetingBoxContainer({userInfo})
{
    const [tweet,setTweet]=useState("");
    const [heightTextarea,setHightTextarea]=useState('100')
    const [emojiPicker,setEmojiPicker]=useState(false)
    const [chosenEmoji, setChosenEmoji] = useState(null);
  
    const [imageTweet,setImageTweet]=useState([])
    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };
  
    useEffect(()=>
    {
      if(chosenEmoji)
      {
        setTweet(prev => {return prev + chosenEmoji?.emoji})
      }
    },[chosenEmoji])
  
    const onTweet=async(e)=>
    {
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "tweets"), {username:userInfo.username,userPhoto:userInfo.userPhoto,
        timeStamp:serverTimestamp(),tweet,imageTweet,liked:[],Reply:[]});
        console.log("Document written with ID: ", docRef.id);
        setTweet('')
        setImageTweet([])
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    const onReply=async(id,Reply)=>
    {
        const washingtonRef = doc(db, "tweets", id);
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
          Reply:[...Reply,userInfo.username,userInfo.userPhoto,tweet]
        });
    }
    const handleImagesTweeting=(e)=>
    {
      const files=e.target.files;
      console.log(files)
      let fileReader=new FileReader();
      fileReader.readAsDataURL(files[0])
      fileReader.onload=(e)=>
      {
        setImageTweet(prev=>[...prev,e.target.result])
      }
    }

    return  {handleImagesTweeting,setEmojiPicker,emojiPicker,onEmojiClick,tweet,imageTweet,onReply,onTweet}
}

export default TweetingBoxContainer