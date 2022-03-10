import React from 'react'
import {useTranslation} from 'react-i18next'
import WallContainer from '../WallContainer';
import ShowingLikes from './ShowingLikes/ShowingLikes';

// for Discription Tweets 
function TweetDiscFooter({tweet,userInfo})
{
    const {t}=useTranslation();
    const {handleShowLikes,showingLike,likedList}=WallContainer(userInfo)

    return(
        <div className="TweetDiscFooterWrapper">
            <div onClick={()=>handleShowLikes(tweet?.liked)}>
                <span>{t("likes")}</span>
                <span>{tweet?.liked.length}</span>
            </div>
            <div>
                <span>{t("Replies")}</span>
                <span>{tweet?.Reply}</span>
            </div>

            {showingLike ? <ShowingLikes likes={likedList}/> : null}
        </div>
    )
}

export default React.memo(TweetDiscFooter)