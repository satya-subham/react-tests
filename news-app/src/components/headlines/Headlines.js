import React, { useState, useEffect } from 'react'
import axios from 'axios';

export function Headlines() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(()=>{
     axios
     .get(`https://newsapi.org/v2/everything?q=apple&from=2022-10-15&to=2022-10-15&sortBy=popularity&apiKey=35a826be500b4b3a992bc826a4a7deda`)
     .then((response)=>{
        console.log(response.data['articles']);
        setHeadlines([...response.data['articles']])
     })
    },[])
  return (
    <>
    <div className='headline_heading_div'>
        <h1>Headlines</h1>
    </div>
    <div className='headlines_main_container'>
        {
            headlines.map((elem, ind)=>(
                <div className='headline_container'>
                    <h2>{elem.title}</h2>
                    <img src={elem.urlToImage} width='50%'/>
                </div>
            ))
        }
    </div>
    </>
  )
}
