import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { Button } from '../button/Button'

export const Navbar = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <div className="navbar__logout">
          <Button size='small' callback={(e) => logOut(e)}>
            LogOut
          </Button>
        </div>
        <div className="navbar__links">
          <Link className='navbar__link' to="">Posts</Link>
          <Link className='navbar__link' to="about">About</Link>
        </div>
      </div>
    </div >
  )
}
