import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import illustration1 from "../../assets/images/1.illustration.png"
import illustration2 from "../../assets/images/2.illustration.png"
import illustration3 from "../../assets/images/3.illustration.png"

const Div = styled.div`

.illustration-img-cont{
    height:300px;
    padding:0 10px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
}
`
const Illustration = () => {
    console.log(illustration1)
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
      };
    return (
        <Div>
           <Slider {...settings}>
                {sliderData.map((data)=>(
                    <div className='illustration-img-cont'>
                        <img {...data} />
                    </div>
                ))}
            </Slider>
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