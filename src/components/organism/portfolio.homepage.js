import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import { Tab } from 'semantic-ui-react'
import BrandDesign from "../molecules/brand-design.portfolio"
import UiUxDesign from "../molecules/ui-ux-design.portfolio"
import Illustration from "../molecules/illustration.portfolio"

const Div = styled.div`
background:linear-gradient(107.56deg, #0051FF 0%, #0043D3 100%);
margin-bottom:10px;
.portfolio-section{
    padding:50px;
    min-height:100vh;
}
.head{
    padding-top:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-bottom:30px;
    h2{
        color:white;
    }
    p{
        max-width:800px;
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
        font-size:1.5em;
    }
    a.active{
        color:white!important;
        border-bottom:2px solid white!important;
    }
    a:hover{
        color:white!important;
    }
}
.portfolio-tabs {
&>div{
    display:flex;
    flex-direction:column;
    height:100%;
}
}
@media screen and (max-width:1440px){
    .portfolio-section{
        padding:30px 50px;
    }
    .head{
        padding-top:0px;
        margin-bottom:0px;
        padding-bottom:15px;
        p{
            max-width:650px;
        }
    }
    .portfolio-tabs .menu{
        padding-top:15px;
        a{
            color:white;
            font-size:1.1em;
        }
    }
}
@media screen and (max-width:1280px){

    .head{
        margin-top:10px;
        margin-bottom:0px;
    }
    .portfolio-tabs .menu{
        a{
            color:white;
            font-size:1em;
        }
    }
}
@media screen and (max-width:1024px){
    .portfolio-section{
        min-height:auto;
    }
}
@media screen and (max-width:700px){
    .portfolio-section{
        padding:30px;
        min-height:auto;
    }
    
    .head{
        padding-top:0px;
        padding-bottom:20px;
        max-width:100%;
        h2{
            color:white;
        }
        p{
            max-width:600px;
            color:white;
            text-align:center;
            font-size:0.9em;
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
        <Div id="portfolio">
                <section className="portfolio-section">
                    <div className="head">
                        <h2>Portfolio</h2>
                        <p>It means that all my solutions begin with brand research and all of our work is catered to enhance and work with the brand at hand. It means we are always exploring the new, always innovating, with a focus on creative storytelling.</p>
                    </div>
                    <div className="portfolio-tabs">
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    </div>

                </section>
        </Div>
    )
}

export default Portfolio
