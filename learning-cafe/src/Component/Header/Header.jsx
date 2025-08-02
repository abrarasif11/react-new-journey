import React from 'react'
import photo from '../../assets/premium_photo-1731617144678-781ad264740a.jpg';
const Header = () => {
  return (
    <header className='flex justify-between items-center mx-auto p-4 border-b-2'>
      <p className='text-4xl font-bold'>Learning Cafe</p>
      <img className='w-[60px] h-[50px] rounded-full' src={photo} alt="" />
    </header>
  )
}

export default Header
