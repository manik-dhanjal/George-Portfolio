import React,{useRef,useEffect} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import illustration1 from "../../assets/images/1.illustration.png"
import illustration2 from "../../assets/images/2.illustration.png"
import illustration3 from "../../assets/images/3.illustration.png"
import ToogleBtn from '../atom/toogle-btn';

const Div = styled.div`
flex-grow:1;
display:flex;
justify-content:center;
flex-direction:column;
max-width:1400px;
padding-bottom:30px;
width:100%;
margin:0px auto!important;
margin-top:-20px!important;
.slick-track {
    display: flex!important;
    }
    margin:20px;
.illustration-img-cont{
    height:40vh;
    padding:0 10px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
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
const Illustration = () => {
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
      console.log(slider)

    return (
        <Div>
           <Slider {...settings} ref={slider}>
                {sliderData.map((data)=>(
                    <div className='illustration-img-cont'>
                        <img {...data} />
                    </div>
                ))}
            </Slider>
            <ToogleBtn next={()=>slider.current.slickNext()} prev={()=>slider.current.slickPrev()}/>
        </Div>
    )
}

export default Illustration

const sliderData = [
    {
        alt:"illustration1",
        src:illustration1
    },
    {
        alt:"illustration2",
        src:illustration2
    },
    {
        alt:"illustration3",
        src:illustration3
    },
    {
        alt:"illustration2",
        src:illustration2
    },
    {
        alt:"illustration3",
        src:illustration3
    },
    {
        alt:"illustration1",
        src:illustration1
    },
    {
        alt:"illustration2",
        src:illustration2
    },
]