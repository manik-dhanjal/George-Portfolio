import React from 'react'
import styled from "styled-components";
import Footer from "./footer"
import Header from "./header"
import 'semantic-ui-css/semantic.min.css';

const Div = styled.div`
position: absolute;
inset: 0px;
clip: rect(0px, auto, auto, 0px);
padding:0 50px;
max-width:1200px;
margin: 0 auto;
`

const Layout = ({children,logoColor,menuColor,currentMenu}) => {
    return (
        <Div>
            <Header logoColor={logoColor} menuColor={menuColor} currentMenu={currentMenu}/>
            <main>
                 {children}
            </main>
            {/* <Footer/> */}
        </Div>
    )
}

export default Layout
