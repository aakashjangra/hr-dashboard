import React from 'react'

const ScheduleTime = () => {
  return (
    <div className='h-max w-max'>
      <p className='font-semibold text-2xl'>Select a time for meeting</p>
      <p className='font-inter text-lg py-2 text-gray/90'>The following time will be set for the meeting:</p>

      <div className='flex gap-2 pt-8 pb-2'>
        <div contentEditable className='bg-gray/30 w-14 h-12 py-2.5 text-xl overflow-hidden rounded-lg text-center'>0</div>
        <div contentEditable className='bg-gray/30 w-14 h-12 py-2.5 text-xl overflow-hidden rounded-lg text-center'>0</div>
        <div contentEditable className='bg-gray/30 w-14 h-12 py-2.5 text-xl overflow-hidden rounded-lg text-center'>0</div>
        <div contentEditable className='bg-gray/30 w-14 h-12 py-2.5 text-xl overflow-hidden rounded-lg text-center'>0</div>
      </div>
      <p className='text-gray/40 text-sm font-inter'>Time in 24 hr format</p>
      <button className='mt-12 py-2 px-14 rounded-md bg-red text-white'>Next</button>
    </div>
  )
}

export default ScheduleTime