import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchPosts } from "../API/api";

function FetchOld() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      // console.log(res);
      if (res.status === 200) {
        setPosts(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  return (
    <div>
      {
        <ul className="section-accordion">
          {posts.map((currElem) => {
            return (
              <li key={currElem.id}>
                <p>{currElem.title}</p>
                <p>{currElem.body}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default FetchOld;
