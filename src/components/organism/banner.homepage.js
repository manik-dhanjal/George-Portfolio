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
        max-width:570px;
        color:#0051FF;
    }
    p{
        max-width:700px;
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
    .img-cont{
        height:100%;
        width:100%;
    }
}
@media screen and (max-width:1440px){
    .banner-content{
        h1{
            max-width:460px;
        }
        p{
            max-width:550px;
        }
    }
}
@media screen and (max-width:1280px){
    .banner-content{
        h1{
            max-width:350px;
        }
        p{
            max-width:500px;
        }
    }
}
@media screen and (max-width:1024px){
    .banner{
        flex-direction:column;
        padding-top:50px;
        padding-bottom:50px;
        &>div{
            width:100%;
            height:70%;
            padding:0px!important;
        }
        .banner-content{
            height:30%;
            align-items:center;
            justify-content:center;
            text-align:center;
        }
    }
}
@media screen and (max-width:700px){
    .banner{
        padding:30px 0;
        justify-content:center;
        .banner-content{
            height:min-content;
            margin-bottom:30px;
        }
        .banner-svg{
            height:50%!important;
        }
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
