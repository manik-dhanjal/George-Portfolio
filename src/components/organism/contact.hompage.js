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
    &>div{
        width:50%;
    }
    .contact-form{
        padding-left:30px;
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
        padding-right:30px;
        p{
            max-width:400px;
            font-size:0.9em;
        }
        .contact-details{
            margin-top:40px;
            .detail{
                display:flex;
                flex-direction:column;
                margin-bottom:15px;
                strong{
                    margin-bottom:5px;
                    font-size:1.1em;
                }
                a{
                    color:white;
                    font-size:0.9em;
                    &:hover{
                        color:white;
                    }
                }
            }
        }
    }
}
`
const Contact = () => {
    return (
        <Div id="Contact">
            <Layout logoColor={false} currentMenu="Contact">
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
