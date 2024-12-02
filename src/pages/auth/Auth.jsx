import { Outlet, Navigate } from 'react-router-dom'

const Auth = () => {
  const token = localStorage.getItem('token')
  return token ? <Outlet /> : <Navigate to='/login' />
}

export default Auth
