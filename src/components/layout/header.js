import React,{useState} from 'react'
import styled from "styled-components";
import { Menu} from 'semantic-ui-react'
import logo from "../../assets/images/GD..png"
import whiteLogo from "../../assets/images/GD. white.png"
const HeaderS = styled.header`
.ui.secondary.pointing.menu .active.item{
    border-bottom:none;
    border-top:2px solid black;
}
.ui.secondary.pointing.menu .item {
    padding-top:20px;
    padding-bottom:20px;
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

const Header = ({logoColor=true,menuColor=true}) => {
    const [activeItem,setActiveItem] = useState("home")

    return (
        <HeaderS menuColor={menuColor}>

             <nav>
                 <div className="logo-cont">
                     <img src={logoColor?logo:whiteLogo} alt="GD."/>
                 </div>
                 <Menu pointing secondary >
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={(e, { name }) => setActiveItem( name ) }
                        
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={(e, { name }) => setActiveItem( name ) }
                        
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={(e, { name }) => setActiveItem( name ) }
                    />
                </Menu>
             </nav>
             <div className="dummy"/>
        </HeaderS>
    )
}

export default Header
