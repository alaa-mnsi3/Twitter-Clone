import React from 'react'
import './styles.css'
import HomeContainer from './HomeContainer'
import {Route, Routes } from 'react-router-dom'
import Feed from '../Feed/FeedView'
import SlideBarView from '../SlideBar/SlideBarView'
import Widgets from '../Widgets/Widgets'
import TweetDisc from '../../Components/TweetDisc/TweetDisc'
import Profile from '../Profile/Profile'

function Home() 
{
  // the Logic Part in Home.jsx
  const {userInfo}=HomeContainer()
  console.log(userInfo)
  return (
      <main>

        {/* slideBar */}
        <SlideBarView userInfo={userInfo}/>

        {/* the second part */}
        <Routes>
          <Route  path='/Home' element={<Feed userInfo={userInfo}/>}/>
          <Route path='/Profile' element={<Profile userInfo={userInfo}/>}/>
          <Route path='/tweets/:id' element={<TweetDisc userInfo={userInfo}/>}/>
        </Routes>

        {/* Widgets */}
        <Widgets/>

      </main>
  )
}

export default Home