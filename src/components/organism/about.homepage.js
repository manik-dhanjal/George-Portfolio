import React from 'react'
import styled from "styled-components"
import george from "../../assets/images/Profile Photo.png"

const Div = styled.div`
.about-section{
    padding:0px 130px;
    display:flex;
    justify-content:center;
    align-items:stretch;
    min-height: calc( 100vh - 54px );
    width:100%;
    margin:0 auto;
    
    .george-img{
        width:40%;
        padding-right:30px;
        .img-cont{
            overflow:hidden;
            height: 100%;
        }
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .content{
        padding-left:0px;
        padding-top:30px;
        width:60%;
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:center;
        .content-about,.worked-in,.worked-for{
            display:flex;
            margin-bottom:40px;
            h2,h3{
                margin:0;
                margin-right:30px;
                min-width:130px;
                max-width:130px;
            }
        }
        h2{
            font-size:32px;
        }
        h3{
            font-size:24px;
        }
        h4{
           color:#1f1f1f;
        }
        h2,h3{
            color:#0051FF;
        }
        p{
            margin-bottom:5px;
        }
        .worked{
            padding-bottom:10px;
         
            h4{
                font-size:16px;
                margin:0;
                font-family:poppins;
            }
        }
        .worked-in,.worked-for{
            .companies{
                display:flex;
                flex:1;
                .left{
                    padding-right:10px;
                    width:50%;
                    margin:0;
                }
                .right{
                    width:50%;
                    padding-left:10px;
                    margin:0;
                }
                
            }
        }
        .worked-for{
            margin-top:20px;
        }
    }

}
@media screen and (max-width:1440px){
    .about-section  {
        .george-img{
            padding-right:30px;
        }
        .content{
            .content-about,.worked-in,.worked-for{
                display:flex;
                margin-bottom:20px;
                h2,h3{
                    margin:0;
                    margin-right:30px;
                    min-width:130px;
                }
            }
            .worked{
                padding-bottom:10px;
                h4{
                    font-size:13px;
                    margin:0;
                    font-family:poppins;
                }
                .italic-name{
                    font-style:italic;
                    margin-bottom:5px;
                    font-size:0.85em!important;
                    font-weight:100!important;
                    color:#464646;
                }
            }
            .worked-in,.worked-for{
                .companies{
                    .left{
                        width:50%;
                    }
                    
                }
            }
            padding-left:0px;
            h2,h3{
                color:#0051FF;
            }
            p{
                font-size:11px;
                margin-bottom:3px;
            }
        }    
    }
}
@media screen and (max-width:1280px){
    .about-section {
        .content{
            padding-left:0px;
            .content-about,.worked-in,.worked-for{
                h2,h3{
                    margin-right:20px;
                    min-width:130px;
                    
                }
            }
            h2,h3{
                color:#0051FF;
            }
            p{
                font-size:10px!important;
                margin-bottom:3px;
            }
        }
    }    
}
@media screen and (max-width:1024px){
    .about-section{
        padding:30px 50px;
        min-height:auto;
        &>div{
            width:100%;
        }
        .content{
            padding:0px;
            padding-top:30px;
        }
    }
}
@media screen and (max-width:700px){
    .about-section{
        flex-direction:column;
        padding:30px;
        .george-img{
            width:100%;
            padding:0;
        }
        .content{
            width:100%;
            padding:0px;

            text-align:center;
            padding-top:20px;
            text-align:centerl;
            h2,h3{
                margin:0;
                margin-right:0px!important;
                min-width:100%!important;
            }
            .content-about,.worked-in,.worked-for{
                    .companies{
                        display:flex;
                        flex-direction:column;
                        flex:1;
                        .left{
                            padding-right:0px;
                            width:100%;
                            margin:0;
                        }
                        .right{
                            width:100%;
                            padding-left:0px;
                            margin:0;
                        }
                        
                    }
                flex-direction:column;
                h2,h3{
                    margin-bottom:15px;
                }
                h3{
                    font-size:18px;
                    max-width:max-content!important;
                }
            }
        }
    }
}
`

const About = () => {
    return (
        <Div >
            {/* <Layout currentMenu="About"> */}
                <div className='about-section'id="about">
                    <div className='george-img'>
                        <div className='img-cont'>
                            <img src={george} alt="george"/>
                        </div>
                    </div>
                    <div className = "content">
                        <div className="content-about">
                            <h2>About</h2>
                            <p className="right-content">
                                A self-taught Visual & UI/UX designer with  3+ years of experience in the creative industry. My curiosity is my driving factor that has helped me tread across different technologies, hone my skills and explore new possibilities. 
                                Proficient in Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, Adobe XD, & Figma. 
                                Simplified design flows and improved accessibility. 
                                <br/><br/>
                                Experienced in competitor and target audience research to focus on increased end-user experience in design interface.
                                Designed web interface for interactive designs by prototyping wireframes and high fidelity mockups. 
                                <br/><br/>
                                Skilled in brand designs - logo, brand design guidelines, color schemes, typography, imagery, icons, illustrations, marketing collaterals, stationery collaterals, and more. 
                                <br/><br/>
                                Working knowledge in HTML, CSS, SASS/SCSS, Bootstrap & WordPress.
                            </p>
                        </div>
                        <div className="worked-in">
                            <h3>Work Experience</h3>
                            <div className="companies">
                                <div className='left'>
                                    <div className="worked">
                                        <h4>Freelancer Professional</h4>
                                        <p className="italic-name">Visual & UI/UX designer</p>
                                        <p>
                                            Sync Media - Chaayos - Chaayos Bazaar - Transabel - Monkeymind - Growth Ladders - RedOptimize - Tony’s Fitness - LimeSoda - Kanakadhara Silks - Evolution Cult - Glastone - WV Connect
                                            <br/><br/>
                                            Presentation design, Marketing collaterals, Website Designs, Logo Designing, Brand Guidelines.
                                        </p>
                                    </div>
                                    <div className="worked">
                                        <h4>Netart Design & Development Agency</h4>
                                        <p className="italic-name">Graphic, UI/UX designer & Illustrator</p>
                                        <p>Pitch deck designs, E-commerce web applications, Logo designing, Marketing collaterals,Testing for development activities.</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Wedding Vows</h4>
                                        <p className="italic-name">Visual & UI/UX designer & Illustrator</p>
                                        <p>
                                        Magazine design, Web designing, Marketing collaterals for events, Event proposals through presentations, Event Direction & Coordination, Assistant creative director in photography, Celebrity Hospitality
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="worked">
                                        <h4>Nittany Creative Solutions</h4>
                                        <p className="italic-name">Visual & UI/UX designer & Illustrator</p>
                                        <p>
                                             Visual designer, Tracing logo works, illustrations, old photo restoration , textiling logo placement, packaging, retouching & color correction
                                        </p>
                                    </div>
                                    <div className="worked">
                                        <h4>Zero Gravity Photography (Intern)</h4>
                                        <p className="italic-name">Graphic designer & Illustrator</p>
                                        <p>
                                            Assistant photographer, wedding photo retouching, visual designer & marketing collaterals
                                        </p>
                                    </div>
                                    {/* <div className="worked">
                                        <h4>Zero Gravity Photography (Intern)</h4>
                                        <p className="italic-name">Graphic designer & Illustrator</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="worked-for">
                            <h3>Basement</h3>
                            <div className="companies">
                                <div className='left'>
                                    <div className="worked">
                                        <h4>Self-Tught Online</h4>
                                        <p>Forever</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Image Creative Education</h4>
                                        <p>C-Tech in graphic designer</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="worked">
                                        <h4>Don Bosco</h4>
                                        <p>Higher Sec. School</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            {/* </Layout> */}
        </Div>
    )
}

export default About
