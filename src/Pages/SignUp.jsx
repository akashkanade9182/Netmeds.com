import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [submitDisable, setsubmitDisable] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(value);

    setsubmitDisable(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        console.log(res);
        setsubmitDisable(false);
        const user = res.user;
        await updateProfile(user, { displayName: value.name });
        console.log(user.displayName);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };
  return (
    <>
      <img
        className="BackImage"
        src={require("../assests/Images/Netmeds.jpeg")}
        alt=""
      />
      <div className="Form_box">
        <form onSubmit={handleForm}>
          <h3 style={{ fontSize: "20px", fontWeight: "bolder" }}>Sign Up</h3>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter first name"
              required
              onChange={(e) =>
                setValue((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter last name"
              required
              onChange={(e) =>
                setValue((prev) => ({ ...prev, lastname: e.target.value }))
              }
            />
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter your number"
              required
              onChange={(e) =>
                setValue((prev) => ({ ...prev, number: e.target.value }))
              }
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) =>
                setValue((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <div
              style={{
                display: "flex",
                margin: "5px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Button disabled={submitDisable} type="submit">
                  Create account
                </Button>
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
