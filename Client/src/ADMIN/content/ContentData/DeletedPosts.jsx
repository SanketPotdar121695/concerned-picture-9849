import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./Post.css";

const DeletedPosts = () => {
  const [posts, setPosts] = useState([]);

  function getData() {
    axios
      .get("http://localhost:4300/admin/deletedPosts")
      .then((res) => setPosts(res.data));
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(posts);


  
  return (
    <div>
      <table className="big-table">
        <thead>
          <th className="align-start">Post</th>
          <th className="align-start">Post Name</th>
          <th className="align-start">Author</th>
        </thead>
        {posts &&
          posts.map((el) => {
            return (
              <tbody>
                <tr>
                   <td className="align-start"><img src={el.cover_image} alt={el.cover_image} /></td>
                   <td className="align-start">{el.title}</td>
                   <td className="align-start">{el.author}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default DeletedPosts;
