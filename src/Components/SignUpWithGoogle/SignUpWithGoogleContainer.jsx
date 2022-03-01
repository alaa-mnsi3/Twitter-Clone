import {useState} from 'react';

// for firebase
import {db} from "../../Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

// for transfer to home or complete sign Up
import {useNavigate} from "react-router-dom";

// for translation
import i18next from 'i18next';

// for save id in local storage
import { getIdAction } from '../../store/Slices/getUserIdSlice';
import {useDispatch} from 'react-redux'

// for complete SignUpWithGoogle that specify language and birthday
function SignUpWithGoogleContainer({user}) 
{
    const [dateBirth,setDateBirth] = useState('')
    const [Language,setLanguage] = useState('')
    const Navigate=useNavigate()
    const dispatch=useDispatch()

    // function for the form
    const handleSubmitSignUp=async(e)=>
    {
        e.preventDefault()
        try 
        {
            const docRef = await addDoc(collection(db, "users"), {...user,dateBirth,Language,createdAccountAt:serverTimestamp()});
            i18next.changeLanguage(Language.Lang)
            const id= docRef.id;
            dispatch(getIdAction(id));
        }
         catch (err) 
        {
            console.error("Error adding document: ", err.message);
        }
        Navigate('/Home');
    }

    return {setDateBirth,setLanguage,handleSubmitSignUp,dateBirth}
}

export default SignUpWithGoogleContainer