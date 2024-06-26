import React from 'react'
import SectionHeader from '../componnents/HomeSectionHeader/SectionHeader'

const Home = () => {
  return (
    <div>
         <SectionHeader title="منتجاتنا"
              directionclass='ra-section-line-left'/>


        <SectionHeader title="تاريخ وقصة سيريا للمنتجات الطبيعية"
              directionclass='ra-section-line-right'/>


        <SectionHeader title="قيمنا"
              directionclass='ra-section-line-left'/>


        <SectionHeader title="شهادة الآيزو 9001"
              directionclass='ra-section-line-right'/>
    </div>
  )
}

export default Home
