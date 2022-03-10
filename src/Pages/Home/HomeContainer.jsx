import {useEffect,useState} from 'react'
import { collection,getDocs } from "firebase/firestore"; 
import {db} from "../../Firebase"
import './styles.css'
import { useTranslation } from "react-i18next";

function HomeContainer() 
{
    const localId=localStorage.getItem("persist:root")
    const id=JSON.parse(localId).userIdSlice.slice(1,-1)

    const [userInfo,setUserInfo]=useState(null)
    const {t} = useTranslation();

    // for save the inforamtion of user and convert website to the language that is chosen
    const getInfUser=async()=>
    {
      const querySnapshot =await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => 
      {
        if(doc.id === id)
        {
          setUserInfo(doc.data())
          document.body.dir = doc.data()?.Language?.dir
        }
      });

    }
    useEffect(()=>
    {
      getInfUser();
      document.title = t('title')

    },[userInfo,t])

    return {userInfo}
}

export default HomeContainer