import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();
    setName("");
    setLName("");
    setPhone("");
    setEmail("");
    setPassword("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, { displayName: `${name} ${lname}` });

        toast({
          title: "Account created.",
          description: `We've created your account for you.`,
          position: "top",
          status: "success",
          duration: 9000,
        });
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Navbar />
      <img
        className="BackImage"
        src={require("../assests/Images/Netmeds.jpeg")}
        alt=""
      />
      <div className="Form_box">
        <form onSubmit={submitUser}>
          <h3 style={{ fontSize: "20px", fontWeight: "bolder" }}>Sign Up</h3>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lname}
              placeholder="Enter last name"
              onChange={(e) => setLName(e.target.value)}
              required
            />
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              value={phone}
              placeholder="Enter your number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Button type="submit">Create account</Button>
              </div>
              <div>
                {" "}
                <Link to="/login">
                  {" "}
                  <Button style={{ backgroundColor: "red" }}>Go Back</Button>
                </Link>
              </div>
            </div>
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default SignUp;
