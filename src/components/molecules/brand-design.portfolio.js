import React,{useState,useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgIn from "./card-img-in.brand-design"
import ModalPortfolio from '../molecules/modal.portfolio'
import ToogleBtn from '../atom/toogle-btn';
import b1 from "../../assets/images/branding1.jpg"
import b2 from "../../assets/images/branding2.jpg"
import b3 from "../../assets/images/branding3.jpg"
import b4 from "../../assets/images/branding4.jpg"
import b0 from "../../assets/images/branding0.jpg"

const Div = styled.div`
max-width:1400px;
width:100%;
margin:0px auto;
padding-bottom:30px;
padding-top:50px;
flex-grow:1;
display:flex;
justify-content:center;
flex-direction:column;
@media screen and (max-width:1440px){
    max-width:900px;
    margin:0px auto;
    padding-top:20px;
}
@media screen and (max-width:1280px){
    padding-top:20px;
}
@media screen and (max-width:1024px){
    padding-top:30px;
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
            img:b0,
            title:"Wedding Vows",
            subTitle:"November 2019",
            link:"https://www.magzter.com/IN/GNT-Media-Private-Limited/Wedding-Vows/Bridal/384861"
        },{
            img:b1,
            title:"Wedding Vows",
            subTitle:"December 2019",
            link:"https://www.magzter.com/IN/GNT-Media-Private-Limited/Wedding-Vows/Bridal/392682"
        },{
            img:b2,
            title:"Wedding Vows",
            subTitle:"January 2020",
            link:"https://www.magzter.com/IN/GNT-Media-Private-Limited/Wedding-Vows/Bridal/403500"
        },{
            img:b3,
            title:"Wedding Vows",
            subTitle:"February 2020",
            link:"https://www.magzter.com/IN/GNT-Media-Private-Limited/Wedding-Vows/Bridal/418497"
        },{
            img:b4,
            title:"Wedding Vows",
            subTitle:"March 2020",
            link:"https://www.magzter.com/IN/GNT-Media-Private-Limited/Wedding-Vows/Bridal/435959"
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
