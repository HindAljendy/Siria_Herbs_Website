import React, { useEffect } from 'react'
import './Contact.css'
import ContactMessages from '../../componnents/ContactMessages/ContactMessages'
import ContactSocialMedia from '../../componnents/ContactSocialMedia/ContactSocialMedia'
import ContactHero from '../../componnents/ContactHero/ContactHero'
import './Contact.css'
import { ColorContext } from '../../Contexts/ColorContext'
function Contact() {
  const { setBrandColor } = React.useContext(ColorContext);

  useEffect(()=>{
    setBrandColor('#283760')
  },[])

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