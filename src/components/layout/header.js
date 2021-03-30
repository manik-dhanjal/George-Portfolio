import React,{useState} from 'react'
import styled from "styled-components";
import { Menu} from 'semantic-ui-react'
import logo from "../../assets/images/GD..png"
import whiteLogo from "../../assets/images/GD. white.png"
import NavBurger from "./menu"
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
    .menu{
        margin-top:0;
        border-bottom:none!important;
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
    .sementic-menu{
        display:none;
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
                     <img src={logoColor?logo:whiteLogo} alt="GD."/>
                 </div>
                 <Menu pointing secondary className="sementic-menu">
                    <Menu.Item
                        name='Intro'
                        active={currentMenu === 'Intro'}
                        onClick={(e, { name }) => handleClick(name) }
                        
                    />
                    <Menu.Item
                        name='Portfolio'
                        active={currentMenu === 'Portfolio'}
                        onClick={(e, { name }) => handleClick(name) }
                        
                    />
                    <Menu.Item
                        name='Services'
                        active={currentMenu === 'Services'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                    <Menu.Item
                        name='About'
                        active={currentMenu === 'About'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                     <Menu.Item
                        name='Contact'
                        active={currentMenu === 'Contact'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                </Menu>
                <NavBurger menuColor={menuColor} currentMenu={currentMenu}/>
             </nav>
             <div className="dummy"/>
        </HeaderS>
    )
}

export default Header
