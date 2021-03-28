import React from 'react'
import styled from "styled-components"

const Div = styled.div`
margin:10px ;
input{
    padding:13px 15px;
    font-size:0.9em;
    width:100%;
    border:1px solid #C4C4C4;
}
textarea{
    width:100%;
    height:100px;
    padding:13px 15px;
    font-size:0.9em;
    border:1px solid #C4C4C4;
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
