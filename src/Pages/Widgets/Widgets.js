import React from 'react'
import './styles.css'
import {TwitterShareButton, TwitterTweetEmbed, TwitterVideoEmbed } from 'react-twitter-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsSearch } from 'react-icons/bs';

function Widgets() {
  return (
    <section className='widgetsSection'>
    <form>
      <button type="submit">
        <BsSearch/>
      </button>
      <input type='text' placeholder="Search Twitter"/>
    </form>
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