import React, { useState } from 'react'

const SearchInput = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex gap-2 xs:w-30 xs:py-2 xs:px-4 xs:bg-white-2 xs:border-2 border-gray/10 rounded-sm'>
      <input className={`${visible ? 'w-20' : 'w-0 '} xs:w-full appearance-none bg-inherit focus:outline-none`} type="text" name='search' placeholder='Search' />
      <img className='w-[20px] cursor-pointer' src="/ic_search.svg" alt="" onClick={() => { setVisible(!visible) }} />
    </div>
  )
}

export default SearchInput