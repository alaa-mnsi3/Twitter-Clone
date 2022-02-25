import React, { useState} from 'react'
import styled from 'styled-components'
import {db} from "../../Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import './styles.css'
import {useNavigate} from "react-router-dom"
import i18next from 'i18next';
import { getIdAction } from '../../store/Slices/getUserIdSlice';
import {useDispatch} from 'react-redux'

function SignUpWithGoogle({user}) 
{
    const [dateBirth,setDateBirth] = useState('')
    const [Language,setLanguage] = useState('')
    const Navigate=useNavigate()
    const dispatch=useDispatch()

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


    return (
        <SignUpGoogleContainer>
            <SignUpGoogleWrapper>
                <BrandContainer>
                    <svg viewBox="0 0 24 24" className='Brand-Img'  aria-hidden="true" fill='#1d9bf0'>
                        <g>
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>`
                        </g>
                    </svg>
                </BrandContainer>

                <h1>Hello In Twitter</h1>
                <form onSubmit={(e)=>handleSubmitSignUp(e)}>
                    <div>
                        <h3>What is your Birthday?</h3>
                        <input type='date' required value={dateBirth} onChange={e=>setDateBirth(e.target.value)}/>
                    </div>
                    <div>
                        <h3>What is your favourite language?</h3>
                        <select onChange={e => setLanguage({Lang:e.target.value,dir:e.target.options[e.target.selectedIndex].dataset.dir})} required>
                            <option data-dir='rtl' value='ar'>اللغه العربيه</option>
                            <option data-dir='ltr' value='en'>English</option>
                        </select>
                    </div> 
                    <button type='submit' title=''>Next</button>
                </form> 
            </SignUpGoogleWrapper>      
        </SignUpGoogleContainer>
    )
}

const SignUpGoogleContainer=styled.section`
background-color:rgba(0,0,0,0.8);
position:absolute;
top:0;
left:0;
width:100vw;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
const SignUpGoogleWrapper=styled.div`
background-color:#fff;
min-width:35%;
min-height:80vh;
padding:2rem;
box-shadow:0px 0px 10px rgba(0,0,0, 0.2);
border-radius:4px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1
{
    font:bold 2rem/2rem sans-serif;
    margin-bottom:3rem;
}
h3
{
    font:600 1rem sans-serif;
    margin-bottom:1rem;
}
input,select
{
    font:normal 1rem sans-serif;
    border:1px solid rgba(0,0,0, 0.2);
    border-radius:4px;
    padding:.5rem 1rem;
    margin-bottom:2rem;
}
button
{
    font:normal 1rem sans-serif;
    border-radius:4px;
    background-color:#1d9bf0;
    color:#fff;
    padding:.5rem 2rem;
}
`

const BrandContainer=styled.div`
display:flex;
justify-content:center;
margin-bottom:1rem;
`

export default SignUpWithGoogle