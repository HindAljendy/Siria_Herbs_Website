import React, { useState } from 'react'
import './ContactMessages.css'

const ContactMessages = () => {




  const handleSubmit= ()=>{
    console.log(fullname,email,message)
  }
  const [fullname,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  return (
    <div className='ra-contact-msg-wrapper'>
      <div className='ra-contact-msg-title'>
        <h3>تواصل معنا </h3>
      </div>

      <div className='ra-contact-msg-rectangle'>
      <div className="ra-contact-msg-form">
       <form onSubmit={handleSubmit}>
        <input placeholder="الاسم الكامل" />
        <input placeholder="البريد الإلكتروني"/>
        <textarea placeholder="اكتب رسالتك"/>
        <div className='button-div'>
        <input type="submit" value="إرسال" />
        </div>
       </form>
      </div>
      </div>

      
    </div>
  )
}

export default ContactMessages
