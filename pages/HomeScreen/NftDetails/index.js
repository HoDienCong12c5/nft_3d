import React, { useEffect, useRef, useState, Suspense } from 'react'
import {
  MainContainer,
  DetailsContainer,
  BackContainer,
  ImageWrapper,
  ContainerCharacter,
  ButtonView3D,
  RightChar,
} from './style'
import NFT3DNew from '../NFT3DNew'
import MarketplaceButton from '../Components/Button'
import Image from 'next/image'
import Media from 'react-media'
const NftDetails = (props) => {
  const [view3D, setView3D] = useState(false)
  const [widthRight, setWidthRight] = useState(0)
  const [heRight, setHeRight] = useState(0)
  const widthRRef = useRef(0)
  const [widthScreen, setWidthScreen] = useState(0)
 
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthScreen(window.innerWidth)
      if(widthRRef?.current){
        if (widthRRef?.current?.clientWidth < 1) {
        } else {
          setWidthRight(widthRRef?.current?.clientWidth)
          setHeRight(widthRRef?.current?.clientHeight)
        }
      }
      
    })
    setTimeout(() => {
      setWidthRight(widthRRef?.current?.clientWidth)
      setHeRight(widthRRef?.current?.clientHeight)
    }, 600)
  }, [])
  const tokenSymbols = new Array(3)
  const resetSize = ()=>{
    setTimeout(() => {
      setWidthRight(widthRRef?.current?.clientWidth)
      setHeRight(widthRRef?.current?.clientHeight)
    }, 500)
  }
  const renderDesktop = () => {
    resetSize()
    return (
      <MainContainer>
        {/* <BackContainer>
          <button onClick={() => {}}>
            <img src={''} />
          </button>
        </BackContainer> */}

        <ContainerCharacter>
          {heRight > 50 && (
            <DetailsContainer height={heRight}>
              <div
                style={{
                  height: heRight,
                  justifyContent: 'center',
                }}
              >
                {view3D ? (
                  <>
                    <NFT3DNew
                      size={heRight*1.5}
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
                        height: '60%',
                      }}
                    />
                  </ImageWrapper>
                )}
              </div>
            </DetailsContainer>
          )}
          <RightChar>
            <img
              ref={widthRRef}
              src={'./rightNew.png'}
              style={{
                width: '100%'
              }}
            />
          </RightChar>
        </ContainerCharacter>
        <img src={'./bottom.png'} style={{ width: '100%', marginTop: 20 }} />
      </MainContainer>
    )
  }
  const renderMobile = () => {
    resetSize()
    return (<MainContainer>
      {/* <BackContainer>
        <button onClick={() => {}}>
          <img src={''} />
        </button>
      </BackContainer> */}

      <ContainerCharacter>
        {
          widthRight >100 && <DetailsContainer height={widthRight -10}>
          <div
            style={{
              height: widthRight -10,
              justifyContent: 'center',
            }}
          >
            {view3D ? (
              <>
                <NFT3DNew
                  size={(heRight*1.5) -10}
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
        }
       
        <RightChar>
          <img
            ref={widthRRef}
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
    <div >
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
