import React from 'react'
import styled from "styled-components";
import Header from "./header"
import 'semantic-ui-css/semantic.min.css';

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
