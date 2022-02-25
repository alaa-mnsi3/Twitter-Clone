import React, { useState } from 'react'
import IconBrand from '../../IconBrandTwitter/IconBrand'
import { useTranslation } from "react-i18next";
import dataIconSlideBar from '../../../Constants'
import './styles.css'
import { signOut } from "firebase/auth";
import { auth } from '../../../Firebase';
import {Link, useNavigate, useParams} from 'react-router-dom'

function SlideBar({userInfo}) 
{
    const {t} = useTranslation();
    const [signOutContainer,setSignOutContainer]=useState(false)
    const Navigate = useNavigate()
    const params=useParams().span
    
    const handleSignOut=async()=>
    {
        signOut(auth).then(() => 
        {
            Navigate('/')
        }).catch((error) => {
          // An error happened.
        });
    }
    return (
        <section className='slideBarSection'>
            <div className='slideBarIconsWrapper'>
                <IconBrand CLASS='iconSlide'/>
                {dataIconSlideBar.map(data=> (
                    <Link to={`/${data.span}`} key={data.span} className='slideBarIconsContainer'>
                        {params === data.span?
                            <svg  viewBox="0 0 24 24" aria-hidden="true" className='iconSlideBar'>
                                <g>
                                    {data.span === 'More' && 
                                        <>
                                            <circle cx="17" cy="12" r="1.5"></circle>
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="7" cy="12" r="1.5"></circle>
                                        </>
                                    }
                                    <path d={data.pathActive}>
                                    </path>
                                </g>
                            </svg>
                            : 
                            <svg viewBox="0 0 24 24" aria-hidden="true" className='iconSlideBar'>
                                <g>
                                    {data.span === 'More' && 
                                        <>
                                            <circle cx="17" cy="12" r="1.5"></circle>
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="7" cy="12" r="1.5"></circle>
                                        </>
                                    }
                                    <path d={data.path1}></path><path d={data.path2}>
                                    </path>
                                </g>
                            </svg>
                        }
                        <span className={`iconSliderSpan ${params === data.span && 'active'}`}>{t(data.span)}</span>           
                    </Link>
                ))}
                <button className='slideBarIconsBtn' title='slideBarIconsBtn'>{t('Tweet')}</button>
                <button className='slideBarIconsBtnMob' title='slideBarIconsBtnMob'><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg></button>
            </div>
            <div className='slideBarProfile' onClick={()=>setSignOutContainer(prev=> !prev)}>
                <img src={userInfo?.userPhoto} alt=''/>
                <h4>{userInfo?.username}</h4>
                <span></span>
                {
                    signOutContainer &&
                    <div className='signOutBtnContainer'>
                        <button onClick={()=>handleSignOut()}>Login Out</button>
                    </div>
                }
            </div>
            
   
        </section>
    )
}

export default SlideBar