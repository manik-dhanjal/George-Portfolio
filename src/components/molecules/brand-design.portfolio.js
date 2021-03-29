import React,{useState,useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgIn from "./card-img-in.brand-design"
import transabel from "../../assets/images/transabel.brand.png"
import monkeyMind from "../../assets/images/monkey-mind.brand.png"
import glastone from "../../assets/images/glastone.brand.png"
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

`
const BrandDesign = () => {
    const slider = useRef(null)
    const settings = {
        infinite: true,
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
                rows: 2,
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
      const handleModel = () =>{
        console.log("nn")
        setOpen(true)
    }
    const cardData = [
        {
            img:glastone,
            title:"Glastone",
            subTitle:"Logo Design",
            action:handleModel
        },{
            img:monkeyMind,
            title:"Monkey Mind",
            subTitle:"User Interface & user Experience",
            action:handleModel
        },{
            img:transabel,
            title:"Transabel",
            subTitle:"User Interface & user Experience",
            action:handleModel
        },{
            img:transabel,
            title:"Transabel",
            subTitle:"User Interface & user Experience",
            action:handleModel
        },
    ]
      const [open,setOpen]=useState(false);
    return (
        <Div>
            <Slider {...settings} ref={slider}>
                {cardData.map((data)=>(
                    <div><CardImgIn {...data}/></div>
                ))}
            </Slider>  
            <ToogleBtn next={() => slider.current.slickNext()} prev={() => slider.current.slickPrev()}/>
            <ModalPortfolio open={open} setOpen={setOpen}/>
        </Div>
    )
}

export default BrandDesign
