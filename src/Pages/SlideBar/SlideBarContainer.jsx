import {useState} from 'react'
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase';
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getIdAction } from '../../store/Slices/getUserIdSlice';

function SlideBarContainer() {
    const {t} = useTranslation();
    const dispatch=useDispatch()
    const [signOutContainer,setSignOutContainer]=useState(false)
    const [pageClick,setPageClick]=useState("Home")
    const Navigate = useNavigate()
    
    // for signOut
    const handleSignOut=async()=>
    {
        signOut(auth).then(() => 
        {
            dispatch(getIdAction(""))
            Navigate('/')
        }).catch((error) => {
          // An error happened.
        });
    }

    return {pageClick,setPageClick,t,handleSignOut,setSignOutContainer,signOutContainer}
}

export default SlideBarContainer