import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgIn from "./card-img-in.brand-design"
import transabel from "../../assets/images/transabel.brand.png"
import monkeyMind from "../../assets/images/monkey-mind.brand.png"
import glastone from "../../assets/images/glastone.brand.png"
const Div = styled.div`


`
const BrandDesign = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <Div>
            <Slider {...settings}>
                {cardData.map((data)=>(
                    <div><CardImgIn {...data}/></div>
                ))}
            </Slider>  
        </Div>
    )
}

export default BrandDesign
const cardData = [
    {
        img:glastone,
        title:"Glastone",
        subTitle:"Logo Design",
    },{
        img:monkeyMind,
        title:"Monkey Mind",
        subTitle:"User Interface & user Experience",
    },{
        img:transabel,
        title:"Transabel",
        subTitle:"User Interface & user Experience",
    },
]