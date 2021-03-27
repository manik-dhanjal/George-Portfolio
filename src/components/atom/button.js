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
    padding:8px 10px;
    max-width:180px;
    width:100%;
    display:block;
    margin:5px auto;
    font-family:Poppins;
    cursor:pointer;
    transition:0.3s ease;
    font-size:14px;
}
button:hover,a:hover{
    color:${({type})=>type!=="transparent"?"#FFFFFF":"#0051FF"};
    background:${({type})=>type!=="transparent"?"transparent":"#FFFFFF"};
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
