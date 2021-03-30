import React from 'react'
import styled from "styled-components"
const Div = styled.div`
width:100%;
height:100%;
button,a{
    color:${({type})=>type==="transparent"?"#FFFFFF":"#0051FF"};
    background:${({type})=>type==="transparent"?"transparent":"#FFFFFF"};
    border:1px solid white;
    border-radius:8px;
    padding:12px 20px;
    max-width:180px;
    width:100%;
    display:block;
    margin:10px auto;
    font-family:Poppins;
    cursor:pointer;
    transition:0.3s ease;
    font-size:0.9em;
    line-height:1.2em;
}
button:hover,a:hover{
    color:${({type})=>type!=="transparent"?"#FFFFFF":"#0051FF"};
    background:${({type})=>type!=="transparent"?"transparent":"#FFFFFF"};
}
@media screen and (max-width:1440px){
    button,a{
        font-size:0.8em;
        padding:12px 10px;
        margin:5px auto;
    }
}
`

const Button = ({type,action,children,href}) => {
    return (
        <Div type={type}>
            {href?<a href={href}>{children}</a>:
            <button onClick={action}>{children}</button>}
        </Div>
    )
}

export default Button
