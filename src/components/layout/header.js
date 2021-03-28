import React,{useState} from 'react'
import styled from "styled-components";
import { Menu} from 'semantic-ui-react'
import logo from "../../assets/images/GD..png"
import whiteLogo from "../../assets/images/GD. white.png"
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
    max-width:1200px;
    margin: 0 auto;
    height:54px;
    z-index:1000;
    .menu{
        margin-top:0;
        border-bottom:none!important;
    }
}
.dummy{
    height:54px;
}
.logo-cont{
    height:50%;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
}
`;

const Header = ({logoColor=true,menuColor=true,currentMenu="Intro"}) => {
    const [activeItem,setActiveItem] = useState(currentMenu)
    const handleClick = (name) =>{
        window.location = "/#"+name;
    }
    return (
        <HeaderS menuColor={menuColor}>

             <nav>
                 <div className="logo-cont">
                     <img src={logoColor?logo:whiteLogo} alt="GD."/>
                 </div>
                 <Menu pointing secondary >
                    <Menu.Item
                        name='Intro'
                        active={activeItem === 'Intro'}
                        onClick={(e, { name }) => handleClick(name) }
                        
                    />
                    <Menu.Item
                        name='Portfolio'
                        active={activeItem === 'Portfolio'}
                        onClick={(e, { name }) => handleClick(name) }
                        
                    />
                    <Menu.Item
                        name='Services'
                        active={activeItem === 'Services'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                    <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                     <Menu.Item
                        name='Contact'
                        active={activeItem === 'Contact'}
                        onClick={(e, { name }) => handleClick(name) }
                    />
                </Menu>
             </nav>
             <div className="dummy"/>
        </HeaderS>
    )
}

export default Header
