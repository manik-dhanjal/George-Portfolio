import React,{useState} from 'react'
import styled from "styled-components";
import logo from "../../assets/images/GD..png"
import whiteLogo from "../../assets/images/GD. white.png"
import NavBurger from "./menu"
import {Link, animateScroll as scroll} from "react-scroll"
const HeaderS = styled.header`
.ui.secondary.pointing.menu .active.item{
    border-top:2px solid ${({menuColor})=> menuColor?"#0051FF":"#FFFFFF"};
    border-bottom:none;
    color:${({menuColor})=> menuColor?"#0051FF":"#FFFFFF"}!important;
    position:relative;
}
.ui.secondary.pointing.menu .item {
    padding-top:20px;
    padding-bottom:20px;
    border-bottom:none!important;
    transition:0.3s ease;
    font-size:1.1em;
    color:${({menuColor})=> menuColor?"black":"#FFFFFF"};
}

nav{
    background:white;
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:Center;
    padding:0 50px;
    margin: 0 auto;
    height:70px;
    z-index:1000;
    .menu.lg{
        margin:0;
        border-bottom:none!important;
    }
    .menu.lg{
        display:flex;
        height:100%;
        li{
            list-style-type:none;
            margin-left:20px;
            height:100%;
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            a{
                color:black;
                cursor:pointer;
                verticle-align:middle;
                transition:0.3s ease;
                span{
                    height:2px;
                    position:absolute;
                    top:0;
                    left:0;
                    background-color:#0051FF;
                    width:0;
                    transition:0.3s ease;
                }
            }
            a.active{
                color:#0051FF;
                span{
                    width:100%;
                    height:2px;
                }
            }
        }
    }
}
.dummy{
    height:70px;
}
.logo-cont{
    height:50%;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
}

@media screen and (max-width:1280px){
    .dummy,nav{
        height:54px;
    }
}
@media screen and (max-wdith:1024px){
    .ui.secondary.pointing.menu .active.item{
        border-top:2px solid ${({sm})=> !sm?"#0051FF":"#FFFFFF"};
        color:${({sm})=> !sm?"#0051FF":"#FFFFFF"}!important;
    }
    .ui.secondary.pointing.menu .item {
        color:${({sm})=> !sm?"black":"#FFFFFF"};
    }
}
@media screen and (max-width:700px){
    .menu.lg{
        display:none!important;
    }
    nav{
        padding:0 30px;
    }
}
`;



const Header = ({logoColor=true,menuColor=true,currentMenu="Intro",sm=false}) => {

    const handleClick = (name) =>{
        window.location = "/#"+name;
    }
    return (
        <HeaderS menuColor={menuColor} sm={sm}>

             <nav>
                 <div className="logo-cont">
                     <img src={logoColor?logo:whiteLogo} alt="GD." onClick={()=>{console.log(scroll.scrollToTop);scroll.scrollToTop()}}/>
                 </div>
                 <ul className="menu lg">
                    <li><Link activeClass="active" spy={true}to="intro"  smooth={true} duration={500} offset={-54}><span></span>Home</Link></li>
                    <li><Link activeClass="active" spy={true}to="portfolio"  smooth={true} duration={500} offset={-54}><span></span>Portfolio</Link></li>
                    <li><Link  activeClass="active"spy={true} to="services"  smooth={true} duration={500} offset={-54}><span></span>What I Do</Link></li>
                    <li><Link activeClass="active"spy={true} to="about" smooth={true} duration={500} offset={-54}><span></span>About</Link></li>
                    <li><Link activeClass="active"spy={true} to="contact" smooth={true} duration={500} offset={-54}><span></span>Contact</Link></li>
                 </ul>
                <NavBurger menuColor={menuColor} currentMenu={currentMenu}/>
             </nav>
             {/* <div className="dummy"/> */}
        </HeaderS>
    )
}

export default Header
