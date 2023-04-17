import React, { useEffect, useState } from 'react'
import './backToTop.css'
export default function BackToTop() {
    let [top, setTop] = useState(false)

    useEffect(() => {
        let handleBackTop = () => {
            if (window.scrollY > 700) {
                setTop(true)
            } else {
                setTop(false)
            }
        }
        window.addEventListener('scroll', handleBackTop)
        return ()=>{
            window.removeEventListener('scroll', handleBackTop)
        }
    }, [])
    function handleGoTop(){
        window.scrollTo(0,0)
    }
    return (
        <div className={`goToTop ${top ? 'd-block' : 'd-none'}`}
            onClick={()=>{handleGoTop()}}
        >
            <p><i className="fa-solid fa-arrow-up"></i></p>
        </div>
    )
}
