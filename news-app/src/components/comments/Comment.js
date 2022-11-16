import React, { useState } from "react";
import './Comment.css'

export function Comment() {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const addComments = (e) => {
    setAllComments([...allComments, comment]);
    setComment("");

  };
  return (
    <>
    <input
        type="text"
        value={comment}
        placeholder="comment here..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={(e) => addComments(e)}>
        <i className="fa-solid fa-plus"></i>
      </button>
      <h2>Comments</h2>

      {allComments.map((ele, ind) => {
        return (
          <div className="comments_div" key={ind}>
            <p>{ele}</p>
          </div>
        );
      })}

      
    </>
  );
}
