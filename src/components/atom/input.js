import React from 'react'
import styled from "styled-components"

const Div = styled.div`
margin:10px ;
input{
    font-size:18px;
    padding:15px 20px;
    width:100%;
    border:1px solid #C4C4C4;
}
textarea{
    width:100%;
    height:250px;
    font-size:18px;
    padding:15px 20px;
    border:1px solid #C4C4C4;
}
@media screen and (max-width:1440px){
input,textarea{
    font-size:0.9em;
    padding:13px 15px;
}
textarea{
    height:150px;
}
}
@media screen and (max-width:1440px){
    textarea{
        height:75px;
    }
}
`
const Input = (props) => {
    console.log(props)
    return (
        <Div>
            {props.type=="textarea"?
            <textarea {...props}>{props.value}</textarea>:
            <input {...props} type={props.type} value={props.value}/>}
        </Div>
    )
}

export default Input
