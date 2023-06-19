import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./Post.css";
import instance from "../../../utils/axiosInstance";

const APosts = () => {
  const [posts, setPosts] = useState([]);

  function getData() {
    instance
      .get("/admin/posts")
      .then((res) => setPosts(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

  function deleteById(id) {
    instance
      .delete(`/admin/posts/delete/${id}`)
      .then((res) => getData());
  }

  return (
    <div>

      <table className="big-table">
        <thead>
          <th className="align-start">Post</th>
          <th className="align-start">Post Name</th>
          <th className="align-start">Author</th>
          <th className="align-start">Actions</th>
        </thead>
        {posts &&
          posts.map((el) => {
            return (
              <tbody>
                <tr>
                  <td className="align-start"><img src={el.cover_image} alt={el.cover_image} /></td>
                  <td className="align-start">{el.title}</td>
                  <td className="align-start">{el.author}</td>
                  <td className="align-start"><button onClick={() => { deleteById(el._id) }} className="button">Delete</button></td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default APosts;
