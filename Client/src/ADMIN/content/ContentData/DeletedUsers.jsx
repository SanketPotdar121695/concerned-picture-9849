import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "./Users.css";

const DeletedUsers = () => {
  const [users, setusers] = useState([]);

  function getData() {
    axios
      .get("http://localhost:4300/admin/users")
      .then((res) => setusers(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

function deleteById(id){
  axios
  .delete(`http://localhost:4300/admin/users/remove/${id}`)
  .then((res) => getData());
}

  return (
    <div>
      <table className="big-table">
        <thead>
          <th className="align-start">User Name</th>
          <th className="align-start">Email Id</th>
          <th className="align-start">Author</th>
        </thead>
        {users &&
          users.map((el) => {
            return (
              <tbody>
                <tr>
                   <td className="align-start">{el.first_name}</td>
                   <td className="align-start">{el.email}</td>
                   <td className="align-start">{el.city}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default DeletedUsers;
