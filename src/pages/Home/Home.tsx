import React from 'react'
import Product_Section from '../../componnents/Product_section/Product_Section'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Iso from '../../componnents/Iso/Iso'
import Store from '../../componnents/Store/History-Story'
import Evaluations from '../../componnents/Evaluations/Evaluations'
import Quote from '../../componnents/Quote/Quote'


const Home = () => {
  return (
    <>
      <Product_Section />
      <Store />
      <Evaluations/>
      <Iso />
      <PrivacyPolicy />
      <Quote/>
  
    

    </>
  )
}

export default Home