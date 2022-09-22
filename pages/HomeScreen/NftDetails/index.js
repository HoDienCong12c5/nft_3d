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
import Link from 'next/Link'
import Router from 'next/router'
import MoreCollection from '../MoreCollection'
const NftDetails = (props) => {
  const [view3D, setView3D] = useState(false)
  const [isChange, setChange] = useState(false)
  const [modal3D, setModal3D] = useState('')
  const [texTure, setTexTure] = useState('second')
  useEffect(() => {
    if(isChange){
      Promise.all([
        setModal3D('../../../3d/keta.fbx'),
        setTexTure('../../../3d/Guardian_anima.png')
      ])
     
    }else{
      Promise.all([
        setModal3D('../../../3d/anami.fbx'),
        setTexTure('../../../3d/color_anami.png')
      ])
      
    }
  }, [isChange])
  const refScroll = useRef(null)
  const click=()=>{
    refScroll.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
    setChange(!isChange)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setView3D(false)
    setTimeout(() => {
      refScroll.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }, 300)
  }
  const renderDesktop = () => {
    return (
      <MainContainer ref={refScroll}>
        <ContainerCharacter>
        <DetailsContainer>
              <ImageWrapper>
                <ImageBorder src={'./khung.png'} />
                {view3D ? (
                  <NFT3DNew
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
                      <ImageNft src={isChange?'./Img/keta_char.png':'./Img/anami_char.png'} />
                    </ContainerImageNft>
                  </NFT2D>
                )}
              </ImageWrapper>
            </DetailsContainer>
         
          <RightChar>
            <img
              src={isChange?'./Img/right_keta.png':'./rightNew.png'}
              style={{
                width: '100%',
              }}
            />
          </RightChar>
        </ContainerCharacter>
        <img 
   
        src={!isChange?'./Img/about_keta.png':'./Img/about_anami.png'} 
        style={{ width: '100%', marginTop: 20 }} 
        />
        <MoreCollection 
        src={!isChange?'./Img/keta_more.png':'./Img/anami_more.png'}
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
