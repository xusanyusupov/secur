import { useEffect, useState } from 'react'
import axios from 'axios'
import './Cards.scss'
import Loading from '../../components/loading/Loading'
const BASE_URL = 'https://dummyjson.com/users'

const Cards = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(res => {
        setUsers(res.data.users)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch data')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    )
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className='cards_container'>
      {users.map(user => (
        <div key={user.id} className='card'>
          <img src={user.image} alt={user.name} className='user-image' />
          <h3>Login <br /> {user.username}</h3>
          <h2>password <br /> {user.password}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
