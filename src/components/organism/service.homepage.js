import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import ServiceSlider from "../molecules/service-slider.service"
const Div = styled.div`
.service-section{
    padding:50px;
    display: flex;
    flex-direction: column;  
    min-height:calc( 100vh - 60px );
}
.head{
    margin-bottom:30px;
    h2{
        color:#0051FF;
        text-align:Center;
    }
    p{
        text-align:center;
        max-width:600px;
        margin:0 auto;
        font-size:18px;
    }
}
.cards-container{
    margin-top:40px;
    display:flex;
    justify-content:center;
}
@media screen and (max-width:1440px){
    .service-section{
    padding:20px 50px;
    .head{

        h2{
            color:#0051FF;
            text-align:Center;
        }
        p{
            text-align:center;
            max-width:600px;
            margin:0 auto;
            font-size:0.85em;
        }
    }
}
}
@media screen and (max-width:1024px){
    .service-section{
        padding:50px;
        display: flex;
        flex-direction: column;  
        min-height:auto;
    }
    .head{
        margin-bottom:50px;
    }
}
@media screen and (max-width:700px){
    .service-section{
        padding:30px;
    }
}
`
const Service = () => {
    return (
        <Div id="services">
            {/* <Layout currentMenu="Services"> */}
                <div className="service-section">
                    <div className='head'>
                        <h2>What I Do</h2>
                        <p>As a multifaceted digital design, I will produce beautifully crafted creative solutions that transcend business goals and garner recognition.</p>
                    </div>
                    <ServiceSlider/>
                </div> 
            {/* </Layout> */}
        </Div>
    )
}

export default Service
