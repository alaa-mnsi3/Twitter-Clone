import React from 'react'
import dataIconSlideBar from './Constants'
import {Link} from 'react-router-dom';
// for logic this component
import SlideBarContainer from './SlideBarContainer';

// Icon and text for all pages in website
function SlideIconText() 
{
    const {pageClick,setPageClick,t} = SlideBarContainer()

    return (
        <>
            {dataIconSlideBar.map(data=> (
                <Link to={`/${data.span}`} key={data.span} className='slideBarIconsContainer' onClick={()=>setPageClick(data.span)}>
                    {pageClick === data.span?
                        <svg  viewBox="0 0 24 24" aria-hidden="true" className='iconSlideBar'>
                            <g>
                                {data.span === 'More' && 
                                    <>
                                        <circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle>
                                    </>
                                }
                                <path d={data.pathActive}></path>
                            </g>
                        </svg>
                        : 
                        <svg viewBox="0 0 24 24" aria-hidden="true" className='iconSlideBar'>
                            <g>
                                {data.span === 'More' && 
                                    <>
                                        <circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle>
                                    </>
                                }
                                <path d={data.path1}></path><path d={data.path2}></path>
                            </g>
                        </svg>
                    }

                    {/* text for pages */}
                    <span className={`iconSliderSpan ${pageClick === data.span && 'active'}`}>{t(data.span)}</span>           
                </Link>
            ))}
        </>
    )
}

export default SlideIconText