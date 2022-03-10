import {useState} from 'react'
import { signInWithPopup } from "firebase/auth";
import {Googleprovider,auth,db} from "../../Firebase"
import {useNavigate} from "react-router-dom"
import { collection,getDocs } from "firebase/firestore"; 
import i18next from 'i18next';
import { getIdAction } from '../../store/Slices/getUserIdSlice';
import {useDispatch} from 'react-redux'
import {useTranslation} from 'react-i18next'

function InterfaceContainer() 
{
    const [user,setUser]=useState(null)
    const [completeSignUp,setCompleteSignUp]=useState(false)
    const Navigate=useNavigate()
    const dispatch=useDispatch();
    const {i18n} = useTranslation()

    // Sign Up with Google
    const handleAuthGoogle=()=>
    {
         signInWithPopup (auth, Googleprovider)
         .then(async(result) => 
         {
            const user =result?.user;
            console.log(user)

            const username=user?.displayName
            const userPhoto=user?.photoURL
            const userEmail=user?.email

            setUser({username,userPhoto,userEmail})
            const querySnapshot =await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => 
            {
                if(doc.data().userEmail===userEmail)
                {
                    const id=doc.id
                    dispatch(getIdAction(id))
                    i18n.changeLanguage(doc.data().Language.Lang)
                    Navigate('/Home')
                }
            });

            setCompleteSignUp(true)
         }).catch((error) => {
             const errorMessage = error.message;
             console.log(errorMessage)
         });
    }

    return {handleAuthGoogle,completeSignUp,user}
}

export default InterfaceContainer