import React,{useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import Img from "gatsby-image"
import ImageSupplier from "../atom/image-supplier"

import ToogleBtn from '../atom/toogle-btn';
const Div = styled.div`

max-width:1400px;
padding-bottom:30px;
padding-top:40px;
width:100%;
margin:0px auto!important;
.slick-track {
    display: flex!important;
    }
    margin:20px;
.illustration-img-cont{
    padding:0 5px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
}
.illustration-img-cont{
}
@media screen and (max-width:1440px){
    max-width:900px;
    margin:0px auto;
    padding-top:20px;
}
@media screen and (max-width:1024px){
  .toogle-btns{
    margin-top:20px;
  }
}
@media screen and (max-width:1080px){
    .illustration-img-cont{
        height:40vh;
    }
}
@media screen and (max-width:700px){
    margin-top:10px;
}

`

const Illustration = (props) => {
    const imgs = ImageSupplier();
    console.log(props)
    const slider = useRef(null)
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        arrows:false,
        swipeToSlide: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
    
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
      console.log(imgs,"dd")

    return (
        <Div>
           <Slider {...settings} ref={slider}>
                {imgs?imgs.map((i)=>(
                     <div className='illustration-img-cont'>
                        <Img fixed={i.node.childImageSharp.fixed}/>
                    </div> 
                )):null}
            </Slider> 
            <ToogleBtn next={()=>slider.current.slickNext()} prev={()=>slider.current.slickPrev()}/>
        </Div>
    )
}
export default Illustration


