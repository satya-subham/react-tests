import React, { useState, useEffect } from "react";
import axios from "axios";

export function Component() {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => {
        setPosts([posts, ...response.data])
        setFilteredData([filteredData, ...response.data]);
      })
      .catch((err) => alert("Error"));
  }, []);

  useEffect(() => {
    const newData = posts.filter((data) => {
      if (data.name) {
        data.name = data.name.toUpperCase();
        return data.name.includes(search);
      }
    });
    setFilteredData(newData);
  }, [search]);

  return (
    <>
      <h1>Filter Comments</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {filteredData.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        <p>{data.body}</p>
        </div>
      ))}
    </>
  );
}
