import { Box, Button, Image, Text } from "@chakra-ui/react"


const PaymentPartners = () => {


    return (
        <Box>
            <Box style={{ width: "90%", margin: "auto" }}>
                <Text fontSize='3xl' style={{ textAlign: "left" }}>Payment Partners Offers</Text>
                <Box style={{ padding: "12px 16px" }}>
                    <Box style={{ display: "flex" }}>
                        <Box style={{ display: "flex", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "#0b1219 0px 6px 12px -4px", color: "#151b39", lineHeight: "19.5px", margin: "0px 24px 0px 0px", padding: "12px 16px", textAlign: "left",gap:"15px" }} >
                            <Image boxSize='60px' src="https://www.netmeds.com/images/cms/offers/1657030565_Simpl_Icon.png" alt="1657030565_Simpl_Icon" />
                            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight:"25px" }}>
                                <Text fontSize='s' >Get up uo Rs. 1000 Simpl cashback (5%)!..</Text>
                                <Text fontSize='s' >Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases of AN..</Text>
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "#0b1219 0px 6px 12px -4px", color: "#151b39", lineHeight: "19.5px", margin: "0px 24px 0px 0px", padding: "12px 16px", textAlign: "left", gap:"15px" }} >
                            <Image boxSize='60px'  src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png" alt="offers" />
                            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center",lineHeight:"25px" }}>
                                <Text fontSize='s' >Use Pay with Rewards, Get max. Rs 1000 Cashback!..</Text>
                                <Text fontSize='s' >Get Assured cashback of max Rs. 1000, when you pay using the "Pay with Rewards" payment option..</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ width: "90%", margin: "auto",display:"flex" }}>   
                    <Box style={{display:"flex",width:"50%",justifyContent:"space-between",borderRight:"1px solid",padding:"10px 10px 10px 0px"}}>
                        <Box style={{ textAlign: "left" }}>
                            <Text fontSize='3xl'>Previous Orders</Text>
                            <Text fontSize='l'>Your previously ordered products</Text>
                            <Box  backgroundColor="transparent" color="#24aeb1"  display="flex" alignItems="center"  >
                                 <Text>View orders</Text>  
                                 <Image src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/new-icons/arrow_mark.svg" alt=""/>
                            </Box>
                        </Box>
                        <Box>
                            <Image src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="previous_orders" />
                        </Box>

                    </Box>
                    <Box style={{display:"flex",width:"50%",justifyContent:"space-between",padding:"10px"}}>
                        <Box style={{ textAlign: "left" }}>
                            <Text fontSize='3xl'>Beauty Products</Text>
                            <Text fontSize='l'>Save Upto 40% off</Text>
                            <Button backgroundColor="#24aeb1" color="white" marginTop="20px" padding="20px">Explore Beauty</Button>
                        </Box>
                        <Box>
                            <Image src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="beauty_products" />
                        </Box>
                    </Box>
            </Box>

        </Box>
    )
}

export default PaymentPartners