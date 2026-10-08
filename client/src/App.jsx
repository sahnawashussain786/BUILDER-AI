import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import { AuthLayout, GuestLayout } from './pages/Layout'
import Homepage from './pages/Homepage'
import BuilderPage from './pages/BuilderPage';
import PreviewPage from './pages/PreviewPage';

const App = () => {
  return (
    <Routes>
      {/* login routes */}
      <Route element={<GuestLayout/>}>
        <Route path='/login' element={<AuthPage mode="login"/>}/>
        <Route path='/register' element={<AuthPage mode="register"/>}/>
      </Route>
      {/* protected routes */}
      <Route element={<AuthLayout/>}>
        <Route path='/' element={<Homepage />}/>
        <Route path='/builder/:id' element={<BuilderPage />}/>
        <Route path='/preview/:id' element={<PreviewPage />}/>

      </Route>
    </Routes>
  )
}

export default App
