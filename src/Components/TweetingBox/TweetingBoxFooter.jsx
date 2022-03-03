import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceSmile} from "@fortawesome/free-regular-svg-icons"
import Picker from 'emoji-picker-react';
import TweetingBoxContainer from './TweetingBoxContainer';

function TweetingBoxFooter({userInfo,ReplyTweeting}) 
{
    const {handleImagesTweeting,setEmojiPicker,emojiPicker,onEmojiClick,tweet,imageTweet,onReply,onTweet}=TweetingBoxContainer(userInfo)
    
    return(
        <div className="TweetingFormWritingFooter">
            <div>
                {/* Upload Images */}
                <div className="BtnUploadWrapper">
                    <label htmlFor="tweetingImagesUpload" className="UploadImagesBtn">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                    </label>
                    <input type='file' 
                    id="tweetingImagesUpload" 
                    accept="image/*" 
                    onChange={(e)=>handleImagesTweeting(e)}/>
                </div>

                {/* Upload Emoji */}
                <FontAwesomeIcon 
                className="emojiIcon" 
                icon={faFaceSmile} 
                onClick={()=>setEmojiPicker(!emojiPicker)}/>

                {emojiPicker && <Picker onEmojiClick={onEmojiClick}/>}
            </div>

                {ReplyTweeting ? 
                    <>
                    {/* for Repling Tweets */}
                        <button type="button" title='' 
                        className={(!(tweet.trim() || imageTweet.length))? 'slideBarIconsBtn disabledBtn':'slideBarIconsBtn'} 
                        disabled={tweet.trim() || imageTweet.length?false:true}
                        onClick={()=>onReply}>
                            Reply
                        </button>
                    </>
                :
                    <>
                    {/* for Tweeting */}
                        <button type="button" title='' 
                        className={(!(tweet.trim() || imageTweet.length))? 'slideBarIconsBtn disabledBtn':'slideBarIconsBtn'} 
                        disabled={tweet.trim() || imageTweet.length?false:true}
                        onClick={()=>onTweet}>
                            Tweet
                        </button>
                    </>
                }
        </div>
    )
}

export default TweetingBoxFooter