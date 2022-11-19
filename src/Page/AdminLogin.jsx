import { Input, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import "../Style/Login.css";

const AdminLogin = () => {
    const navigate = useNavigate()
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const provider = new GoogleAuthProvider();

  const LoginUser = () => {
    const statuses = ["error"];
    if (email === "" || password === "") {
      toast({
        title: `${"please fill all fields"}`,
        status: statuses,
        isClosable: true,
      });
    } else {
      setEmail("");
      setPassword("");
          toast({
            title: "Login Sucessful.",
            description: `Admin Login Sucessful `,
            status: "success",
            duration: 9000,
            isClosable: true,
          });

navigate('/upload')
          
    }
  };

  const GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast({
          title: "Login Sucessful.",
          description: `Welcome back ${user.displayName}`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        console.log(user.email);
        console.log(user.displayName);
      
      })
      .catch((error) => {
       
      });
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
              <h2>Admin Login</h2>
              <p>
               Login in to access and update the data and more!
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                types="email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                type="password"
              />

              <Button
                onClick={() => LoginUser()}
                style={{
                  color: "white",
                  backgroundColor: "#24aeb1",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                Login
              </Button>

            
              
            </div>

            <div className="Social_wrapper">
              <Button onClick={() => GoogleLogin()}>
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

export default AdminLogin;
