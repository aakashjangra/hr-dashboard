import React from 'react'

const Sidebar = () => {
  return (
    <div className="hidden xs:flex h-screen min-w-max md:w-[17.5%] pt-14 md:pt-5 flex-col items-center gap-8 bg-white-2 border-r-[1px] border-gray/10">
      <div className="p-5 md:p-2.5">
        <div className="h-12 text-3xl md:text-[2.75rem] font-semibold md:drop-shadow-md">WeHR</div>
      </div>
      <div className='w-full flex flex-col items-center md:items-start gap-12 md:gap-10 md:mr-4'>
        <div className='md:pl-7 flex flex-col items-center md:items-start gap-10 md:gap-7'>

          <h3 className="font-['Roboto'] uppercase text-gray/50 font-medium text-sm">main menu</h3>

          <div className='flex flex-col gap-10 md:gap-7'>
            <div className='flex gap-4'>
              <img src="/ic_dashboard.svg" alt="" />
              <p className="xs:hidden md:inline text-red font-medium text-lg">Dashboard</p>
            </div>
            <div className='flex gap-4'>
              <img src="/ic_recruitment.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Recruitment</p>
            </div>
            <div className='flex gap-4'>
              <img src="/ic_calendar.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Schedule</p>
            </div>
            <div className='flex gap-4'>
              <img src="/ic_employee.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Employee</p>
            </div>
            <div className='flex gap-4'>
              <img src="/ic_department.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Department</p>
            </div>
          </div>
        </div>
        <div className='md:pl-7 flex flex-col items-center md:items-start gap-10 md:gap-7'>

          <h3 className="font-['Roboto'] uppercase text-gray/50 font-medium text-sm">Other</h3>

          <div className='flex flex-col gap-10 md:gap-7'>

            <div className='flex gap-4'>
              <img src="/ic_support.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Support</p>
            </div>
            <div className='flex gap-4'>
              <img src="/ic_settings.svg" alt="" />
              <p className="xs:hidden md:inline text-gray font-medium text-lg">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar