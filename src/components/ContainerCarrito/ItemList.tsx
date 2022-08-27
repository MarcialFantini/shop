import React from 'react'
import { productCarrito } from '../../redux/slices/products'
import { ContaienerItem,ContainerPrice,P, Prices } from './styled'

interface props{
    item:productCarrito
}

export const ItemList = (props:props) => {
    
    return (
    <ContaienerItem>
        <div >
            <P>
                Cant: {props.item.cantidad}
            </P>
        </div>
        <div>
            <P
            style={{color:"blue",fontSize:'1.5rem'}}
            >
                - {props.item.title} 
            </P>
        </div>
        <ContainerPrice>
            <Prices>
                 ${props.item.price}
            </Prices>
        </ContainerPrice>
    </ContaienerItem>
  )
}
