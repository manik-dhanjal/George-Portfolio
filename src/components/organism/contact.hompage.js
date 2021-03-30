import React from 'react'
import styled from "styled-components"
import Layout from '../layout/layout'
import ContactForm from '../molecules/contact-form.contact'
const Div = styled.div`
scroll-snap-align:start;
position:relative;
height:100vh;
overflow:hidden;
background:linear-gradient(
    to right, 
    #0051FF,
    #0051FF 50%,
    #FFFFFF 50%,
    #FFFFFF 50%,
    #FFFFFF 50%
  );
  main{
      height:calc( 100vh - 54px );
  }
.contact-section{
    padding:0 50px;
    display:flex;
    height:100%;
    max-width:1600px;
    margin:0 auto;
    &>div{
        width:50%;
    }
    .contact-form{
        padding-left:50px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .address{
        color:white;
        display:flex;
        justify-content:center;
        flex-direction:column;
        height:100%;
        padding-right:50px;
        p{
            max-width:600px;
            font-size:18px;
        }
        .contact-details{
            margin-top:40px;
            padding-bottom:50px;
            .detail{
                display:flex;
                flex-direction:column;
                margin-bottom:30px;
                strong{
                    margin-bottom:10px;
                    font-size:20px;
                }
                a{
                    color:white;
                    font-size:18px;
                    &:hover{
                        color:white;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:1440px){

    .contact-section{
        padding:0;
        .contact-form{
            padding-left:30px;
        }
        .address{
            padding-right:30px;
            p{
                max-width:400px;
                font-size:0.9em!important;
            }
            .contact-details .detail{
                margin-bottom:15px;
                strong{
                    margin-bottom:5px;
                    font-size:1.1em;
                }
                a{
                    color:white;
                    font-size:12px;
                
                }
            }
        }
    } 
}
@media screen and (max-width:1024px){
    background:linear-gradient(
        to top, 
        #0051FF,
        #0051FF 50%,
        #FFFFFF 50%,
        #FFFFFF 50%,
        #FFFFFF 100%
      );
      .contact-section{
          flex-direction:column-reverse;
          .contact-form{
            width:100%;
            padding:0px;
            height:50%;
        }
        .address{
            width:100%;
            padding:0px;
            height:50%;
            text-align:center;
            .contact-details{
                padding-bottom:0px;
            }
        }
      }
}
`
const Contact = () => {
    return (
        <Div id="Contact">
            <Layout logoColor={window.innerWidth<=1024} currentMenu="Contact" >
                <section className="contact-section">
                    <div className="address">
                        <h2>Address</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

                        <div className='contact-details'>
                            <div className='detail'>
                                <strong>Email</strong>
                                <a href='#'>info@growthladders.in</a>
                            </div>
                            <div className='detail'>
                                <strong>Contact</strong>
                                <a href='#'>813-389-5955</a>
                            </div>
                            <div className='detail'>
                                <strong>Office</strong>
                                <a href='#'>Chennai, India</a>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <ContactForm/>
                    </div>
                </section>
            </Layout>
        </Div>
    )
}

export default Contact
