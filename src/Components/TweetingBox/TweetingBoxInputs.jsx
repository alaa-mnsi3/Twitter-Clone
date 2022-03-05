import React from 'react'
import { useTranslation } from 'react-i18next';

function TweetingBoxInputs({tweet,Reply,imageTweet,ReplyTweeting,handleOnChange,heightTextarea,setHightTextarea})
{
    const {t}= useTranslation();
    return(
        <>
            {/* textArea of Tweeting Box */}
            <textarea 
            value={ReplyTweeting?Reply:tweet} 
            style={{height:`${tweet || Reply? heightTextarea:'50'}px`}}
            onChange={(e)=>handleOnChange(e)} 
            onKeyUp={(e)=>setHightTextarea(e.target.scrollHeight)}
            placeholder={t("what's happening?")}
            />

            {/* Images of Tweets */}
            {
                imageTweet.length?
                <div className="ImagesTweetContainer">
                    {imageTweet.map(image=>
                        <img className='imagesTweeting' key={Math.random() * 10} src={image} alt=''/>
                    )}
                </div>
            :
                null
            }
        </>
    )
}

export default TweetingBoxInputs