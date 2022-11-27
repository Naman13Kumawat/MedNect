import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/Asset2.png";

export default function Login() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", formdata);
      // console.log(res.data.token);
      if (res.status === 200) {
        localStorage.setItem("doctalk", res.data.token);
        if (res.data.patient) {
          navigate("/patient");
        } else {
          navigate("/doctor");
        }
        toast.success("Logged in successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // toast.error('Invalid Credentials', {
        // 	position: 'top-center',
        // 	autoClose: 3000,
        // 	hideProgressBar: false,
        // 	closeOnClick: true,
        // 	pauseOnHover: true,
        // 	draggable: true,
        // 	progress: undefined
        // });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f3e9d2",
        marginTop: "-3rem",
        padding: "5rem 0",
        paddingBottom: "12rem",
      }}
    >
      <ToastContainer />
      <div className="containerLogin">
        <div className="info">
          <h1>Login</h1>
        </div>
      </div>
      <div
        className="form"
        style={{ background: "rgba(0, 56, 101,1)", marginLeft: "5rem" }}
      >
        {/* <div className="thumbnail">
          <img src={loginImage} alt="patient" />
        </div> */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setFormdata({ ...formdata, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
          <p className="message">
            Not registered?
            <Link to="/signup"> Create an account</Link>
          </p>
        </form>
      </div>
      <img src={loginImage} className="lthumbnail" alt="doc" />
    </div>
  );
}
