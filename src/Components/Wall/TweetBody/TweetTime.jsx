import React from 'react'
import { useTranslation } from 'react-i18next'

// time for Tweet
function TweetTime({time}) 
{
    const Months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    // Day
    const Day=new Date(time).getDate()
    // Month
    const Month=Months[new Date(time).getMonth()]
    // Hour
    const Hour=new Date(time).getHours()
    // Minute
    const Minute = new Date(time).getMinutes()
    const {t} = useTranslation();

    return (
        <span className="wall__Info__Tweet__time">
            {
                new Date().getDate() !== Day?
                <>
                    {
                    `. ${Month} ${Day}`
                    }
                </>
                :
                <>
                    {
                        Math.abs((- new Date().getHours()) + Hour) !== 0?
                        <>
                            {
                            `. ${Math.abs((- new Date().getHours()) + Hour)}${t('hour')}`
                            }
                        </>
                        :
                        <>
                            {
                                Math.abs((- new Date().getMinutes()) + Minute) !== 0?
                            <>
                            {
                                `. ${Math.abs((new Date().getMinutes()) - Minute)}${t('minute')}`
                            }
                            </>
                            :
                            <>
                                <span>{t("Just Now")}</span>
                            </>
                            }
                        </>
                    }
                </>
            }
        </span>
    )
}

export default TweetTime