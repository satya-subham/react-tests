import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export function Nav(props) {
    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () =>{
        if(darkMode){
        setDarkMode(false)
        const element = document.body;
        element.classList.toggle("dark-mode");
    }
    }
    const handleLightMode = () =>{
        setDarkMode(true)
        const element = document.body;
        element.classList.toggle("dark-mode");
    }
  return (
    <>
    <nav>
        <div className='nav_container'>
            <div className='nav_heading'>
                <h1>news app</h1>
            </div>
            <div className='nav_input_div'>
                <input type='text' id='nav_input' onChange={(e)=>props.setSearch(e.target.value)} placeholder='search news'/>
            </div>
            <div className='btns_div'>
                <Link to='/headlines'><button>Headlines</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/contact'><button>Contact Us</button></Link>
            </div>
            {
                    darkMode ? <i class="fa-regular fa-moon" onClick={handleDarkMode}></i> : <i class="fa-solid fa-moon" onClick={handleLightMode}></i>
                }
        </div>
    </nav>
    </>
  )
}
