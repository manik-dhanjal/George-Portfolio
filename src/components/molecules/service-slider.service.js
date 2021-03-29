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
    max-width:1000px;
    margin:0px auto;
}
@media screen and (max-width:1024px){

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
