import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import SearchInput from './SearchInput';


const Navbar = () => {
  return (
    <div className='h-[12%] w-full  border-b-[1px] border-gray/10 flex align-center justify-between'>
      <div className='h-full w-max flex items-center gap-6'>
        <img className='w-[20px] md:hidden' src="/ic_burgermenu.svg" alt="" />
        <SearchInput />
      </div>
      <div className='flex gap-8 pr-[5%]'>
        <img className='w-[20px] cursor-pointer' src="/ic_notifications_active.svg" alt="" />
        <img className='w-[20px] cursor-pointer' src="/ic_chat.svg" alt="" />
        <div className='flex items-center gap-2 cursor-pointer'>
          <div className="w-[40px] h-[40px] rounded-full relative overflow-hidden">
            <div className="w-[48px] h-[48px] left-0 top-0 absolute bg-stone-300 rounded-full" />
            <img className="scale-125 object-cover left-0 top-[2px] absolute" src="/user_avatar.jpeg" />
          </div>
          <h2 className='hidden xs:block font-medium text-dark-blue'>Admirra John</h2>

          <img className='w-[20px]' src="/ic_down.svg" alt="" />

        </div>

      </div>
    </div>
  )
}

export default Navbar