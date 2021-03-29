import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import ServiceSlider from "../molecules/service-slider.service"
const Div = styled.div`
scroll-snap-align:start;
position:relative;
height:100vh;
overflow:hidden;
.service-section{
    padding:0 50px;
    height: 100%;
    display: flex;
    flex-direction: column;  
}
.head{
    margin-bottom:30px;
    h2{
        color:#0051FF;
        text-align:Center;
    }
    p{
        text-align:center;
        max-width:900px;
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
    .head{

        h2{
            color:#0051FF;
            text-align:Center;
        }
        p{
            text-align:center;
            max-width:800px;
            margin:0 auto;
            font-size:0.85em;
        }
    }
}
@media screen and (max-width:700px){
    .service-section{
        padding:0px;
    }
}
`
const Service = () => {
    return (
        <Div id="Services">
            <Layout currentMenu="Services">
                <div className="service-section">
                    <div className='head'>
                        <h2>Services</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <ServiceSlider/>
                </div> 
            </Layout>
        </Div>
    )
}

export default Service
