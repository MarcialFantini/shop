import styled from "styled-components";

export const ContaienerItem = styled.li`
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
  
    justify-content: end;
    align-items: center;

   
    
`

export const P = styled.p`
    color: black;
    font-size: 1.4rem;
    
`

export const Container = styled.div`
    width: 90%;
    height: auto;
    min-height: 80vh;
    background: whitesmoke;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
    border: 5px solid black;
    border-radius: 10px;

`

export const TitleH2 = styled.h2`
    font-size: 2.4rem;
    text-decoration: underline red 2px;
`
export const Ul = styled.ul`
    width: 95%;
    margin: auto;
    padding: 0;
`

export const TotalContainer = styled.div`
    width: 90%;
    height: auto;
 
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid blue;
    border-radius: 10px;
    
    margin: 10px auto 20px auto;
`

export const ContainerPrice = styled.div`
    margin: 0 0 0 auto;
    width: 20%;
    height: 100%;
    border-left: 4px solid black;
    
    
`
export const Prices = styled.p`
    color: green;
    font-size: 2rem;
    text-align: center;

`

export const Total = styled.p`
     font-size: 3rem;
     color: black;

    
`

export const ContainerButtons = styled.div`
    width: 80%;
   
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
`

export const BtnPagar = styled.button`
    padding: 20px;
    
    border-radius: 10px;
    background: green;
     font-size: 2rem;
`

export const BtnCancelar = styled.button`
    padding: 20px;

   
    border-radius: 10px;
    background: red;

    font-size: 2rem;
`