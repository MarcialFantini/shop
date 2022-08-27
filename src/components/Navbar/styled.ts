import styled from "styled-components";


export const ContainerNavbar = styled.div`
    width: 100%;
    height: 80px;

    background: #6d56df;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IconNav = styled.img`
    width: 70px;
    height: 70px;

    margin: auto 10px auto 10px;
`

export const TitleShop = styled.h1`
    font-size: 3rem;

`

export const Bars = styled.div`
    width: 60px;
    height: 70px;
    margin: auto 20px auto auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Bar = styled.div`
    width: 100%;
    height: 15px;
    background: beige;
    border-radius: 5px;
`
interface props{
    active:boolean
}

export const ContainerNav = styled.div<props>`
    width: 70%;
    height: 90vh;

    background:#5845b4;

    position: fixed;
    z-index: 100;

    transition: all 0.3s ease;

    top: 0;
    left: ${props=>{
        if(props.active){
            return 0
        }else{
            return "-100%"
        }
    }};

    border-right: black solid 5px;
    border-bottom: black solid 5px;
`

export const NavItems = styled.div`
    width: 100%;
    
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    
   
`

export const Items = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    
    background: lightblue;

    margin: 20px 0;

    border-bottom: black solid 2px;
    border-top: black solid 2px;
`

export const ContainerExit = styled.div`
    width: 100%;
    height: 10%;

    
`

export const Btn = styled.button`
    height: 45px;
    width: 45px;

    padding: 10px;
    background: lightcoral;
    color: white;
    font-size: 2rem;

    position: absolute;
    top: 10px;
    right: 10px;
`