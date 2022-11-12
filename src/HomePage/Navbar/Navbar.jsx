import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("Sign in / Sign up");
      }
    });
  }, []);

  const handleLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/account");
      }
      if (!user) {
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <div style={{ backgroundColor: "#32aeb1" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            margin: "auto",
            justifyContent: "space-between",
            padding: "16px 0px 16px",
          }}
        >
          <Link to="/">
            {" "}
            <img
              style={{
                backgroundColor: "#32aeb1",
                height: "60px",
                width: "168px",
              }}
              src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
              alt="Netmeds"
            />{" "}
          </Link>
          <SearchBar />
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
              alt="upload"
            />
            <b style={{ color: "white" }}>Upload</b>
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg"
              alt="cart"
            />
            <b style={{ color: "white" }}>Cart</b>
          </button>
          <Link to="/login">
            {" "}
            <button
              onClick={() => handleLogin()}
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg"
                alt="sign in"
              />
              <b style={{ color: "white" }}>
                {" "}
                 {username} 
              </b>
            </button>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            justifyContent: "space-between",
            padding: "0px 0px 16px",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/medicine.svg"
              alt="Medicine"
            />
            <b>Medicine</b>
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
              alt="Wellness"
            />
            <b>Wellness</b>
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
              alt="Lab Tests"
            />
            <b>Lab Tests</b>
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
              alt="Beauty"
            />
            <b>Beauty</b>
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/health-library.svg"
              alt="Health Corner"
            />
            <b>Health Corner</b>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "70%",
          margin: "auto",
          justifyContent: "space-between",
          padding: "0px 0px 16px",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          COVID Essentials
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Diabetes
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          EyeWear
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Ayush
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Ayurvedic
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Homeopathy
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Fitness
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Mom & Baby
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Devices
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Surgicals
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Sexual Wellness
        </button>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Treatment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
