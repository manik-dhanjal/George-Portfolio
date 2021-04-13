import {Link} from "react-scroll"
import React,{useState} from 'react'
import styled from "styled-components"

const Div = styled.div`
.burger-menu{
    cursor:pointer;
    height:40px;
    padding:15px 0;
    div{
        height:5px;
        transition:0.3s ease;
    }
    .rod-1{
        width:45px;
        margin-bottom:6px;
        background:${({menuColor,state})=>state?"white":(menuColor?"#0051ff":"white")};
        transform: ${({state})=>state?"translate(0px, 5px) rotate(45deg)":"none"};
    }
    .rod-2{
        width:${({state})=>state?"45px":"25px"};
        margin-left:auto;
        background:${({state})=>state?"white":"black"};
        transform: ${({state})=>state?"translate(0px, -5px) rotate(-45deg)":"none"};
    }
}
.menu{
    position:fixed;
    top:0;
    transition:0.3s ease;
    right:${({state})=>state?"0":"-105%"};;
    width:70vw;
    max-width:300px;
    background:#0051ff;
    height:100%;
    z-index:-108;
    display:flex;
    justify-content:center;
    align-items:center;
    ul{
        list-syle-type:none;
        li{
            margin-bottom:30px;
            list-style-type:none;
        }
        li>a{
            color:white;
            font-family: Playfair Display;
            font-size:3em;
            cursor:pointer;
        }
    }
}
.overlay{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-110;
    background:#00000030;
}
@media screen and (min-width:700px){
display:none;
}
`
const NavBurger = ({menuColor=true,state=true}) => {
    const [open,setOpen] = useState(false);
    const handleClick = () => setOpen(false);
    return (
        <Div state={open} menuColor={menuColor}>
            <div className="burger-menu" onClick={() => setOpen(!open)}>
                <div className="rod-1"></div>
                <div className="rod-2"></div>
            </div>
            {open?<div className="overlay"/>:null}
            <div className="menu">
                <ul>
                    <li><Link activeClass="active" onClick={handleClick} spy={true}to="intro"  smooth={true} duration={500} offset={-54}><span></span>Home</Link></li>
                    <li><Link activeClass="active" onClick={handleClick} spy={true}to="portfolio"  smooth={true} duration={500} offset={-54}><span></span>Portfolio</Link></li>
                    <li><Link  activeClass="active" onClick={handleClick} spy={true} to="services"  smooth={true} duration={500} offset={-54}><span></span>Services</Link></li>
                    <li><Link activeClass="active" onClick={handleClick} spy={true} to="about" smooth={true} duration={500} offset={-54}><span></span>About</Link></li>
                    <li><Link activeClass="active" onClick={handleClick} spy={true} to="contact" smooth={true} duration={500} offset={-54}><span></span>Contact</Link></li>
                </ul>
            </div>
        </Div>
    )
}

export default NavBurger
