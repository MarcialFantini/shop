import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductsList } from "./interfacesProducts"

export interface productCarrito{
    id:number,
    cantidad:number,
  
    title: string
    price: number
}

interface productsInitial {
  list: ProductsList,
  carrito:productCarrito[]
}

const initialState:productsInitial = {
    list:[],
    carrito:[]
}

export const productsSlices = createSlice({
    name:'products',
    initialState,
    reducers:{
        updateProduct:(state,action:PayloadAction<ProductsList>)=>{
            state.list = action.payload
        },
        addCarrito:(state,action:PayloadAction<productCarrito>)=>{
            let encontrado = false
            state.carrito= state.carrito.map(item=>{
                if(item.id ===action.payload.id){
                    const carritoItem:productCarrito = {
                        ...item,
                        cantidad:item.cantidad + action.payload.cantidad

                    }
                    encontrado = true
                    return carritoItem
                }else{
                    return item
                }
            })
            
            if(!encontrado){
                state.carrito = [
                ...state.carrito,
                action.payload
                ]
                
                encontrado = false
            }
            localStorage.setItem("carrito",JSON.stringify(state.carrito))
        },
        deleteCarrito:(state,action:PayloadAction<number>)=>{
            let newState = state.carrito.filter(item=>{
                return item.id !== action.payload
            })
            state.carrito = newState
            localStorage.setItem("carrito",JSON.stringify(state.carrito))
        },
        updateCarrito:(state,action:PayloadAction<productCarrito[]>)=>{
            state.carrito = action.payload
            localStorage.setItem("carrito",JSON.stringify(state.carrito))
        }
    }
})

export const {updateProduct,addCarrito,deleteCarrito,updateCarrito} = productsSlices.actions
export const productReducer = productsSlices.reducer