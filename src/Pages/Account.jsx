import React, { useEffect, useState } from "react";
import "../Style/Account.css";
import { Button, Heading } from "@chakra-ui/react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        setEmail(user.email);
      } else {
        setUsername("");
        setEmail("");
      }
    });
  }, []);



  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log(username);
  return (
    <div className="container">
      <div>
        <Heading as="h3" size="lg">
          Your account
        </Heading>
      </div>
      <div className="bottom_box">
        <div className="Sidebar">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                style={{ margin: "10px", width: "60px" }}
                src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg"
                alt=""
              />
            </div>
            <div>
              <Heading size="lg">{username}</Heading>
              {email}
            </div>
          </div>

          <div>
            <h4>LIST BOX</h4>
          </div>
        </div>
        <div className="SideBox">
          <div
            style={{
              display: "flex",
              width: "80%",
              margin: "auto",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              justifyItems: "center",
              border: "2px solid lightblue",
              padding: "5px",
            }}
          >
            <div>
              {" "}
              <img
                style={{ display: "inline" }}
                src="https://www.netmeds.com/msassets/images/icons/payment_history.svg"
                alt=""
              />
              <h1>Payment Methods</h1>
            </div>
            <div>
              <img
                style={{ display: "inline" }}
                src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg
"
                alt=""
              />
              <h1>Medicines Orders</h1>
            </div>
            <div>
              <img
                style={{ display: "inline" }}
                src="	https://www.netmeds.com/msassets/images/icons/rewards.svg
"
                alt=""
              />
              <h1>My Rewards</h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10%",
              width: "80%",
              margin: "auto",
              border: "2px solid orange",
              marginTop: "5%",
              padding: "5px",
            }}
          >
            <div>
              <Heading margin="5px" color="gray" as="h6" size="md">
                LOGIN INFORMATION
              </Heading>
              <Heading margin="5px" color="#24aeb1" as="h6" size="sm">
                EMAIL
              </Heading>
              <Heading margin="5px" as="h6" size="xs">
                {email}
              </Heading>
              <Heading margin="5px" color="#24aeb1" as="h6" size="sm">
                MOBILE NUMBER
              </Heading>
              <Heading as="h6" size="xs">
                {"+91 9900111222"}
              </Heading>
            </div>
            <div>
              <Heading margin="5px" color="gray" as="h6" size="md">
                PERSONAL INFORMATION
              </Heading>
              <Heading margin="5px" color="#24aeb1" as="h6" size="sm">
                FULL NAME
              </Heading>
              <Heading margin="5px" as="h6" size="xs">
                {username}
              </Heading>
              <Heading margin="5px" color="#24aeb1" as="h6" size="sm">
                GENDER
              </Heading>
              <Heading margin="5px" as="h6" size="xs">
                {"NO-data"}
              </Heading>
            </div>

        
          </div>
          <Button
              style={{
                color: "white",
                backgroundColor: "#24aeb1",
                width: "max-content",
                display:"flex",
              
               alignItems:"center",
               justifyItems:"center",
               margin:"auto",
                
                marginTop:"5%"
              }}
              onClick={() => LogoutUser()}
            >
              Logout
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
