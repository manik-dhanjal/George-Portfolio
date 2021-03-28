import React from 'react'
import styled from "styled-components"
import Banner from "../organism/banner.homepage"
import Portfolio from "../organism/portfolio.homepage"
import Service from "../organism/service.homepage"
import About from "../organism/about.homepage"
import Contact from "../organism/contact.hompage"
const Div = styled.div`
scroll-snap-type:y mandatory;
overflow-y:scroll;
height:100vh;
scroll-behavior: smooth;
`

const Homepage = () => {
    return (
        <Div>
             <Banner/>
             <Portfolio/>
             <Service/>
             <About/>
             <Contact/>
        </Div>
    )
}

export default Homepage
