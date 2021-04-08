import React, {useState,useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgOut from "./card-img-out.ui-ux-design"
import transabel from "../../assets/images/transabel.png"
import monkeyMind from "../../assets/images/monkey-mind.png"
import chaayos from "../../assets/images/chaayos.png"
import ModalPortfolio from '../molecules/modal.portfolio'
import ToogleBtn from '../atom/toogle-btn';

const Div = styled.div`
width:100%;
max-width:1400px;
margin:0px auto;
padding-top:40px;
flex-grow:1;
.center-align{
  display:flex;
  justify-content:center;
  align-items:Cetner;
  height:100%;
  flex-direction:column;
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
`
const UiUxDesign = () => {
  const slider = useRef(null)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

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
          setOpen(true)
      }
      const cardData = [
        {
            img:chaayos,
            title:"Chaayos Bazaar",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"#",
            action:handleModel
        },{
            img:monkeyMind,
            title:"Monkey Mind",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"#",
            action:handleModel
        },{
            img:transabel,
            title:"Transabel",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"#",
            action:handleModel
        },
        {
            img:monkeyMind,
            title:"Monkey Mind",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"#",
            action:handleModel
        }
    ]
      const [open,setOpen]=useState(false);
    return (
        <Div>
          <div className="center-align">
                <Slider {...settings} ref={slider}>
                {cardData.map((data)=>(
                    <div><CardImgOut {...data}/></div>
                ))}
                  <ModalPortfolio open={open} setOpen={setOpen}/>
              </Slider>  
              <ToogleBtn next={() => slider.current.slickNext()} prev={() => slider.current.slickPrev()}/>
          </div>
        </Div>
    )
}

export default UiUxDesign
