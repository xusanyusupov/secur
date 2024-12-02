import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault()

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    try {
      const res = await axios.post('https://dummyjson.com/auth/login', user)
      localStorage.setItem('token', res.data.token)
      navigate('/')
    } catch (error) {
      alert('Invalid username or password')
    }
  }

  return (
    <div className='login_container'>
      <form onSubmit={handleSubmit} className='login_forma'>
        <input ref={usernameRef} type='text' placeholder='Username' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
