
import React, {Suspense} from 'react'
import HomeContainer, {
  HomeInfor,
  ProductMain,
  Element,
  TitleInfor,
  Description,
  TitleSub,
  PriceBig,
  BtnBuy,
  ImageMain
} from './styled'
import Media from 'react-media'
import NFT3DNew from './NFT3DNew'
const Home = () => {
  return (
    <>
      {/* <Media query='(min-width:768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          // return renderDesktop()
        }}
      </Media> */}
      <NFT3DNew />
    </>
  )
}
Home.getInitialProps=({query})=>{
  return null
}
export default Home