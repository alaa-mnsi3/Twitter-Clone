import React,{useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceSmile} from "@fortawesome/free-regular-svg-icons"
import Picker from 'emoji-picker-react';
import { db } from '../../Firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

function TweetingBox({userInfo,ReplyTweeting=false}) 
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

  const handleSubmitTweeting=async(e)=>
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
  return (
      <div className="TweetingContainer">
        <form onSubmit={(e)=>handleSubmitTweeting(e)}>
            <div className='TweetingFormContainer'>
                <img src={userInfo?.userPhoto} alt=""/>
                <div className="TweetingFormWriting">
                  <textarea value={tweet} style={{height:`${tweet? heightTextarea:'50'}px`}}
                  onChange={(e)=>setTweet(e.target.value)} 
                  onKeyUp={(e)=>setHightTextarea(e.target.scrollHeight)}
                  placeholder="what's happening?"
                  />
                  {imageTweet.length?
                  <div className="ImagesTweetContainer">
                    {imageTweet.map(image=><img className='imagesTweeting' key={Math.random() * 10} src={image} alt=''/>)}
                  </div>:null}
                  <div className="TweetingFormWritingFooter">
                    <div>
                      <div className="BtnUploadWrapper">
                        <label htmlFor="tweetingImagesUpload" className="UploadImagesBtn">
                          <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                        </label>
                        <input type='file' id="tweetingImagesUpload" accept="image/*" onChange={(e)=>handleImagesTweeting(e)}/>
                      </div>
                      <FontAwesomeIcon className="emojiIcon" icon={faFaceSmile} onClick={()=>setEmojiPicker(!emojiPicker)}/>
                      {emojiPicker&& <Picker onEmojiClick={onEmojiClick}/> }
                    </div>
                    {ReplyTweeting ? <button type='submit' title='' className={(!(tweet.trim() || imageTweet.length))? 'slideBarIconsBtn disabledBtn':'slideBarIconsBtn'} disabled={tweet.trim() || imageTweet.length?false:true}>Reply</button>
                    :
                    <button type='submit' title='' className={(!(tweet.trim() || imageTweet.length))? 'slideBarIconsBtn disabledBtn':'slideBarIconsBtn'} disabled={tweet.trim() || imageTweet.length?false:true}>Tweet</button>
                    }
                  </div>
                </div>
            </div>
        </form>
      </div>
  )
}

export default React.memo(TweetingBox)