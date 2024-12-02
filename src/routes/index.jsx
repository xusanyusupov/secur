import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Auth from '../pages/auth/Auth'

const Index = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route element={<Auth />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Index
