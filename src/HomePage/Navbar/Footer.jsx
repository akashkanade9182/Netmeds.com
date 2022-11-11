import { Image, Box ,Flex,Spacer} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { VStack, StackDivider, Input } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Footer = () => {



    return (
        <div style={{ width: "90%", margin: "auto", marginTop: "40px", marginBottom: "40px" }}>
            <div style={{ display: "flex", gap: "40px" }}>
                <Box boxSize='sm'>
                    <Image src='https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg' alt='Dan Abramov' />
                </Box>
                <div>
                    <Text color="#0b1219" noOfLines={[1, 2]} style={{ textAlign: "left", width: "75%", lineHeight: "24px", color: "#0b1219" }}>
                        Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.
                    </Text>
                </div>
            </div>
            {/* <Divider orientation='horizontal' color="black"/> */}
            <hr />
            <div style={{ textAlign: "left", color: "#0b1219", fontSize: "15px", lineHeight: "30px", display: "flex", justifyContent: "space-between" ,marginTop: "40px", marginBottom: "40px"}}>
                <div>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box style={{ fontWeight: "bolder" }}>
                            Company
                        </Box>
                        <Box >
                            About Netmeds
                        </Box>
                        <Box >
                            Customers Speak
                        </Box>
                        <Box >
                            In the News
                        </Box>
                        <Box >
                            Career
                        </Box>
                        <Box >
                            Terms and Conditions
                        </Box>
                        <Box >
                            Privacy Policy
                        </Box>
                        <Box >
                            Fees and Payments Policy
                        </Box>
                        <Box >
                            Shipping and Delivery Policy
                        </Box>
                        <Box >
                            Return, Refund and Cancellation Policy
                        </Box>
                        <Box >
                            Contact
                        </Box>
                    </VStack>

                </div>
                <div>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box style={{ fontWeight: "bolder" }}>
                            SHOPPING
                        </Box>
                        <Box >
                            Browse by A-Z
                        </Box>
                        <Box >
                            Browse by Manufacturers
                        </Box>
                        <Box >
                            Health Articles
                        </Box>
                        <Box >
                            Offers / Coupons
                        </Box>
                        <Box >
                            FAQs
                        </Box>
                    </VStack>

                </div>
                <div>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box style={{ fontWeight: "bolder" }}>
                            SOCIAL
                        </Box>
                        <Box >
                            Patients Alike
                        </Box>
                        <Box >
                            Facebook
                        </Box>
                        <Box >
                            Twitter
                        </Box>
                        <Box >
                            LinkedIn
                        </Box>
                        <Box >
                            Youtube
                        </Box>
                        <Box >
                            Refer & Earn
                        </Box>
                    </VStack>

                </div>
                <div style={{ width: "20%"}}>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                        lineHeight="20px"
                    >
                        <Box style={{ fontWeight: "bolder" }}>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </Box>
                        <Box >
                            Get a free subscription to our health and fitness tip and stay tuned to our latest offers
                        </Box>
                        <Box >
                            <Input border={"none"} width="60%" placeholder='Enter your Email Address' />
                            <Icon as={ArrowForwardIcon} w={20} h={20} color="#23adb0" />
                            <hr />
                        </Box>
                        <Box >
                            <Image
                                boxSize='100px'
                                objectFit='contain'
                                src='https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png'
                                alt='Dan Abramov'
                            />
                            <Image
                                boxSize='100px'
                                objectFit='contain'
                                src='https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png'
                                alt='Dan Abramov'
                            />
                        </Box>

                    </VStack>

                </div>
            </div>
            <hr />
            <div>
                <Flex color="#0b1219" lineHeight="65px">
                    <Box p='4' bg='red.400'>
                    Medicine
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                    Wellness
                    </Box>
                    <Spacer />
                    <Box p='4' bg='red.400'>
                    Lab Tests
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                    Beauty
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                    Copyright© 2022. All Rights Reserved.
                    </Box>
                </Flex>
            </div>
        </div>
    )
}
export default Footer