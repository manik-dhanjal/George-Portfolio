import React from 'react'
import styled from "styled-components"
import ContactForm from '../molecules/contact-form.contact'
const Div = styled.div`

.contact-section{
    display:flex;
    min-height:calc( 100vh - 50px );
    margin:0 auto;
    &>div{
        width:50%;
    }
    .contact-form{
        padding:50px 120px 50px 50px;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#f3f3f3;
    }
    .address{
        background:#0051FF;
        color:white;
        display:flex;
        justify-content:center;
        flex-direction:column;
        padding-right:50px;
        padding:50px 50px 50px 120px;
        p{
            max-width:600px;
        }
        .contact-details{
            margin-top:40px;
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
                max-width:350px;
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

      .contact-section{
          flex-direction:column;
          .contact-form{
            width:100%;
            padding:50px 10px;
            flex:1;
        }
       
        .address{
            width:100%;
            padding:0px;
            min-height:max-content;
            height:40%;
            padding:50px 30px;
            text-align:center;
            p{
                margin:5px auto;
            }
            .contact-details{
                padding-bottom:0px;
            }
        }
      }
}
`

const Contact = () => {

    return (
        <Div id="contact">
                <section className="contact-section">
                    <div className="address">
                        <h2>Address</h2>
                        <p>Discover a new side to your company with a dedicated & innovative Looking to rebrand or start from the scratch?<br/> Give us a call, our experienced branding team is here to guide you through the process.</p>

                        <div className='contact-details'>
                            <div className='detail'>
                                <strong>Email</strong>
                                <a href='mailto:george.p.chettupezha@gmail.com'>george.p.chettupezha@gmail.com</a>
                            </div>
                            <div className='detail'>
                                <strong>Contact</strong>
                                <a href='tel:+91 99404 34768'>+91 99404 34768</a>
                            </div>
                            <div className='detail'>
                                <strong>Office</strong>
                                <a href='https://goo.gl/maps/SzgXNvPWVCEJnU2i9' target="_blank" rel="noreferrer">Chennai, India</a>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <ContactForm/>
                    </div>
                </section>
        </Div>
    )
}

export default Contact
