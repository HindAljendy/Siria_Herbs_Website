import React, { useEffect, useState } from 'react'
import './ContactSocialMedia.css'

import whatsapp from '../../assets/icons/whatsapp.svg'
import call from '../../assets/icons/call.svg'

import { ContactSocialProps, TContactSocialMediaData } from '../../types/types';
import { getSocialMediaData } from '../../services/services'


//social media details component


const SocialContact :React.FC<ContactSocialProps>= ({icon,title,details}) =>{

    return (
    <div className='ra-social-contact'>

      <div className='ra-social-div1'>
      <img  style={{width:'30px',height:'30px'}} src={icon}/>
      <h6 style={{fontSize:'1.5rem',fontWeight:'var(--bold-weight)'}}>{title}</h6>
      </div>
      <div className='ra-social-div2'>
      <span>{details}</span>
      </div>
    
    </div>
    )

}



const ContactSocialMedia = () => {

  const [contacts,setContacts]=useState<TContactSocialMediaData>();
  useEffect(()=>setContacts(await getSocialMediaData()),[]);
  return (
    <div className='ra-social-section'>
      <div className="ra-social-contact1">
           <SocialContact icon={whatsapp} title='البريد الإلكتروني' details=' info@siriaherbs.com'/>
      <div className='vertical-line'></div>
           <SocialContact icon={whatsapp} title='رقم الواتساب' details='+963 41 2020 '/>
      <div className='vertical-line'></div>

           <SocialContact icon={call} title='رقم الهاتف' details='+963 41 2020 '/>
      <div className='vertical-line'></div>
          </div>

      <div className="ra-social-line">

      </div>

      <div className="ra-social-contact2">

      <SocialContact icon={whatsapp} title='البريد الإلكتروني'/>
      <div className='vertical-line'></div>
           <SocialContact icon={whatsapp} title='البريد الإلكتروني'/>
      
      </div>
    </div>
  )
}

export default ContactSocialMedia
