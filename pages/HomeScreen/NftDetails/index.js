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
import axios from 'axios'
import { data } from './data'
import MoreCollection from '../MoreCollection'
import Range from '../Edit'
// import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
const KEY = {
  anami: 'anami',
  keta: 'keta',
  angles: 'angles'
}
const NftDetails = (props) => {
  const [view3D, setView3D] = useState(false)
  const [isChange, setChange] = useState(false)
  const [itemSelected, setItemSelected] = useState(KEY.anami)
  const [modal3D, setModal3D] = useState('')
  const [texTure, setTexTure] = useState('second')
  const [listNFT, setListNFT] = useState([])
  const [indexNFT, setIndexNFT] = useState(0)
  const [intensity, setIntensity] = useState(1)

  useEffect(() => {
    setItemSelected(KEY.anami)
    setIndexNFT(0)
  }, [])
  useEffect(() => {
    const geAllData = async () => {
      const res = await axios.get('https://dev-game-api.w3w.app/api/game-characters')
      if (res.data?.data?.length > 0) {
        setListNFT(res.data?.data)
       
        res.data?.data.map((data) => {
          if(data?.models3D?.length > 0){
            setModal3D(data?.models3D[0]),
            setTexTure(data?.models3D[1])
            return 0
          }
        })
      }
    }
    geAllData()
  }, [])
  const clickHandel=async (index)=>{
    Promise.all([
      setView3D(false),
      setIndexNFT(index),
      setModal3D(listNFT[index]?.models3D[0]),
      setTexTure(listNFT[index]?.models3D[1])
    ])
   
  }
  console.log('=listNFT[index]?.models3D[0]===================');
  console.log(listNFT[indexNFT]?.models3D[1]);
  console.log('====================================');
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

                listNFT?.length > 0 && (
                  <NFT2D>
                    <ButtonView3D onClick={() => setView3D(true)}>
                      Click to view 3D Model
                    </ButtonView3D>
                    <ContainerImageNft>
                      <ImageNft src={listNFT[indexNFT].image} />
                    </ContainerImageNft>
                  </NFT2D>
                )

              )}
            </ImageWrapper>
          </DetailsContainer>

          <RightChar>
                 <Range color={'#EB5757'} text={'Slide to transfer'} /> 
                 <div >shvdfhgsdvfghvgh</div>
          </RightChar>
        </ContainerCharacter>
        {/* <img 
  
        src={data[itemSelected].imgAbout} 
        style={{ width: '100%', marginTop: 20 }} 
        /> */}
        <MoreCollection
          list={listNFT}
          onCLick={clickHandel}
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
