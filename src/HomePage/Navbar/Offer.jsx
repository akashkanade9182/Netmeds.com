import { Box, Image, Text } from "@chakra-ui/react"


const Offer = ()=>{



    return (
        <Box style={{width:"90%",margin:"auto",display:"flex"}}>
            <Box style={{padding:"12px 16px",width:"100%"}}>
                <Box  style={{display:"flex"}} >
                <Box display="flex" backgroundColor="#ffffff" gap="20px" borderRadius="8px" boxShadow="#0b1219 0px 6px 12px -4px" color="#151b39" lineHeight="30px" margin="0px 24px 0px 0px" padding="12px 16px" textAlign="left" width="33%"  >
                        <Image  src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" alt="" />
                        <Box style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                            <Text fontSize='2xl'>Order Medicine</Text>
                            <Text style={{color:"#5ba41c"}}>Save Upto 25% off</Text>
                        </Box>
                    </Box>
                    <Box display="flex" backgroundColor="#ffffff" gap="20px" borderRadius="8px" boxShadow="#0b1219 0px 6px 12px -4px" color="#151b39" lineHeight="30px" margin="0px 24px 0px 0px" padding="12px 16px" textAlign="left" width="33%"  >
                        <Image src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" alt="" />
                        <Box style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                            <Text fontSize='2xl'>Beauty</Text>
                            <Text style={{color:"#5ba41c"}}>Save Upto 40% off</Text>
                        </Box>
                    </Box>
                    <Box display="flex" backgroundColor="#ffffff" gap="20px" borderRadius="8px" boxShadow="#0b1219 0px 6px 12px -4px" color="#151b39" lineHeight="30px" margin="0px 24px 0px 0px" padding="12px 16px" textAlign="left" width="33%"  >
                        <Image  src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" alt="" />
                        <Box display="flex"flexDirection="column" justifyContent="center">
                            <Text fontSize='2xl'>Wellness</Text>
                            <Text style={{color:"#5ba41c"}}>Save Upto 80% off</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Offer