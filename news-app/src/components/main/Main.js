import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css'

export function Main(props) {
  const [details, setDetails] = useState([]);
  const [filteredDetails, SetFilteredDetails] = useState([]);
  const [toggleLike, setToggleLike] = useState(true)
  
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-10-15&to=2022-10-15&sortBy=popularity&apiKey=35a826be500b4b3a992bc826a4a7deda`
      )
      .then((response) => {
        setDetails([...response.data["articles"]]);
        SetFilteredDetails([...response.data["articles"]]);
      }).catch((err)=> alert('error'))
  }, []);

  useEffect(() => {
    let filterItem = details.filter((item) => {
      if (item.author != null) {
        return item.author.toLowerCase().includes(props.search.toLowerCase());
      }
    });
    SetFilteredDetails(filterItem);
  }, [props.search]);

  
  //===================================== Commnet, Like functionality

  const handleLike = () =>{
    if(toggleLike){
      setToggleLike(false)
    }
  }
  const handleDislike = () =>{
    setToggleLike(true)
  }

  const addComments = () =>{
    if(!comment){

    }else{
      setAllComments([...allComments, comment]);
      setComment('')
    }
  }

  const deleteNews = (id) =>{
    let updatedNews = filteredDetails.filter((ele, ind)=>{
      return ind != id;
    })
    SetFilteredDetails(updatedNews)
  }

  return (
    <>
      <main>
        <div className="main_container">
          <div className="news_info">
            <h1>update news</h1>
          </div>
          {
            filteredDetails.map((item, ind)=>(
                <div className="item_container">
                    <div className="news_img_div">
                        <img src={item.urlToImage} alt='news image' width='100%'/>
                    </div>
                    <h3>Author : {item.author}</h3>
                    <h3>{item.title}</h3>
                    <h3>"{item.content}"</h3>
                    <h3>{item.description}</h3>
                    <h2>Comments</h2>
                    {
                      allComments.map((ele, ind)=>(
                        <div className="comments_div">
                          <p>{ele}</p>
                        </div>
                      ))
                    }
                    <div className="like_cmnt_share_btns_div">
                      <div>
                      {
                        toggleLike ? <button onClick={()=>handleLike(ind)}><i class="fa-regular fa-heart"></i></button> : <button onClick={handleDislike}><i class="fa-solid fa-heart"></i></button>
                      }
                      <input type='text' value={comment} placeholder="comment here..." onChange={(e)=>setComment(e.target.value)}/>
                      <button onClick={()=>addComments(ind)}><i class="fa-solid fa-plus"></i></button>
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
    </>
  );
}
