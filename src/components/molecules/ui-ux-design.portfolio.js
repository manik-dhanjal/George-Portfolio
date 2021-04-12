import React, {useState,useRef} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgOut from "./card-img-out.ui-ux-design"
import transabel from "../../assets/images/transabel.png"
import monkeyMind from "../../assets/images/monkey-mind.png"
import chaayos from "../../assets/images/chaayos.png"
import ModalPortfolio from '../molecules/modal.portfolio'
import ToogleBtn from '../atom/toogle-btn';
import sync from "../../assets/images/SYNC.png"
import gladder from "../../assets/images/GLADDER.png"
import wconnect from "../../assets/images/WCONNECT.png"
import netart from "../../assets/images/netart.png"
import glastone from "../../assets/images/glastone.png"
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
            link:"https://bazaar.chaayos.com/",
            action:handleModel
        },{
            img:monkeyMind,
            title:"Monkey Mind",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"https://monkeyminds.in/",
            action:handleModel
        },{
            img:transabel,
            title:"Transabel",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"https://transabel.com/",
            action:handleModel
        }
        ,{
          img:sync,
          title:"SYNC",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link:"https://syncmedia.io/",
          action:handleModel
        }
        ,{
          img:gladder,
          title:"Growth Ladders",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link:"https://growthladders.in/",
          action:handleModel
      }
      ,{
        img:wconnect,
        title:"W Connect",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link:"https://wvconnect.in/",
        action:handleModel
    }
    ,{
      img:glastone,
      title:"Glastone",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"https://glastonedemo.netlify.app/",
      action:handleModel
    }
    ,{
      img:netart,
      title:"Netart",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"https://netart.io/",
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
