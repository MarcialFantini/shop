import styled from "styled-components";

export const GridHeader = styled.div`
    width: 90%;
    max-width: 900px;
    height: auto;
    min-height: 300px;
   
    margin: 50px auto;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(270px,1fr)) ;

   
    gap: 20px;

    
`

export const PicturePrimary = styled.div`
     border-radius: 20px;

    height: auto;
    
    max-height: 530px;

    display: flex;
    justify-content: center;
    align-items: start;

    overflow: hidden;

    border: 5px solid #6d56df;
   
`
interface props{
    src:string
}

export const Img = styled.img<props>`
    height: 140%;
`

export const Img2 = styled.img<props>`
    width: 120%;
`

export const GridImage = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr)) ;
    gap: 30px;
`

export const FlexImage = styled.div`
    width: auto;
    height: auto;
    min-height: 200px;

    display: flex;
    flex-direction: row;
    gap: 30px;


`

export const Picture2 = styled.picture`
    border-radius: 15px;

    max-height: 250px;
    width: 100%;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: start;
 
    border: 5px solid #6d56df;
`
