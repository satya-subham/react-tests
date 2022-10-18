import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export function Nav(props) {
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
                <Link to='/headlines' target='_blank'><button>Headlines</button></Link>
                <Link to='/about' target='_blank'><button>About</button></Link>
                <Link to='/contact' target='_blank'><button>Contact Us</button></Link>
            </div>
        </div>
    </nav>
    </>
  )
}
