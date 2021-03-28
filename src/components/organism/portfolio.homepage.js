import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import { Tab } from 'semantic-ui-react'
import BrandDesign from "../molecules/brand-design.portfolio"
import UiUxDesign from "../molecules/ui-ux-design.portfolio"
import Illustration from "../molecules/illustration.portfolio"
const Div = styled.div`
scroll-snap-align:start;
position:relative;
height:100vh;
background:linear-gradient(107.56deg, #0051FF 0%, #0043D3 100%);
overflow:hidden;
.portfolio-section{
    padding:0 50px;
}
.head{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:10px;
    h2{
        color:white;
    }
    p{
        max-width:600px;
        color:white;
        text-align:center;
    }
}
.portfolio-tabs .menu{
    justify-content: center;
    border-bottom: none!important;
    padding-top:20px;
    a{
        color:white;
    }
    a.active{
        color:white!important;
        border-bottom:2px solid white!important;
    }
    a:hover{
        color:white!important;
    }
}
`
const Portfolio = () => {
    const panes = [
        {
          menuItem: 'UI/UX Designs',
          render: () => <UiUxDesign/>,
        },
        {
          menuItem: 'Brand Designs',
          render: () => <BrandDesign/>,
        },
        {
          menuItem: 'Illustration',
          render: () => <Illustration/>,
        },
      ]
      
    return (
        <Div>
            <Layout logoColor={false} menuColor={false}>
                <section className="portfolio-section">
                    <div className="head">
                        <h2>Portfolio</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="portfolio-tabs">
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    </div>
                </section>
            </Layout>
        </Div>
    )
}

export default Portfolio
