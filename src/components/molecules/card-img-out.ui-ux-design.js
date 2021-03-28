import React from 'react'
import styled from "styled-components";
import Button from "../atom/button"
const Div = styled.div`
padding:0 20px;
.sm-container{
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%);
    mix-blend-mode: normal;
    backdrop-filter: blur(12px);
    border-radius: 30px;
    border: 1px solid #FFFFFF30;
    padding:20px;

    max-width:350px;
    margin:0 auto;
    margin-top:50px;
    .img-cont{
        margin-top:-70px;
        width:100%;
        margin-bottom:-10%;
        img{
            width:100%;
            height:100%:
            object-fit:contain;
        }
    }
    .content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;

        h3{
            color:white;
        }
        p{
            font-size:0.8em;
            color:white;
            font-family:Poppins;
        }
    }
}
`

const CardImgOut = ({img,title,link,desc,action}) => {
    return (
        <Div>
            <div className="sm-container">
                <div className='img-cont'>
                    <img src={img} alt={title}/>
                </div>
                <div className='content'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <Button action={action} >Explore Case Study</Button>
                    <Button href={link} type='transparent'>Live Site</Button>
                </div>
                
            </div>
        </Div>
    )
}

export default CardImgOut
