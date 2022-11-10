import { Input } from "@chakra-ui/react"

const SearchBar = ()=>{



    return (
        <div style={{borderRadius:"6px", fontSize:"13px", textAlign:"left",width:"44%",display:"flex"}}>
            <button style={{width:"25%", height:"48px",borderRadius:"6px 0px 0px 6px", backgroundColor:"white",border:"0.5px solid"}}>Deliver to <b style={{color:"#32aeb1"}}>110002</b></button>
            <Input placeholder='Search for medicine & Wellness products...' width={"70%"} borderRadius="0px 6px 6px 0px" border={"0.5px solid"}/>
        </div>
    )
}
export default SearchBar