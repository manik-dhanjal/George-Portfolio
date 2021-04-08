import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import george from "../../assets/images/Profile Photo.png"

const Div = styled.div`
.about-section{
    padding:30px 130px;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: calc( 100vh - 54px );
    width:100%;
    margin:0 auto;
    margin-bottom:20px;
    .george-img{
        height: 100%;
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
        padding-left:50px;
        width:60%;
        flex:1;
        .content-about,.worked-in,.worked-for{
            display:flex;
            margin-bottom:40px;
            h2,h3{
                margin:0;
                margin-right:30px;
                min-width:180px;
            }
        }
        h2,h3,h4{
            color:#0051FF;
        }
        p{
            font-size:18px;
            margin-bottom:5px;
        }
        .worked{
            padding-bottom:10px;
            h4{
                padding-bottom:3px;
                font-size:18px;
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
                    min-width:150px;
                }
            }
            .worked{
                padding-bottom:10px;
                h4{
                    padding-bottom:3px;
                    font-size:13px;
                    margin:0;
                    font-family:poppins;
                }
            }
            .worked-in,.worked-for{
                .companies{
                    .left{
                        width:50%;
                    }
                    
                }
            }
            padding-left:30px;
            h2,h3{
                color:#0051FF;
            }
            p{
                font-size:14px;
                margin-bottom:3px;
            }
        }    
    }
}
@media screen and (max-width:1280px){
    .about-section {
        .content{
            padding-left:30px;
            .content-about,.worked-in,.worked-for{
                h2,h3{
                    margin-right:30px;
                    min-width:100px;
                }
            }
            h2,h3{
                color:#0051FF;
            }
            p{
                font-size:11px!important;
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
            padding-top:20px;
            .content-about,.worked-in,.worked-for{
                flex-direction:column;
                h2,h3{
                    margin-bottom:15px;
                }
                h3{
                    font-size:18px;
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
                                I am a self-taught Graphic & UX/UI designer with 3+ years of experience in the creative industry. I have treaded across different technologies of the past and the present. My curiosity feeds my passion and puts them to use by various creative problems solving. I am open to exploring new possibilities and honing my skills to enhance my workflow in the field of user interface and user experience design I have a keen passion for front-end development as it adds fuel to my career for a long time investment. Languages such as HTML, CSS, SASS/SCSS, Bootstrap are well-known languages.
                                <br/><br/>
                                I am in the process of gaining knowledge of Javascript, JS, Jquery, GSAP as well as learning React
                            </p>
                        </div>
                        <div className="worked-in">
                            <h3>Building</h3>
                            <div className="companies">
                                <div className='left'>
                                    <div className="worked">
                                        <h4>Freelancer Professional</h4>
                                        <p>UI/UX designer</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Netart Design & Development Agency</h4>
                                        <p>Graphic, UI/UX designer & Illustrator</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Growth Ladders</h4>
                                        <p>Graphic, UI/UX designer & Illustrator</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="worked">
                                        <h4>Wedding Vows</h4>
                                        <p>Graphic designer & Illustrator</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Nittany Creative Solutions</h4>
                                        <p>Graphic designer & Illustrator</p>
                                    </div>
                                    <div className="worked">
                                        <h4>Zero Gravity Photography (Intern)</h4>
                                        <p>Graphic designer & Illustrator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="worked-for">
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
                        </div>
                    </div>
                </div>
            {/* </Layout> */}
        </Div>
    )
}

export default About
