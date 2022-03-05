import React from 'react'
import './styles.css'
import {TwitterShareButton, TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';
import { BsSearch } from 'react-icons/bs';
import WidgetsContainer from "./WidgetsContainer"

function Widgets() 
{
  const {handleOnChange,handleSubmittingSearch,searchResUsers,searchUser}=WidgetsContainer()

  return (
    <section className='widgetsSection'>

      <div className="searchWrapper">

        {/* for searching Input */}
        <form onSubmit={e => e.preventDefault()}>
          <button type="submit">
            <BsSearch className="SearchIconBtn"/>
          </button>
          <input 
            type='text' 
            placeholder="Search Twitter"
            onChange={e => handleOnChange(e)}
            onKeyUp={e=> handleSubmittingSearch(e)}
            value={searchUser}
          />
        </form>

        {/* for resulting Search */}
        {searchUser.trim() &&
          <div className="search__Result">
            {
              searchResUsers?.map(user=>
              (
                <div key={user.id} className="search__Result__Wrapper">
                  <img src={user.data.userPhoto} alt=""/>
                  <h3>{user.data.username}</h3>
                </div>
              ))
            }
          </div>
        }

      </div>

      <TwitterTweetEmbed
          tweetId={'933354946111705097'}
      />

      <TwitterShareButton
        url={'https://facebook.com/alaaHammad'}
        options={{ text: '#reactjs is awesome', via: 'alaaHammad' }}
      />
      
      <TwitterVideoEmbed
        id={'560070183650213889'}
      />
  </section>
  )
}

export default Widgets