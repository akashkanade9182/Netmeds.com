import { Box, Button, Image, Text } from "@chakra-ui/react"
import SearchBar from "./SearchBar"

const Navbar = () => {


    return (
        <Box>
            <Box style={{ backgroundColor: "#32aeb1", }} >
                <Box style={{ display: "flex", alignItems: "center", width: "80%", margin: "auto", justifyContent: "space-between", padding: "16px 0px 16px" }}>
                    <Image boxSize='35px' style={{ backgroundColor: "#32aeb1", height: "60px", width: "168px" }} src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="Netmeds" />
                    <SearchBar />
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px" }}>
                        <Image boxSize='35px' src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="upload" />
                        <Text style={{color:"white"}}>Upload</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px" }}>
                        <Image boxSize='35px' src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" alt="cart" />
                        <Text style={{color:"white"}}>Cart</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px" }}>
                        <Image boxSize='35px' src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="sign in" />
                        <Text style={{color:"white"}}>Sign in / Sign up</Text>
                    </Button>
                </Box>
                <Box style={{ display: "flex", alignItems: "center", width: "70%", margin: "auto", justifyContent: "space-between", padding: "0px 0px 16px" }}>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px",gap:"10px"}}>
                        <Image boxSize='55px' src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/medicine.svg" alt="Medicine" />
                        <Text >Medicine</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px" ,gap:"10px"}}>
                        <Image boxSize='55px' src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="Wellness" />
                        <Text >Wellness</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px",gap:"10px" }}>
                        <Image boxSize='55px' src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="Lab Tests" />
                        <Text >Lab Tests</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px",gap:"10px" }}>
                        <Image boxSize='55px' src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt="Beauty" />
                        <Text >Beauty</Text>
                    </Button>
                    <Button style={{ backgroundColor: "transparent", border: "none", display: "flex", alignItems: "center", fontSize: "14px",gap:"10px" }}>
                        <Image boxSize='55px' src="https://www.netmeds.com/assets/gloryweb/images/icons/health-library.svg" alt="Health Corner" />
                        <Text >Health Corner</Text>
                    </Button>
                </Box>
            </Box>
            <Box style={{ display: "flex", alignItems: "center", width: "70%", margin: "auto", justifyContent: "space-between", padding: "0px 0px 16px", fontSize:"16px",marginTop:"10px"}}>
                <Button style={{border:"none",backgroundColor:"transparent"}}>COVID Essentials</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Diabetes</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>EyeWear</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Ayush</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Ayurvedic</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Homeopathy</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Fitness</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Mom & Baby</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Devices</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Surgicals</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Sexual Wellness</Button>
                <Button style={{border:"none",backgroundColor:"transparent"}}>Treatment</Button>
            </Box>
        </Box>
    )
}

export default Navbar