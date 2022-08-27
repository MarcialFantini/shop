import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Products } from '../../redux/slices/interfacesProducts'
import { addCarrito, productCarrito } from '../../redux/slices/products'
import { BtnAddCar, ContainerCard, ContainerText, Image, Price, TitleH4 } from './styled'

export const CardProduct = (props:Products) => {

  const dispatch = useAppDispatch()
  console.log(useAppSelector(state=>state))

  const addProductToCard = ()=>{
    const id = props.id || 1
    const product:productCarrito ={
      id:id,
      cantidad:1,
      title:props.title,
      price:props.price
    }
    dispatch(addCarrito(product))
    
  }

  return (
    <ContainerCard>
      <Image src={props.image}/>
      <ContainerText>
        <TitleH4>{props.title}</TitleH4>
        <Price>Prices:{props.price}</Price>
        <BtnAddCar
        onClick={addProductToCard}
        >
          Comprar!
        </BtnAddCar>
      </ContainerText>
    </ContainerCard>
  )
}
