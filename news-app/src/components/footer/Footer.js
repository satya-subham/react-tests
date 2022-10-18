import React, { useState } from 'react'
import './Footer.css'

export function Footer() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const getTime = () =>{
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time)
    }
    setInterval(getTime,1000)
  return (
    <>
    <footer>
        <div className='footer_container'>
         <div><h1>copyrights@authorised</h1></div>
         <div><h1>{currentTime}</h1></div>
         <div className='footer_btns'>
            <button><i class="fa-brands fa-facebook"></i></button>
            <button><i class="fa-brands fa-instagram"></i></button>
            <button><i class="fa-brands fa-twitter"></i></button>
            <button><i class="fa-brands fa-whatsapp"></i></button>
         </div>
        </div>
    </footer>
    </>
  )
}
