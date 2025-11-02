import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../stylings/header.scss'
import { loginData } from '../../constants'

function Header() {
  const { user, logout } = useAuth() || {}
  const navigate = useNavigate()

  function handleLogout() {
    if (logout) logout()
    navigate('/login')
  }

  return (
    <header>
      <div className='profile-section'>
        <span className='profile-icon'></span>
        <span className='user-name'>{user?.name || 'Guest'}</span>
      </div>
      <button onClick={handleLogout} className='logout-button'>{loginData.logout}</button>
    </header>
  )
}

export default Header