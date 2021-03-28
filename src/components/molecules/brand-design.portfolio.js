import React,{useState} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgIn from "./card-img-in.brand-design"
import transabel from "../../assets/images/transabel.brand.png"
import monkeyMind from "../../assets/images/monkey-mind.brand.png"
import glastone from "../../assets/images/glastone.brand.png"
import ModalPortfolio from '../molecules/modal.portfolio'

const Div = styled.div`
max-width:1400px;
margin:20px auto;
@media screen and (max-width:1440px){
    max-width:900px;
    margin:50px auto;
}

`
const BrandDesign = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <Slider {...settings}>
                {cardData.map((data)=>(
                    <div><CardImgIn {...data}/></div>
                ))}
            </Slider>  
            <ModalPortfolio open={open} setOpen={setOpen}/>
        </Div>
    )
}

export default BrandDesign
