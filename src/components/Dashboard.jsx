import React, { useState } from 'react'

import { Box, Fade, Modal } from '@mui/material';
import ScheduleTime from './ScheduleTime';
import ScheduleDate from './ScheduleDate';
import ScheduleAddTeamMember from './ScheduleAddTeamMember';

const centeredBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Dashboard = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleModalSelectedSection, setScheduleModalSelectedSection] = useState("time");
  // time, date, add-team-member

  return (
    <div className='dashboard w-full h-full overflow-auto pr-[5%]'>
      <h1 className='text-3xl text-dark-blue mt-9 mb-6 font-medium'>Dashboard</h1>
      <div className='h-full w-full flex flex-col md:flex-row md:gap-10'>

        <div className='h-max md:w-4/6 flex flex-col gap-6'>
          <div className='grid xs:grid-cols-3 gap-6'>
            <div className='bg-light-red py-4 px-7 rounded-xl flex flex-col  gap-4'>
              <p className='text-2xl font-medium'>Available Position</p>
              <p className='font-medium text-5xl'>24</p>
              <p className='text-lg text-red font-["Roboto"]'>4 Urgently needed</p>
            </div>
            <div className='bg-light-blue py-4 px-7 rounded-xl flex flex-col gap-4'>
              <p className='text-2xl font-medium'>Job Open</p>
              <p className='font-medium text-5xl'>10</p>
              <p className='text-lg text-blue font-["Roboto"]'>4 Active hiring</p>
            </div>
            <div className='bg-light-purple py-4 px-7 rounded-xl flex flex-col gap-4'>
              <p className='text-2xl font-medium'>New Employees</p>
              <p className='font-medium text-5xl'>24</p>
              <p className='text-lg text-purple font-["Roboto"]'>4 Department</p>
            </div>

          </div>
          <div className='w-full grid xs:grid-cols-2 gap-6'>
            <div className='flex justify-evenly rounded-xl border-2 border-gray/10 px-6 py-8'>
              <div className='flex flex-col gap-4'>
                <p className='text-2xl font-medium'>Total Employees</p>
                <p className='text-6xl font-semibold'>216</p>
                <div className='mt-2'>
                  <p className='font-["Roboto"] text-gray'>120 Men</p>
                  <p className='font-["Roboto"] text-gray'>96 Women</p>
                </div>
              </div>
              <div className='h-full flex flex-col justify-between items-center '>
                <div className='graph-container w-40 flex flex-col items-center relative'>
                  <p className='text-red font-semibold text-sm ml-[-5px] mb-[-5px]'>{'+2%'}</p>
                  <img className='h-7 w-auto ml-[-5px]' src="/ic_arrow_up.svg" alt="" />
                  <div className='graph w-40 h-auto absolute mt-4'>
                    <img className='absolute w-full' src="/ic_graph_upper_layer.svg" alt="" />
                    <img className='w-full' src="/ic_graph.svg" alt="" />
                  </div>
                </div>

                <p className='w-max p-2 rounded-md bg-light-red font-["Roboto"]'>{'+2% Past month'}</p>
              </div>
            </div>
            <div className='flex justify-evenly rounded-xl border-2 border-gray/10 px-6 py-8'>
              <div className='flex flex-col gap-4'>
                <p className='text-2xl font-medium'>Talent Request</p>
                <p className='text-6xl font-semibold'>16</p>
                <div className='mt-2'>
                  <p className='font-["Roboto"] text-gray'>6 Men</p>
                  <p className='font-["Roboto"] text-gray'>10 Women</p>
                </div>
              </div>
              <div className='h-full flex flex-col justify-between items-center '>

                <div className='graph-container relative w-40 flex flex-col items-center'>
                  <p className='text-red font-semibold text-sm ml-[-5px] mb-[-5px]'>{'+5%'}</p>
                  <img className='h-7 w-auto ml-[-5px]' src="/ic_arrow_up.svg" alt="" />
                  <div className='graph w-40 h-auto absolute mt-4'>
                    <img className='absolute w-full' src="/ic_graph_upper_layer.svg" alt="" />
                    <img className='w-full' src="/ic_graph.svg" alt="" />
                  </div>
                </div>

                <p className='w-max p-2 rounded-md bg-light-red font-["Roboto"]'>{'+5% Past month'}</p>
              </div>
            </div>
          </div>
          <div className='w-full announcements-container border-2 border-gray/10 rounded-2xl py-5 mb-8'>
            <div className="mx-6 max-w-full flex justify-between items-center pb-5">
              <div className="text-xl font-medium ">Announcement</div>
              <div className='flex items-center border-2 border-gray/10 rounded-md px-2 py-1 gap-2'>
                <div className=" text-gray text-sm font-normal font-roboto">Today, 13 Sep 2021</div>
                <img className='w-6 opacity-[50%]' src="/ic_down.svg" alt="" />
              </div>
            </div>

            <div className='mx-6 announcements overflow-y-auto flex flex-col gap-2'>

              <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                <div className="w-full xs:w-none flex flex-col justify-between gap-3 xs:gap-2">
                  <div className="text-lg">Outing schedule for every departement</div>
                  <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">5 Minutes ago</div>
                </div>
                <div className='absolute xs:static bottom-3 right-4'>
                  <div className='flex gap-4'>
                    <img className='w-[20px]' src="/ic_pin.svg" alt="" />
                    <img className='w-[20px]' src="/ic_ellipsis.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                <div className="w-full xs:w-none flex flex-col justify-between gap-3 xs:gap-2">
                  <div className="text-lg">Meeting HR Department</div>
                  <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">Yesterday, 12:30 PM</div>
                </div>
                <div className='absolute xs:static bottom-3 right-4'>
                  <div className='flex gap-4'>
                    <img className='w-[20px] opacity-50' src="/ic_pin.svg" alt="" />
                    <img className='w-[20px]' src="/ic_ellipsis.svg" alt="" />
                  </div>
                </div>
              </div>

              <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                <div className="w-full xs:none flex flex-col justify-between gap-3 xs:gap-2">
                  <div className="text-lg">IT Department need two more talents for UX/UI Designer position</div>
                  <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">Yesterday, 09:15 AM</div>
                </div>
                <div className='absolute xs:static bottom-3 right-4'>

                  <div className='flex gap-4'>
                    <img className='w-[20px] opacity-50' src="/ic_pin.svg" alt="" />
                    <img className='w-[20px]' src="/ic_ellipsis.svg" alt="" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-full text-center text-red font-medium pt-4 border-t border-gray/20 text-xl xs:text-base">See All Announcement</div>
          </div>
        </div>

        <div className='h-max md:w-2/6 flex flex-col xs:flex-row md:flex-col gap-6'>
          <div className='recent-activity h-max md:w-full text-white bg-dark-blue-3 rounded-xl overflow-hidden'>
            <h4 className='text-2xl bg-dark-blue-2 px-6 py-4'>Recent Activity</h4>
            <div className="p-6 pr-10">
              <p className="font-roboto text-xs  text-white/60">10.40 AM, Fri 10 Sept 2021</p>
              <h4 className="text-xl py-2">You Posted a New Job</h4>
              <p className="font-roboto text-sm  text-white/70">Kindly check the requirements and terms of work and make sure everything is right.</p>
              <div className="buttons justify-between items-center flex mt-8 mb-2">

                <button className="hidden md:block">
                  Schedule a call
                </button>

                <button
                  className="hidden md:block bg-red px-10 py-2 rounded-md"
                  onClick={() => { setShowScheduleModal(true) }}
                >
                  Schedule
                </button>

                <button
                  className="md:hidden bg-red px-10 py-2 rounded-md "
                >
                  See All Activity
                </button>

              </div>
            </div>
          </div>

          <div className='upcoming-schedule-container w-full border-2 border-gray/10 rounded-2xl mb-8'>

            <div className="mx-6 max-w-full flex justify-between items-center py-5">
              <div className="text-xl font-medium ">Upcoming Schedule</div>
              <div className='flex items-center border-2 border-gray/10 rounded-md px-2 py-1 gap-2'>
                <div className=" text-gray text-sm font-normal font-roboto">Today, 13 Sep 2021</div>
                <img className='w-6 opacity-[50%]' src="/ic_down.svg" alt="" />
              </div>
            </div>

            <div className='mx-6 flex flex-col gap-2 overflow-y-auto'>

              <div className='priority flex flex-col gap-2'>
                <h5>Priority</h5>

                <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                  <div className="w-full xs:w-none flex flex-col justify-between gap-3 xs:gap-2">
                    <div className="text-lg">Review candidate applications</div>
                    <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">Today - 11:30 AM</div>
                  </div>
                   
                    <img className='w-[20px] absolute xs:static bottom-3 right-4' src="/ic_ellipsis.svg" alt="" />
                    
                </div>
              </div>

              <div className='other flex flex-col gap-2'>
                <h5>Other</h5>

                <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                  <div className="w-full xs:w-none flex flex-col justify-between gap-3 xs:gap-2">
                    <div className="text-lg">Interview with candidates</div>
                    <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">Today - 10:30 AM</div>
                  </div>

                  <img className='w-[20px] absolute xs:static bottom-3 right-4' src="/ic_ellipsis.svg" alt="" />

                </div>

                <div className="relative w-full h-max px-4 py-3 bg-white-2 rounded-md border border-gray/20 flex items-center justify-between">
                  <div className="w-full xs:w-none flex flex-col justify-between gap-3 xs:gap-2">
                    <div className="text-lg">Short meeting with product designer from IT Department</div>
                    <div className="text-sm xs:text-xs text-gray/70 font-medium font-roboto">Today - 9:15 AM</div>
                  </div>

                  <img className='w-[20px] absolute xs:static bottom-3 right-4' src="/ic_ellipsis.svg" alt="" />

                </div>
              </div>

            </div>

            <div className="w-full text-center text-red font-medium py-4 border-t border-gray/20 text-xl xs:text-base">Create a New Schedule</div>
          </div>
        </div>
      </div>

      {/* modal here */}
      {
        showScheduleModal && (
          <Modal
            open={showScheduleModal}
            onClose={() => { setShowScheduleModal(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Fade in={showScheduleModal}>
              <Box sx={centeredBoxStyle} className="bg-white h-max w-max rounded-2xl flex items-center">

                <div className='left w-3/6 h-max gap-14 flex flex-col justify-evenly items-start bg-white-2 p-6 py-20 rounded-2xl'>

                  <button className={`${scheduleModalSelectedSection === 'time' ? 'text-red' : ''} font-medium`}
                    onClick={() => { setScheduleModalSelectedSection("time") }}
                  >Time</button>
                  <button className={`${scheduleModalSelectedSection === 'date' ? 'text-red' : ''} medium`}
                    onClick={() => { setScheduleModalSelectedSection("date") }}
                  >Date</button>
                  <button className={`${scheduleModalSelectedSection === 'add-team-member' ? 'text-red' : ''} medium`}
                    onClick={() => { setScheduleModalSelectedSection("add-team-member") }}
                  >Add team member</button>

                </div>

                <div className='right h-max w-max py-16 px-10  flex items-center'>
                  {
                    scheduleModalSelectedSection === 'time' ? (
                      <ScheduleTime />
                    )
                      : scheduleModalSelectedSection === 'date' ? (
                        <ScheduleDate />
                      )
                        : scheduleModalSelectedSection === 'add-team-member' ? (
                          <ScheduleAddTeamMember />
                        ) : <></>
                  }
                </div>

                {/* absolute positioned element */}
                <button
                  onClick={() => { setShowScheduleModal(false) }}
                  className='absolute top-0 right-0 p-4 mt-2 mr-4'
                >
                  <img className='w-[20px]' src="/ic_x_close.svg" alt="" />
                </button>
              </Box>
            </Fade>

          </Modal>
        )
      }

    </div >
  )
}

export default Dashboard