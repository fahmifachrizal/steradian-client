import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const MainLayout = () => {
  const { toogleModal } = useSelector(state => state.userReducer)
  return (
    <div className='min-h-screen bg-blue-200 relative'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout

