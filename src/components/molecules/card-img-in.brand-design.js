import React from 'react'
import Button from "../atom/button"
import styled from 'styled-components'


const Div = styled.div`
height:100%;

.sm-container{
    height:100%;
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%);
    mix-blend-mode: normal;
    backdrop-filter: blur(12px);
    border-radius: 30px;
    overflow:hidden;
    max-width:240px;
    margin:0  auto;
    border:1px solid #FFFFFF30;
    .img-cont{
        width:100%;
        img{
            width:100%;
        }
    }
    .content{
        padding:25px 20px;
        color:white;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:Center;
        p{
            font-size:9px;
            margin-bottom:15px;
        }
        h3{
            margin-bottom:5px;
        }
        button{
            font-size:0.75em;
            padding:14px;
        }
    }
}
`
const CardImgIn = ({img,title,subTitle,action}) => (
    <Div>
        <div className="sm-container">
            <div className="img-cont">
                <img src={img}  alt={title}/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{subTitle}</p>
                <Button type="transparent" action={action}>Explore Case Study</Button>
            </div>
        </div>
    </Div>
)

export default CardImgIn