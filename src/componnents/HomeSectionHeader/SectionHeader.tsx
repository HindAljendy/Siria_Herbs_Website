import React from 'react'
import './SectionHeader.css'
import { SectionHeaderProps } from '../../types/types'

const SectionHeader:React.FC<SectionHeaderProps> = ({title,directionclass}) => {
  return (
    <div className='ra-section-header'>
      <div className='ra-section-title'>
        <h2>{title}</h2>
      </div>
      <div className={directionclass}>

      </div>
    </div>
  )
}

export default SectionHeader
