import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { ProductsList } from '../../redux/slices/interfacesProducts'
import { updateCarrito, updateProduct } from '../../redux/slices/products'
import { fetchData } from '../../utils/apiProducts'
import { CardProduct } from '../CardProduct'
import { ContainerProducts, GridProducts, H1 } from './styled'

export const ListProducts = () => {

    const products :ProductsList= useAppSelector(state=>state.products.list)
    const dispatch = useAppDispatch()

   

    useEffect(()=>{
      fetchData(updateProduct,dispatch)
      const initialCarrito = localStorage.getItem("carrito")
      
      if(initialCarrito !== null){
        const parseInitial = JSON.parse(initialCarrito)
        dispatch(updateCarrito(parseInitial))
        console.log("estado inicial:",parseInitial)
      }
    },[])
    
    

  return (
    <ContainerProducts>
        <H1>Nuevos Productos</H1>
          <GridProducts>
            {products.map(item=>{
              return <CardProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              />
            })}
          </GridProducts>
    </ContainerProducts>
  )
}
