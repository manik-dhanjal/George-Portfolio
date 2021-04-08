import React,{useState,useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgIn from "../molecules/card-img-in.service"
import service1 from "../../assets/images/service1.svg"
import service2 from "../../assets/images/service2.svg"
import service3 from "../../assets/images/service3.svg"
import ModalPortfolio from '../molecules/modal.portfolio'
import ToogleBtn from '../atom/toogle-btn';

const Div = styled.div`
max-width:1400px;
width:100%;
margin:0px auto;
padding-bottom:30px;
flex-grow:1;
display:flex;
justify-content:center;
flex-direction:column;
@media screen and (max-width:1440px){
  max-width:900px;
  margin:0px auto;
}
@media screen and (max-width:1024px){
.toogle-btns{
  margin-top:20px;
}
}
@media screen and (min-width:1080px){
  .toogle-btns{
      display:none;
  }
}
`
const ServiceSlider = () => {
    const slider = useRef(null)
    const settings = {
        infinite:false,
        speed: 500,
        slidesToShow: 3,
        arrows:false,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: "60px"
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
      };
    const cardData = [
        {
            title:"UI/UX Design",
            desc:"We are here to understand your business, help develop and design a product that facilitates your business workflow and delivers an intuitively beautiful user experience that makes an impact.",
            img:service1
        },{
            title:"Branding Design",
            desc:"A great brand strategy acts as a guiding light for the brand and all future communication and walk you through the process of discovery, research and positioning to achieve the expected business results.",
            img:service2
        },{
            title:"Illustration",
            desc:"An illustration is a decoration, interpretation or visual explanation of a text, concept or process, designed for integration in print and digital published media.",
            img:service3
        }
]
    return (
        <Div>
            <Slider {...settings} ref={slider}>
                {cardData.map((data,i)=>(
                            <div><CardImgIn {...data} key={i+"services"}/></div>
                ))}
            </Slider>  
            <ToogleBtn next={() => slider.current.slickNext()} prev={() => slider.current.slickPrev()} color="blue"/>
        </Div>
    )
}

export default ServiceSlider
