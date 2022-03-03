import React from 'react'
import TweetingBoxFooter from './TweetingBoxFooter';
import TweetingBoxInputs from './TweetingBoxInputs';

function TweetingBox({userInfo,ReplyTweeting=false}) 
{

  return (
      <div className={`${ReplyTweeting? 'TweetingContainer ReplyContainer':'TweetingContainer'}`}>
        <form>
          <div className='TweetingFormContainer'>
            {/* Personal Image of user */}
            <img src={userInfo?.userPhoto} alt=""/>

            <div className="TweetingFormWriting">
              {/* Inputs of Tweeting Box */}
              <TweetingBoxInputs/>

              {/* Footer Of Tweeting Box */}
              <TweetingBoxFooter userInfo={userInfo} ReplyTweeting={ReplyTweeting}/>
            </div>
          </div>
        </form>
      </div>
  )
}

export default React.memo(TweetingBox)