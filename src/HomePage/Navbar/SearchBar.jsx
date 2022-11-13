import { useEffect, useState } from "react"
import styled from "styled-components"
// import { Link } from "react-router-dom"
import { Button, Text } from "@chakra-ui/react"
import './SearchBar.css'
import { products } from "../utils/products"

const SearchBar = ({ querhandler, suggestions }) => {


    const [inputText, setInputText] = useState("")
    const [active, setActive] = useState(0)
    // const [click, setClick] = useState("")
    const handleInputTextChange = (e) => {
        setInputText(e.target.value)
    }

    useEffect(() => {
        querhandler(inputText)
    }, [inputText, querhandler])

    // console.log(active)

    const handleActiveSuggestion = (e) => {
        switch (e.keyCode) {
            case 38:
                setActive((prev) => prev - 1)
                return;

            case 40:
                setActive((prev) => prev + 1)
                return;
            default:
                return
        }
    }
    // console.log(click)

    
    const filterName = (item)=>{

     let product =   products.filter(element => element.title === item)
     console.log(product)
    //  setClick(product)

    }

    console.log(suggestions)
    return (
        <>
            <div >
                <Wrapper  onKeyUp={handleActiveSuggestion}>
                    <SearchBarWrapper style={{ width: "30rem" }}>
                        <Button fontSize="13px" borderRight="1px solid" borderRadius="none" backgroundColor="white" height="40px" style={{ borderRadius: "5px 0px 0px 5px" }}><Text>Deliver to </Text><Text style={{ color: "#32aeb1" }}>110002</Text></Button>
                        <InputBox value={inputText} onChange={handleInputTextChange} />
                    </SearchBarWrapper>
                </Wrapper>
            </div>

            <SuggestionBox style={{ width: '30rem', borderRadius:"5px", position: 'absolute', top: '4rem', border: 'none', left: '25%', zIndex: '100' }} className={`bar`} len={5} active={active}>
                {
                suggestions.map((item, index) => (
                    // <Link to={`/products/${index}`}>
                    <div key={index} onClick={filterName(item)}  onMouseOver={() => setActive(index + 1)} style={{ textOverflow: "clip" }}>{item}</div>

                    //   </Link>
                ))}
            </SuggestionBox>
        </>
    )
}
export default SearchBar

const SuggestionBox = styled.div`
    border : 1px solid black;
    display : flex;
    flex-direction : column;
    max-height : ${({ len }) => `${len * 38.667}px`};
    margin : auto;
    overflow : auto;

    & * {
        flex 1;
        text-align : left;
        padding :10px;
        padding-left : 30px;
        background:white

    }

    & : nth-child(${({ active }) => active}){
        background : rgb(0,0,0,0.09);
        cursor : pointer
    }
`

const SearchBarWrapper = styled.div`
    // border : 1px solid black;
    display : flex;
    padding : 5px 10px;
    align-items : center;
    border-radius : 5px
`

const InputBox = styled.input`
border : 1px solid black;
outline : none;
font-size : 20px;
flex : 1;
// width : 100px
border-radius : 0px 5px 5px 0px;
padding-left : 10px;
height : 40px;
border : none

`

const Wrapper = styled.div`
max-width = 400px;
margin : auto;
`












// <Box style={{borderRadius:"6px", fontSize:"13px", textAlign:"left",width:"44%",display:"flex"}}>
// <Button borderRadius="none" backgroundColor="white" style={{borderRadius:"6px 0px 0px 6px"}}><Text>Deliver to </Text><Text style={{color:"#32aeb1"}}>110002</Text></Button>
// <Input value={inputText} onChange={handleInputTextChange} placeholder='Search for medicine & Wellness products...' width={"70%"} borderRadius="0px 6px 6px 0px" border={"0.5px solid"} backgroundColor="white"/>
// </Box>