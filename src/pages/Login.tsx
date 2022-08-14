import React, { useContext } from 'react'
import { Button } from '../Components/UI/button/Button'
import { Input } from '../Components/UI/input/Input'
import { AuthContext } from '../context'
import '../Styles/App.css'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className='loginPage'>
        <h1>Login Page</h1>
        <form onSubmit={(e)=>login(e)}>
            <Input callback={()=>{}} value='' type="text" placeholder='login'/>
            <Input callback={()=>{}} value='' type="password" placeholder='password'/>
            <Button callback={()=>{}}>Login</Button>
        </form>
    </div>
  )
}

export default Login