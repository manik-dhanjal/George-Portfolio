import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";

import CardImgOut from "./card-img-out.ui-ux-design"
import transabel from "../../assets/images/transabel.png"
import monkeyMind from "../../assets/images/monkey-mind.png"
import chaayos from "../../assets/images/chaayos.png"
const Div = styled.div`


`
const UiUxDesign = () => {
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
              <div><CardImgOut {...data}/></div>
          ))}
        </Slider>  
        </Div>
    )
}

export default UiUxDesign
const cardData = [
    {
        img:chaayos,
        title:"Chaayos Bazaar",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link:"#"
    },{
        img:monkeyMind,
        title:"Monkey Mind",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link:"#"
    },{
        img:transabel,
        title:"Transabel",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link:"#"
    },
]