import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/UI/navbar/Navbar';
import { Posts } from './pages/Posts';
import About from './pages/About';
import { ErrorPage } from './pages/ErrorPage';
import { AppRouter } from './Components/UI/appRouter/AppRouter';
import { AuthContext } from './context';
import { MemoizedAppRouter } from './Components/UI/appRouter/MemoizedAppRouter';



function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
    <BrowserRouter>
      <Navbar />  
      <MemoizedAppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
