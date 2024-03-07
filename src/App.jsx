import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-screen h-screen flex'>
      <Sidebar />
      <div className='h-full w-full flex flex-col'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
