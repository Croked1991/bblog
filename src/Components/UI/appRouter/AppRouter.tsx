import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../context'
import About from '../../../pages/About'
import { ErrorPage } from '../../../pages/ErrorPage'
import { PostIdPage } from '../../../pages/PostIdPage'
import { Posts } from '../../../pages/Posts'
import { privateRoutes, publicRoutes } from '../../../router'
import { Loader } from '../Loader/Loader'

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />} />
        )}
        <Route path="/login" element={<Navigate to="/" replace={true} />} />
        <Route path="/" element={<Navigate to="/posts" replace={true} />} />
      </Routes>
      : <div>
        <Routes>
          {publicRoutes.map(route =>
            <Route key={route.path} path={route.path} element={<route.element />} />
          )}
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </div>
  )
}

