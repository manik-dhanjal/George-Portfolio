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
                        <title>George's Design</title>
                        <link rel="canonical" href="http://mysite.com/example" />
                        <link rel="shortcut icon" href={fav} type="image/x-icon" />
                        <meta property="og:title" content="George's Design"/>
                        <meta property="og:description" content="This is a portfolio of Greorge"/>
                        <meta property="og:image" content={logo}/>
                        <meta property="og:url" content="https://george-design.netlify.app/"/>
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
