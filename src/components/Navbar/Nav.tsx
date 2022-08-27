import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toogleActive } from '../../redux/slices/Nav'
import { Btn, ContainerExit, ContainerNav, Items, NavItems } from './styled'

import './styled.css'

export const Nav = () => {

    const dispatch = useAppDispatch()

    const active = useAppSelector(state=>state.nav.active)

    const toggleNav = ()=>{
        dispatch(toogleActive())

    }

  return (
    <ContainerNav active={active} >
        <ContainerExit>
            <Btn
            onClick={toggleNav}
            >X</Btn>
        </ContainerExit>

        <NavItems>
            <Link 
            onClick={toggleNav}
            className='link'
            to='/'>
                <Items>
                    Inicio
                </Items>
            </Link>
            <Link 
            onClick={toggleNav}
            className='link'
            to='/carrito'>
                <Items>
                    Carrito
                </Items>
            </Link>
        </NavItems>
    </ContainerNav>
  )
}
