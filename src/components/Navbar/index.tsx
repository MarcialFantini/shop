import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { toogleActive } from '../../redux/slices/Nav'
import { Nav } from './Nav'
import { ContainerNavbar,IconNav,TitleShop,Bars,Bar } from './styled'

export const Navbar = () => {
  const dispatch = useAppDispatch()

  const toggleNav = ()=>{
        dispatch(toogleActive())

    }

  return (
    <ContainerNavbar>
      <Nav></Nav>
      <IconNav></IconNav>
      <TitleShop>
        Shop
      </TitleShop>
      <Bars 
      onClick={toggleNav}
      >
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Bars>
    </ContainerNavbar>
  )
}
