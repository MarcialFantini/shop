import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { updateCarrito } from '../../redux/slices/products'
import { ItemList } from './ItemList'
import { BtnCancelar, BtnPagar, Container, ContainerButtons, TitleH2, Total, TotalContainer, Ul } from './styled'

export const ContainerCarrito = () => {
    const navigate = useNavigate()
    const list = useAppSelector(state=>state.products.carrito)
    const dispatch = useAppDispatch()
    const restore = ()=>{
        dispatch(updateCarrito([]))
        navigate('/')
    }

    const ListaProductos = list.map(item=>{
        return <ItemList
            key={item.id}
            item={item}   
        />
    })

    const total = list.reduce((total,valor)=>{
                return total + (valor.price * valor.cantidad)
            },0)

    

    return (
    <Container>
        <TitleH2>
            Orden de compra
        </TitleH2>
        <Ul>
            {ListaProductos}
        </Ul>
        <TotalContainer>
            <Total>Total-${Math.round(total)}</Total>
        </TotalContainer>

        <ContainerButtons>
            <BtnPagar
            onClick={restore}
            >Pagar</BtnPagar>
            <BtnCancelar
            onClick={restore}
            >Cancelar</BtnCancelar>
        </ContainerButtons>
    </Container>
  )
}
