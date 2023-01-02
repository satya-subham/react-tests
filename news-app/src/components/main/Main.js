import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import axios from "axios";
import './Main.css'
import { Footer } from '../footer/Footer';
import { Comment } from "../comments/Comment";

export function Main(props) {

  const [details, setDetails] = useState([]);
  const [filteredDetails, SetFilteredDetails] = useState([]);
  const [toggleLike, setToggleLike] = useState(true)
  
  

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  },[])

  useEffect(() => {
    axios
      .get(
        // `https://newsapi.org/v2/everything?q=tesla&from=2022-12-16&sortBy=publishedAt&apiKey=35a826be500b4b3a992bc826a4a7deda`
        `https://newsapi-z4r7.onrender.com/news?q=everything`
        // `https://newsapi-z4r7.onrender.com/news?q=politics`
      )
      .then((response) => {
        setDetails([...response.data["articles"]]);
        SetFilteredDetails([...response.data["articles"]]);
      })
  }, []);

  useEffect(() => {
    let filterItem = details.filter((item) => {
      if (item.author != null) {
        return item.author.toLowerCase().includes(props.search.toLowerCase());
      }
    });
    SetFilteredDetails(filterItem);
  }, [props.search]);

  
  //===================================== Like functionality ===========================================

  const handleLike = (e) =>{
    filteredDetails.map((_, ind)=>{
     if(e.target.id == ind){
      const button = document.getElementById(ind);
      button.classList.toggle('fa-solid')
     }
    })
  }

  
// ========================================== DELETE ARTICLES FUNCTIONALITY=====================================
  const deleteNews = (id) =>{
    let updatedNews = filteredDetails.filter((ele, ind)=>{
      return ind != id;
    })
    SetFilteredDetails(updatedNews)
  }

  return (
    <>
    {
      loading ? <div className="loader_div">
        <ClimbingBoxLoader
      color={'#F37A24'}
      loading={loading}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
    :
    <>
    <main>
    <div className="main_container">
      <div className="news_info">
        <h1>update news</h1>
      </div>
      {
        filteredDetails.map((item, ind)=>(
            <div className="item_container"key={item.url}>
                <div className="news_img_div">
                    <img src={item.urlToImage} alt='news image' width='100%'/>
                </div>
                <h3>Author : {item.author}</h3>
                <h3>{item.title}</h3>
                <h3>"{item.content}"</h3>
                <h3>{item.description}</h3>
                
                <div className="like_cmnt_share_btns_div">
                  <div>
                  {/* {
                    toggleLike ? <button onClick={()=>handleLike(ind)}><i class="fa-regular fa-heart"></i></button> : <button onClick={handleDislike}><i class="fa-solid fa-heart"></i></button>
                  } */}
                  <i className="fa-regular fa-heart" onClick={(e)=>handleLike(e)} id={ind}></i>
                  <Comment/>
                  </div>
                  <div>
                  <button onClick={()=>deleteNews(ind)}>Remove article</button>
                  
                  </div>
                </div>
            </div>
        ))
      }
    </div>
  </main>
  <Footer/>
  </>
    }
  
    </>
  );
}
