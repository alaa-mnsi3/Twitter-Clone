import {useLayoutEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { collection,getDocs } from "firebase/firestore"; 
import {db} from "../../Firebase"
import './styles.css'
import { useTranslation } from "react-i18next";

function HomeContainer() 
{
    const id=useSelector(state => state.userIdSlice)
    const [userInfo,setUserInfo]=useState(null)
    const {t} = useTranslation();

    // for save the inforamtion of user and convert website to the language that is chosen
    const getInfUser=async()=>
    {
      const querySnapshot =await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => 
      {
        console.log(doc.id,id)
        if(doc.id === id)
        {
          setUserInfo(doc.data())
          document.body.dir = doc.data()?.Language?.dir
        }
      });

    }
    useLayoutEffect(()=>
    {
        getInfUser();
        document.title = t('title')

    },[t])

    return {userInfo}
}

export default HomeContainer