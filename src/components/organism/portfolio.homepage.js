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
main,.portfolio-section{
    height:calc( 100vh - 70px );
}
.head{
    padding-top:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom:30px;
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
@media screen and (max-width:1440px){
    main,.portfolio-section{
        height:calc( 100vh - 54px );
    }
    .head{
        padding-top:10px;
        margin-bottom:0px;
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
        padding-top:20px;
        a{
            color:white;
            font-size:1em;
        }
    }
}
@media screen and (max-width:700px){
    .portfolio-section{
        padding:0px;
    }
    .head{
        padding-top:0px;
        margin-bottom:20px;
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
        <Div id="Portfolio">
            <Layout logoColor={false} menuColor={false} currentMenu="Portfolio">
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
