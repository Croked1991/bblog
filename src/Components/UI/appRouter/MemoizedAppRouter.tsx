import React, { useContext, useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../context'
import About from '../../../pages/About'
import { ErrorPage } from '../../../pages/ErrorPage'
import { PostIdPage } from '../../../pages/PostIdPage'
import { Posts } from '../../../pages/Posts'
import { privateRoutes, publicRoutes } from '../../../router'
import { AppRouter } from './AppRouter'

export const MemoizedAppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  return useMemo(()=>{
    return <AppRouter />
  },[isAuth])
}

