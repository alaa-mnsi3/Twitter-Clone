import React,{useEffect,useState} from 'react'
import Feed from './Feed/Feed'
import SlideBar from './SlideBar/SlideBar'
import Widgets from './Widgets/Widgets'
import {useSelector} from 'react-redux'
import { collection,getDocs } from "firebase/firestore"; 
import {db} from "../../Firebase"
import './styles.css'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TweetDisc from './TweetDiscrp/TweetDisc'

function Home() 
{
  const id=useSelector(state => state.userIdSlice)
  const [userInfo,setUserInfo]=useState(null)
  const {t} = useTranslation();
  const getInfUser=async()=>
  {
    const querySnapshot =await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => 
    {
      if(doc.id === id)
      {
        setUserInfo(doc.data())
      }
    });
  }
  useEffect(()=>{
    getInfUser();
      document.body.dir = userInfo?.Language.dir || 'ltr'
      document.title = t('title')
  },[userInfo])
  return (
      <main>

        {/* slideBar */}
        <SlideBar userInfo={userInfo}/>

        {/* Feed */}
        <Routes>
          <Route path='/:span' element={<Feed userInfo={userInfo}/>}/>
          <Route path='/tweets/id' element={<TweetDisc/>}/>
        </Routes>

        {/* Widgets */}
        <Widgets/>

      </main>
  )
}

export default Home