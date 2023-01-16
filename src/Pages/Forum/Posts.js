import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Questions from "./Questions";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //Send a GET request to the API

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => {
        <div>
          <h2 className="text-xl">{post.name}</h2>;
        </div>;
      })}
    </div>
  );
};

export default Posts;
