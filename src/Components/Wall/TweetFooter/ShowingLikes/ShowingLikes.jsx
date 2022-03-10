import React from 'react'

// for who click like
function ShowingLikes({likes})
{
    return(
        <div className="LikesWrapper">
            {likes.length&&
                likes.map(like=>
                <div key={Math.random()*100} className="LikeListWrapper">
                    <img src={like.userPhoto} alt=''/>
                    <span>{like.username}</span>
                </div>
            )}
        </div>
    )
}

export default React.memo(ShowingLikes)