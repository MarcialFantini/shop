import styled from "styled-components";

export const ContainerCard = styled.div`
    
   

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border: 5px solid #6d56df;

    padding: 10px;
    padding-bottom: 20px;

    background: whitesmoke;
`
export const ContainerText = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
`
interface ImageE {
    src:string
}

export const Image = styled.img<ImageE>`
    
    height: 100px;

    

`

export const TitleH4 = styled.h4`
    font-size: 1.8rem;
    text-align: center;
`
export const Price = styled.p`
    font-size:1.6rem;
    margin: 0 auto auto auto;
   
`
export const BtnAddCar = styled.button`
    width: auto;
    padding: 10px;
    color: white;
    background: #6d56df;
    margin: 10px auto 10px auto;
    border-radius: 5px;
    
`