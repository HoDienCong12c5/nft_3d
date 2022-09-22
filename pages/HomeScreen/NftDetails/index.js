import React, { useEffect, useRef, useState, Suspense } from 'react'
import {
  MainContainer,
  DetailsContainer,
  BackContainer,
  ImageWrapper,
  ContainerCharacter,
  ButtonView3D,
  RightChar,
  ImageBorder,
  ContainerImageNft,
  ImageNft,
  NFT2D,
} from './style'
import NFT3DNew from '../NFT3DNew'
import MarketplaceButton from '../Components/Button'
import Image from 'next/image'
import Media from 'react-media'
import data from './data'
import MoreCollection from '../MoreCollection'
const KEY={
  anami:'anami',
  keta:'keta',
  angles:'angles'
}

const NftDetails = (props) => {
  const [view3D, setView3D] = useState(false)
  const [isChange, setChange] = useState(false)
  const [itemSelected, setItemSelected] = useState(KEY.anami)
  const [modal3D, setModal3D] = useState('')
  const [texTure, setTexTure] = useState('second')
  useEffect(() => {
    setItemSelected(KEY.anami)
  }, [])

  useEffect(() => {
    if(itemSelected){
      Promise.all([
        setModal3D(data[itemSelected].fbx), 
        setTexTure(data[itemSelected].texTure)
      ])
    }
  },[itemSelected])
  const click=(key)=>{
    console.log(key);
    setChange(!isChange)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })

    },300)
    setView3D(false)
    setItemSelected(key)
  }
  const renderDesktop = () => {
    return (
      <MainContainer >
        <ContainerCharacter>
        <DetailsContainer>
              <ImageWrapper>
                <ImageBorder src={'./khung.png'} />
                {view3D ? (
                  
                    itemSelected && <NFT3DNew
                    keyName={itemSelected}
                    modal={modal3D}
                    isChange={isChange}
                    texTure={texTure}
                      close3D={() => {
                        setView3D(false)
                      }}
                    />
                  
                ) : (
                  <NFT2D>
                    <ButtonView3D onClick={() => setView3D(true)}>
                      Click to view 3D Model
                    </ButtonView3D>
                    <ContainerImageNft>
                      <ImageNft src={data[itemSelected].imgChar} />
                    </ContainerImageNft>
                  </NFT2D>
                )}
              </ImageWrapper>
            </DetailsContainer>
         
          <RightChar>
            <img
              src={data[itemSelected].imgRight}
              style={{
                width: '100%',
              }}
            />
          </RightChar>
        </ContainerCharacter>
        <img 
  
        src={data[itemSelected].imgAbout} 
        style={{ width: '100%', marginTop: 20 }} 
        />
        <MoreCollection 
          list={data[itemSelected].listMore}
          onCLick={click}
        />
      </MainContainer>
    )
  }
  const renderMobile = () => {
    return (
      <MainContainer>
        {/* <BackContainer>
        <button onClick={() => {}}>
          <img src={''} />
        </button>
      </BackContainer> */}

        <ContainerCharacter>
          <DetailsContainer>
            <div
              style={{
                justifyContent: 'center',
              }}
            >
              {view3D ? (
                <>
                  <NFT3DNew
                    close3D={() => {
                      setView3D(false)
                    }}
                  />
                </>
              ) : (
                <ImageWrapper>
                  <ButtonView3D onClick={() => setView3D(true)}>
                    Click to view 3D Model
                  </ButtonView3D>
                  <img
                    src={'./char2d.png'}
                    style={{
                      height: '59%',
                    }}
                  />
                </ImageWrapper>
              )}
            </div>
          </DetailsContainer>

          <RightChar>
            <img
              src={'./BottomMobile.png'}
              style={{
                width: '100%',
                marginTop: 20,
              }}
            />
          </RightChar>
        </ContainerCharacter>
      </MainContainer>
    )
  }
  return (
    <>
      <div>
        {renderDesktop()}
        {/* <Media query="(min-width: 569px)">
      {(match) => {
        if (match) {
          return renderDesktop()
        }
      }}
    </Media>
    <Media query="(max-width: 568px)">
      {(match) => {
        if (match) {
          return renderMobile()
        }
      }}
    </Media> */}
      </div>
    </>
  )
}
export default NftDetails
