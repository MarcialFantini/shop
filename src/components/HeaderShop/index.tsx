import React from 'react'
import { GridImage,FlexImage, GridHeader, Img, PicturePrimary, Picture2, Img2 } from './styled'

import ropa1 from '../../assets/ropa/ropa1.jpg'
import ropa2 from '../../assets/ropa/ropa2.jpg'
import ropa3 from '../../assets/ropa/ropa3.jpg'
import ropa4 from '../../assets/ropa/ropa4.jpg'

export const HeaderShop = () => {
  return (
    <GridHeader>
        <PicturePrimary>
            <Img src={ropa1} alt="" />
        </PicturePrimary>
        <GridImage>
            <Picture2>
                <Img2 src={ropa2}  />
            </Picture2>
            <FlexImage>
                <Picture2>
                <Img src={ropa3}alt="" />
            </Picture2>
            <Picture2>
                <Img src={ropa4} alt="" />
            </Picture2>
            </FlexImage>
        </GridImage>
    </GridHeader>
  )
}
