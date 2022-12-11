import React, { useEffect, useState } from "react";
import Navbar from "../../Admi/adminNavbar/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/getAllUsers")
      .then((res) => setUser(res.data))
      .catch((err) => alert("an error occured"));
  }, []);
  const deleteUser = (name) => {
    axios
      .delete(`http://localhost:5000/user/deleteUser/${name}`)
      .then((res) => {
        axios
          .get("http://localhost:5000/user/getAllUsers")
          .then((res) => setUser(res.data))
          .catch((err) => alert("an error occured"));
      });
  };
  return (
    <div>
      <Navbar />
      <div className="row p-4 m-4 ">
        {user.map((e, i) => (
          <div
            className="row p-4 m-4 "
            style={{
              border: " 2px solid rgba(9,9,9,0.27)",
              borderRadius: "0px 27px 28px 0px",
              height: "130px",
            }}
          >
            <div className="col-sm-3 ">
              <img
                className="rounded-circle"
                style={{ height: "70%", width: "30%" }}
                z
                src={e.Uimage}
                alt="user"
              />
            </div>
            <div className="col-sm-4">
              <h5>{e.Uname}</h5>
            </div>
            <div className="col-sm-4">
              <h5>{e.Uemail}</h5>
            </div>
            <div className="col-sm-1">
              <FontAwesomeIcon
                onClick={() => deleteUser(e.Uname)}
                className="text-danger"
                icon="fa-thick fa-user-xmark"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default users;
