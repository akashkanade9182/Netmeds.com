import { Button, Input,Text } from "@chakra-ui/react"

const SearchBar = ()=>{



    return (
        <div style={{borderRadius:"6px", fontSize:"13px", textAlign:"left",width:"44%",display:"flex"}}>
            <Button borderRadius="none" backgroundColor="white" style={{borderRadius:"6px 0px 0px 6px"}}><Text>Deliver to </Text><Text style={{color:"#32aeb1"}}>110002</Text></Button>
            <Input placeholder='Search for medicine & Wellness products...' width={"70%"} borderRadius="0px 6px 6px 0px" border={"0.5px solid"} backgroundColor="white"/>
        </div>
    )
}
export default SearchBar