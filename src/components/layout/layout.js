import React from 'react'
import styled from "styled-components";
import Footer from "./footer"
import Header from "./header"
import 'semantic-ui-css/semantic.min.css';
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
const Div = styled.div`

`

const Layout = ({children,logoColor,menuColor,currentMenu,sm}) => {
    return (
        <Div>
            <Header logoColor={logoColor} menuColor={menuColor} currentMenu={currentMenu} sm={sm}/>
            <main>
                 {children}
            </main>
            {/* <Footer/> */}
        </Div>
    )
}

export default Layout
