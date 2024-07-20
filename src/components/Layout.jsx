import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Stack } from '@mui/system'

export default function Layout() {
  return (
    <Stack sx={{height:'100vh',overflow:'auto',justifyContent:'space-between'}}>
        <Header/>
        <Stack sx={{p:'10px'}}>
          
        <Outlet/>
        </Stack>
        <Footer/>
    </Stack>
  )
}
