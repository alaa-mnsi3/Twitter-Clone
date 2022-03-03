import React from 'react'

function TweetingBoxInputs()
{
    return(
        <>
            {/* textArea of Tweeting Box */}
            <textarea 
            value={tweet} 
            style={{height:`${tweet? heightTextarea:'50'}px`}}
            onChange={(e)=>setTweet(e.target.value)} 
            onKeyUp={(e)=>setHightTextarea(e.target.scrollHeight)}
            placeholder="what's happening?"
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