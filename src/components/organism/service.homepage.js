import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import CardImgIn from "../molecules/card-img-in.service"
import service1 from "../../assets/images/service1.svg"
import service2 from "../../assets/images/service2.svg"
import service3 from "../../assets/images/service3.svg"

const Div = styled.div`
scroll-snap-align:start;
position:relative;
height:100vh;
overflow:hidden;
.service-section{
    padding:0 50px;
}
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
.cards-container{
    margin-top:40px;
    display:flex;
    justify-content:space-between;
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
                    <div className='cards-container'>
                        {cardData.map((data,i)=>(
                            <CardImgIn {...data} key={i+"service"}/>
                        ))}
                    </div>
                </div> 
            </Layout>
        </Div>
    )
}

export default Service

const cardData = [
        {
            title:"UI/UX Design",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:service1
        },{
            title:"Branding Design",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:service2
        },{
            title:"Illustration",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:service3
        }
]