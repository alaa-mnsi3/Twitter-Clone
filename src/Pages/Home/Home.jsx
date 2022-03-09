import React from 'react'
import './styles.css'
import HomeContainer from './HomeContainer'
import Feed from '../Feed/FeedView'
import SlideBarView from '../SlideBar/SlideBarView'
import Widgets from '../Widgets/Widgets'
import TweetDisc from '../../Components/TweetDisc/TweetDisc'

function Home({feed,discTweet}) 
{
  // the Logic Part in Home.jsx
  const {userInfo}=HomeContainer()

  return (
      <main>

        {/* slideBar */}
        <SlideBarView userInfo={userInfo}/>

        {/* the second part */}
        {feed && <Feed userInfo={userInfo}/>}
        {discTweet && <TweetDisc userInfo={userInfo}/>}

        {/* Widgets */}
        <Widgets/>

      </main>
  )
}

export default Home