import React from 'react'
import styled from "styled-components"
import svg from "../../assets/images/banner-svg.svg"
import Layout from '../layout/layout'
const Div =  styled.div`
scroll-snap-align:start;
overflow:hidden;
position:relative;
height:100vh;
.banner{
    display:flex;
    height:calc( 100vh - 54px );
    padding:0 50px;
}
.banner-content{
    width:50%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-right:50px;
    h1{
        max-width:350px;
        color:#0051FF;
    }
    p{
        max-width:500px;
    }
}
.banner-svg{
    width:50%;
    padding-left:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
}
`

const Banner = () => {
    return (
        <Div id="Intro">
            <Layout currentMenu="Intro">
                <div className="banner">
                    <div className="banner-content">
                        <h1>Will Make the Digital Beautiful.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <div className="banner-svg">
                        <div className="img-cont">
                            <img src={svg} alt="banner svg"/>
                        </div>
                    </div>
                </div>
            </Layout>
        </Div>
    )
}

export default Banner
