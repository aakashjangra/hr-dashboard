import React from 'react'

const ScheduleAddTeamMember = () => {
  return (
    <div className='h-max w-max'>
      <p className='font-semibold text-2xl'>Add team member</p>
      <p className='font-inter text-lg py-2 text-gray/90'>The following users have access to this meeting:</p>

      <div className="users my-8 flex flex-col gap-3">
        <div className='flex w-full justify-between'>
          <div className='flex gap-3'>
            <img className='object-contain' src="/user_candice.png" alt="" />
            <div>
              <p className='font-medium'>Candice Wu</p>
              <p className='font-roboto font-medium text-gray/90'>candice@untitledui.com</p>
            </div>
          </div>
          <button className="text-dark-red font-semibold font-roboto">Remove</button>
        </div>
        <div className='flex w-full justify-between'>
          <div className='flex gap-3'>
            <div className='bg-light-blue w-[40px] h-[40px] rounded-full flex items-center justify-center'>
              <img className='object-contain' src="/user_demi.png" alt="DW" />
            </div>
            <div>
              <p className='font-medium'>Candice Wu</p>
              <p className='font-roboto font-medium text-gray/90'>candice@untitledui.com</p>
            </div>
          </div>
          <button className="text-dark-red font-semibold font-roboto">Remove</button>
        </div>  <div className='flex w-full justify-between'>
          <div className='flex gap-3'>
            <img className='object-contain' src="/user_candice.png" alt="" />
            <div>
              <p className='font-medium'>Candice Wu</p>
              <p className='font-roboto font-medium text-gray/90'>candice@untitledui.com</p>
            </div>
          </div>



          <button className="text-dark-red font-semibold font-roboto">Remove</button>
        </div>
      </div>

      <button className='select-team-member w-full flex flex-col items-start gap-2'>
        <p className='font-medium text-black/70'>Team member</p>
        <div className='flex items-center justify-between border-2 border-gray/20 rounded-md p-3 gap-2 w-full'>
          <div className='flex gap-2'>
            <img src="/ic_user.svg" alt="" />
            <div className=" text-gray  font-normal font-inter">Select team member</div>
          </div>
          <img className='w-6 opacity-[50%]' src="/ic_down.svg" alt="" />
        </div>
      </button>

      <button className='mt-12 py-2 px-14 rounded-md bg-red text-white'>Confirm</button>
    </div>
  )
}

export default ScheduleAddTeamMember