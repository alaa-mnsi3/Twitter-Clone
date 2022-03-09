import React from 'react'
import TweetingBoxFooter from './TweetingBoxFooter';
import TweetingBoxInputs from './TweetingBoxInputs';
import TweetingBoxContainer from './TweetingBoxContainer';

function TweetingBox({userInfo,ReplyTweeting=false}) 
{
  const {handleImagesTweeting,setEmojiPicker,emojiPicker,Reply,handleOnChange,onEmojiClick,tweet,imageTweet,onReply,onTweet,heightTextarea,setHightTextarea}= TweetingBoxContainer(userInfo,ReplyTweeting)
  return (
      <div className={`${ReplyTweeting? 'TweetingContainer ReplyContainer':'TweetingContainer'}`}>
        <form>
          <div className='TweetingFormContainer'>
            {/* Personal Image of user */}
            <img src={userInfo?.userPhoto} alt=""/>

            <div className="TweetingFormWriting">
              {/* Inputs of Tweeting Box */}
              <TweetingBoxInputs tweet={tweet} ReplyTweeting={ReplyTweeting}
              Reply={Reply}
              imageTweet={imageTweet}
              handleOnChange={(e)=>handleOnChange(e)}
              heightTextarea={heightTextarea}
              setHightTextarea={setHightTextarea}/>

              {/* Footer Of Tweeting Box */}
              <TweetingBoxFooter ReplyTweeting={ReplyTweeting}
                handleImagesTweeting={handleImagesTweeting}
                setEmojiPicker={setEmojiPicker}
                emojiPicker={emojiPicker}
                onEmojiClick={onEmojiClick}
                tweet={tweet}
                Reply={Reply}
                imageTweet={imageTweet}
                onReply={onReply}
                onTweet={onTweet}
              />
            </div>
          </div>
        </form>
      </div>
  )
}

export default React.memo(TweetingBox)