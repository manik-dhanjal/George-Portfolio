import React from 'react'
import styled from "styled-components"
import nextArr from "../../assets/images/thin_long_right.svg"
import prevArr from "../../assets/images/thin_long_left.svg"
import nextArrB from "../../assets/images/thin_long_right_blue.svg"
import prevArrB from "../../assets/images/thin_long_left_blue.svg"
const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;
button{
    background:transparent;
    border:none;
    width:60px;
    margin:0 20px;
    padding:10px 5px;
    cursor:pointer;
    transition:0.3s ease;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100%;
    }
}
button:hover{
    transform:scale(1.2);
}
.drag-text{
    color:${({color})=>color==="blue"?"#0051FF":"white"};
    font-size:1.5em;
}
@media screen and ( max-width:1280px){
    margin-top:10px;
    .drag-text{
        font-size:0.8em;
    }
    button{
        width:40px;
    }
}
`
const ToogleBtn = ({next,prev,color="white"}) => {
    return (
        <Div color={color} className="toogle-btns">
                <button className="button" onClick={prev}>
                    <img src={color==="blue"?prevArrB:prevArr} alt="Previous Arrow"/>
                </button>
                <span className="drag-text">Drag left using mouse</span>
                <button className="button" onClick={next}>
                    <img src={color==="blue"?nextArrB:nextArr} alt="next Arrow"/>
                </button>
        </Div>
    )
}

export default ToogleBtn
