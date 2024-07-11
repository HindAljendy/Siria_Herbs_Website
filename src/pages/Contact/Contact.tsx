import React from 'react'
import './Contact.css'
import ContactMessages from '../../componnents/ContactMessages/ContactMessages'
import ContactSocialMedia from '../../componnents/ContactSocialMedia/ContactSocialMedia'
import ContactHero from '../../componnents/ContactHero/ContactHero'
import './Contact.css'
function Contact() {


  return (
    <>
    <div className='HJ_contact'>
      <ContactHero/>
      <ContactSocialMedia/>
      <ContactMessages/>
    </div>
  
      
    </>
  )
}

export default Contact