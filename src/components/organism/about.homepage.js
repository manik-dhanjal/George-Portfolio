import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import george from "../../assets/images/george-img.png"
const Div = styled.div`
scroll-snap-align:start;
position:relative;
height:100vh;
overflow:hidden;

main{
    height: calc( 100vh - 54px );
}
.about-section{
    padding:30px 50px;
    display:flex;
    height: 100%;
    &>div{
        width:50%;
    }
    .george-img{
        height: 100%;
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
        padding-left:30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2,h3{
            color:#0051FF;
        }
        h3{
            margin-top:15px;
            margin-bottom:5px;
            font-family:poppins!important;
        }
        p{
            font-size:0.85em;
            margin-bottom:3px;
        }
        .worked-in{
            .companies{
                display:flex;
                &>div{
                    width:150px;
                }
            }
        }
        .worked-for{
            margin-top:20px;
        }
    }
}
`

const About = () => {
    return (
        <Div id="About">
            <Layout currentMenu="About">
                <div className='about-section'>
                    <div className='george-img'>
                        <div className='img-cont'>
                            <img src={george} alt="george"/>
                        </div>
                    </div>
                    <div className = "content">
                        <h2>About</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="worked-in">
                            <h3>Companies worked for as a freelancer</h3>
                            <div className="companies">
                                <div className='left'>
                                    <p>Netart</p>
                                    <p>Growladders</p>
                                    <p>Chaayos</p>
                                    <p>Sync</p>
                                </div>
                                <div className="right">
                                    <p>Transabel</p>
                                    <p>Thotbox</p>
                                    <p>Monkey Mind</p>
                                    <p>Glastone</p>
                                </div>
                            </div>
                        </div>
                        <div className="worked-for">
                            <h3>Companies worked for</h3>
                            <div className="companies">
                                <p>Wedding Vows</p>
                                <p>Nittany Creative Solutions</p>
                                <p>Zero Gravity Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Div>
    )
}

export default About
