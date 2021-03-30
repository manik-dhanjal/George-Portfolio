import React,{useState} from 'react'
import styled from "styled-components"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from '../atom/input'
import Button from '../atom/button'


const Div = styled.div`
.inline-boxes{
    display:flex;
    &>div{
        width:50%;
    }
}
width:100%;
.react-tel-input{
    margin:10px;
}
.react-tel-input .form-control {
  border: 1px solid #C4C4C4!important;
  height:52px!important;
  width: 100%!important;
  font-size: 18px!important;
  border-radius:0!important;
}

.react-tel-input .flag-dropdown {
  border: 1px solid #C4C4C4!important;
  border-right: none!important;
}

.react-tel-input .flag-dropdown {

    border: 1px solid #C4C4C4!important;
    border-right: none!important;
    border-radius:0!important;
    height:100%;
    }
.submit-btn{
    border:1px solid #C4C4C4;
    color:#0051FF;
    padding:15px 25px;
    font-size:1.5em;
    background:white;
    text-align:center;
    max-width:200px;
    width:100%;
    cursor:pointer;
    transition:0.3s ease;
    margin:20px auto;
    display:block;
    &:hover{
        color:#FFFFFF;
        background:#0051FF;
        border-color:#0051FF;
    }
}
@media screen and (max-width:1440px){
.submit-btn{
    padding:10px 15px;
    font-size:1.2em;
    max-width:150px;
}
.react-tel-input .form-control {
    border: 1px solid #C4C4C4!important;
    height:42px!important;
    width: 100%!important;
    font-size: 0.9em!important;
}
}
`

const ContactForm = () => {
    const [contactData,setContactData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        companyName:"",
        companyUrl:"",
        message:""
    })
    const handleChange = (e) =>{

        if(!e.target)  setContactData({...contactData,phone:e})
        else setContactData({...contactData,[e.target.name]:e.target.value})
    }
    return (
        <Div>
            <form>
                <div className="inline-boxes">
                <Input placeholder="First Name" value={contactData.firstName} name="firstName" type="text" onChange={handleChange}/>
                <Input placeholder="Last Name" value={contactData.lastName} name="lastName" onChange={handleChange}/>
                </div>
                <div className="inline-boxes">
                <PhoneInput country={'in'}  value={contactData.phone} onChange={handleChange} />
                <Input placeholder="Email Address" value={contactData.email} name="email" type="email" onChange={handleChange}/>
                </div>
                <div className="inline-boxes">
                <Input placeholder="Company Name" value={contactData.companyName} name="companyName" type="text" onChange={handleChange}/>
                <Input placeholder="Company URL" value={contactData.companyUrl} name="companyUrl" type="text" onChange={handleChange}/>
                </div>
                <Input placeholder="Message" value={contactData.message} name="message" type={"textarea"} onChange={handleChange}/>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </Div>
    )
}

export default ContactForm
