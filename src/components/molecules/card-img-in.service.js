import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
height:100%;
padding:0 20px;
.sm-container{
    border: 1px solid #0051FF;
    height:100%;
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%);
    mix-blend-mode: normal;
    backdrop-filter: blur(12px);
    border-radius: 30px;
    overflow:hidden;
    max-width:375px;
    margin:0  auto;
    .img-cont{
        width:100%;
        padding:20px;
        img{
            width:100%;
        }
    }
    .content{
        padding:0px 20px;
        color:white;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:Center;
        background: #0051FF;
        mix-blend-mode: normal;
        border: 1px solid #0051FF;
        min-height:300px;
        p{
            margin-bottom:15px;
            margin-top:10px;
            font-size:0.8em;
        }
        h3{
            margin-bottom:5px;
        }
        button{
            font-size:0.8em;
            padding:14px;
        }
    }
}
@media screen and (max-width:1440px){
    .sm-container .content{
        padding:0px 15px;
        min-height:200px;
        h3{
            margin-bottom:5px;
        }
        button{
            font-size:0.8em;
            padding:14px;
        }
    }
}
@media screen and (max-width:1440px){
    .sm-container .content{
        padding:0px 15px;
        min-height:180px;
}
`
const CardImgIn = ({img,title,desc,action}) => (
    <Div>
        <div className="sm-container">
            <div className="img-cont">
                <img src={img}  alt={title}/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </Div>
)

export default CardImgIn