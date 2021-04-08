import React from 'react'
import styled from "styled-components"
import Banner from "../organism/banner.homepage"
import Portfolio from "../organism/portfolio.homepage"
import Service from "../organism/service.homepage"
import About from "../organism/about.homepage"
import Contact from "../organism/contact.hompage"
import { Helmet } from "react-helmet"
import logo from "../../assets/images/GD..png"
import fav from "../../assets/images/favicon.ico"
import Layout from '../layout/layout'
const Div = styled.div`
`

const Homepage = () => {
    return (
        <Layout>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>GD.</title>
                        <link rel="canonical" href="georgedesigns.in" />
                        <link rel="shortcut icon" href={fav} type="image/x-icon" />
                        <meta property="og:title" content="GD."/>
                        <meta property="og:description" content="Will Make the Digital Beautiful."/>
                        <meta property="og:image" content={logo}/>
                        <meta property="og:url" content="https://georgedesigns.in"/>
                    </Helmet>
             <Banner/>
             <Portfolio/>
             <Service/>
             <About/>
             <Contact/>
        </Layout>
    )
}

export default Homepage
