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
import Navbar from "../HomePage/Navbar/Navbar";
import Footer from "../HomePage/Navbar/Footer";

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const LoginUser = () => {
    const statuses = ["error"];
    if (email === "" || password === "") {
      toast({
        position: "top",
        title: `${"please fill all fields"}`,
        status: statuses,
      });
    } else {
      setEmail("");
      setPassword("");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast({
            title: "Login Sucessful.",
            description: `Welcome back ${userCredential.user.displayName}`,
            position: "top",
            status: "success",
            duration: 4000,
           
          });
          navigate("/");
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast({
            title: `${errorMessage}`,

            position: "top",
            status: "error",
            duration: 3000,
            isClosable: false,
          });
          // console.log(errorCode);

          console.log(errorMessage);
        });
    }
  };

  const GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        toast({
          title: "Login Sucessful.",
          description: `Welcome back ${user.displayName}`,
          position: "top",
          status: "success",
          duration: 9000,
          
        });
        navigate("/");
        console.log(user.email);
        console.log(user.displayName);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
    <Navbar/>
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
      <Footer />
    </>
  );
};

export default Login;
