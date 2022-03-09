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
function SignUpWithGoogleContainer(user) 
{
    console.log(user)
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
            const username=user.username;
            const userEmail=user.userEmail;
            const userPhoto=user.userPhoto;
            i18next.changeLanguage(Language.Lang);
            const docRef = await addDoc(collection(db, "users"),{username,userPhoto,userEmail,dateBirth,Language,createdAccountAt:serverTimestamp()});
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