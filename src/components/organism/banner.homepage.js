import React from 'react'
import styled from "styled-components"
import svg from "../../assets/images/banner-svg.svg"
const Div =  styled.div`

.banner{
    display:flex;
    min-height:100vh;
    padding:0 125px;
    padding-top:54px;
    justify-content:center;
    margin-bottom:20px;
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
        justify-content:center;
        flex-direction:column;
        padding-top:50px;
        padding-bottom:50px;
        padding:50px;
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
            margin-bottom:30px;
        }
    }
}
@media screen and (max-width:700px){
    .banner{
        padding:50px 30px;
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
        <Div id="intro">
            {/* <Layout currentMenu="Intro"> */}
                <div className="banner">
                    <div className="banner-content">
                        <h1>Will Make the Digital Beautiful.</h1>
                        <p>I am a self-taught Graphic & UX/UI designer with 3+ years of experience in the creative industry. I have treaded across different technologies of the past and the present. My curiosity feeds my passion and puts them to use by various creative problems solving. I am open to exploring new possibilities and honing my skills to enhance my workflow in the field of user interface and user experience design</p>
                    </div>
                    <div className="banner-svg">
                        <div className="img-cont">
                            <img src={svg} alt="banner svg"/>
                        </div>
                    </div>
                </div>
            {/* </Layout> */}
        </Div>
    )
}

export default Banner
