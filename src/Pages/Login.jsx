import { Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "../Style/SignUp.css";
import "../Style/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(value);

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        console.log(res);
        alert("Login Successfull");
        // navigate("/signup");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
    setValue("");
  };

  const googleLogin = () => {
    const GoogleAuth = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleAuth);
  };
  return (
    <>
      <div className="main_container">
        <div className="Container">
          <div className="Image_wrapper">
            <img src={require("../assests/Images/Netmeds.png")} alt="" />
          </div>
          <div className="Content_wrapper">
            <div>
              <h2>Sign In/ Sign Up</h2>
              <p>
                Sign up or Sign in to access your orders, special offers, health
                tips and more!
              </p>
            </div>

            <div className="Input_wrapper" style={{ textAlign: "left" }}>
              <label
                style={{
                  color: "#24aeb1",
                  fontSize: "12px",
                  fontWeight: "900",
                }}
              >
                Email
              </label>
              <Input
                placeholder="Enter your email"
                required
                types="email"
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <label
                style={{
                  color: "#24aeb1",
                  fontSize: "12px",
                  fontWeight: "900",
                }}
              >
                Password
              </label>
              <Input
                placeholder="Enter your password"
                required
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
              />
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#24aeb1",
                  width: "100%",
                  marginTop: "20px",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>

              <Link to="/signup">
                {" "}
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#24aeb1",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  Create account
                </Button>
              </Link>
            </div>

            <div className="Social_wrapper">
              <Button onClick={googleLogin}>
                {" "}
                <img
                  style={{ margin: "5px", width: "20px" }}
                  src={require("../assests/Images/google.png")}
                  alt=""
                />{" "}
                GOOGLE
              </Button>
              <Button>
                {" "}
                <img
                  style={{ margin: "5px", width: "20px" }}
                  src={require("../assests/Images/facebook-logo-2019.png")}
                  alt=""
                />{" "}
                FACEBOOK
              </Button>
            </div>
          </div>
        </div>
        <div className="Foot" style={{ textAlign: "center" }}>
          <p>
            By continuing you agree to our{" "}
            <span style={{ color: "red" }}>
              {" "}
              Terms of service and Privacy & Legal Policy.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
