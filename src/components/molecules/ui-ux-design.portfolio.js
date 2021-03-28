import React, {useState} from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import CardImgOut from "./card-img-out.ui-ux-design"
import transabel from "../../assets/images/transabel.png"
import monkeyMind from "../../assets/images/monkey-mind.png"
import chaayos from "../../assets/images/chaayos.png"
import ModalPortfolio from '../molecules/modal.portfolio'

const Div = styled.div`

height:100%;
max-width:1400px;
margin:20px auto;
@media screen and (max-width:1440px){
    max-width:900px;
    margin:10px auto;
}
@media screen and (max-width:1024px){
    margin:50px auto;
}
`
const UiUxDesign = () => {
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
        <Slider {...settings}>
          {cardData.map((data)=>(
              <div><CardImgOut {...data}/></div>
          ))}
            <ModalPortfolio open={open} setOpen={setOpen}/>
        </Slider>  
        </Div>
    )
}

export default UiUxDesign
