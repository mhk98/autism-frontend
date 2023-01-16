import axios from "axios";
import React from "react";
import Questions from "./Questions";

const Post = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // let body = {
    //   name: event.target.name.value,
    //   description: event.target.description.value,
    // };

    // Send a POST request to the API
    axios
      .post("http://localhost:5000/post", {
        name: event.target.name.value,
        description: event.target.description.value,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // fetch("http://localhost:5000/post", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data) {
    //       console.log(data);
    //       event.target.reset();
    //     }
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-64 h-8 border border-slate-400 p-2"
          placeholder="Your name"
          name="name"
          id=""
        />
        <br></br>
        <textarea
          className="w-64 h-24 border my-4 border-slate-400 p-2"
          placeholder="Say something"
          name="description"
        ></textarea>
        <br></br>
        <input
          className="btn bg-blue-500 border-none hover:bg-blue-500"
          type="submit"
          value="Post"
        />
      </form>
      <Questions></Questions>
    </div>
  );
};

export default Post;
