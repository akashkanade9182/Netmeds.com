import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { products } from "../utils/products";
import SearchBar from "./SearchBar";

const Navbar = () => {
  // Do Not Change code Below
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const shift=useNavigate();

  const querhandler = useCallback((val)=>{
    setQuery(val)
  },[])

useEffect(()=>{
  if(query===""){
    setSuggestions([])
  }else{
    let newSuggestion = products.filter((item) =>{
      return item.title.toLowerCase().indexOf(query) !== -1 ? true : false
    })
    .map((item)=> item.title)
    // console.log(newSuggestion)
    setSuggestions(newSuggestion)
  }
},[query])
const handleNavigatetoCart=()=>{
  shift("/cart");
}



  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("Sign In/ Sign Up");
      }
    });
  }, []);

  const handleLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/account");
      } else {
        navigate("/login");
      }
    });
  };


  const handleNavigatewellness=()=>{
    shift("/categorypage")
  }

  const handleNavigateBeauty=()=>{
    shift("/beauty")
  }
  const handleNavigateLabtest=()=>{
    shift("./labtest")
  }
  const handleNavigateUpload=()=>{
    shift("./adminlogin")
  }



  return (
    <Box>
      <Box style={{ backgroundColor: "#32aeb1" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            margin: "auto",
            justifyContent: "space-between",
            padding: "16px 0px 16px",
          }}
        >
        
            
        <Link to="/" >  <Image
              style={{
                backgroundColor: "#32aeb1",
                height: "60px",
                width: "168px",
              }}
              src={require("../../assests/Images/logo.png")}
              alt="Netmeds"
            /></Link> 
         
          <SearchBar querhandler={querhandler} suggestions={suggestions} />
        <Button
        onClick={handleNavigateUpload}
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
              alt="upload"
            />
            <Text style={{ color: "white" }}>Upload</Text>
          </Button>
          <Button
          onClick={handleNavigatetoCart}
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg"
              alt="cart"
            />
            <Text style={{ color: "white" }}>Cart</Text>
          </Button>

         
            
            <Button
              onClick={() => handleLogin()}
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <Image
                src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg"
                alt="sign in"
              />
              <Text style={{ color: "white" }}>{username}</Text>
            </Button>
          
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            justifyContent: "space-between",
            padding: "0px 0px 16px",
          }}
        >
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/medicine.svg"
              alt="Medicine"
            />
            <Text>Medicine</Text>
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
            onClick={handleNavigatewellness}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
              alt="Wellness"
            />
            <Text>Wellness</Text>
          </Button>
          <Button
          onClickCapture={handleNavigateLabtest}
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
              alt="Lab Tests"
            />
            <Text>Lab Tests</Text>
          </Button>
          <Button
          onClick={handleNavigateBeauty}
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
              alt="Beauty"
            />
            <Text>Beauty</Text>
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: "4px",
            }}
          >
            <Image
              src="https://www.netmeds.com/assets/gloryweb/images/icons/health-library.svg"
              alt="Health Corner"
            />
            <Text>Health Corner</Text>
          </Button>
        </Box>
      </Box>
      <Box
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
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          COVID Essentials
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Diabetes
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          EyeWear
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Ayush
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Ayurvedic
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Homeopathy
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Fitness
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Mom & Baby
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Devices
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Surgicals
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Sexual Wellness
        </Button>
        <Button style={{ border: "none", backgroundColor: "transparent" }}>
          Treatment
        </Button>
      </Box>
    </Box>
  );

};

export default Navbar;
