import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useFBX, useAnimations,useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import styled from 'styled-components'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
const KEY={
  anami:'anami',
  keta:'keta',
  angles:'angles'
}
const Scene = ({
  isLoad,
  setIsLoad,
  modal ,
  textTure = '../../../Textures_Web/Angle_ANIMA.png',
  intensity ,
  keyName
}) => {
  console.log('====================================');
  console.log({keyName});
  console.log('====================================');
  const propellerMesh = useRef()
  const listAction = useRef([])
  const [color, setColor] = useState(null)
  const colorMap = useLoader(THREE.TextureLoader, textTure)
  useEffect(() => {
    const material = new THREE.MeshLambertMaterial({
      lightMap: colorMap,
      map: colorMap,
      lightMapIntensity:Number(intensity/100) 
    })
    setColor(material)
    // fbx?.traverse((ob) => {
    //   ob.material = material
    // })
  },[intensity])
  const fbx = useFBX(modal)
  // const gltf=useGLTF('../../../Guardian.glb')
  const { actions } = useAnimations(fbx.animations, propellerMesh)

  useEffect(() => {
    const addAni = async () => {
      await init()
      setIsLoad(false)
    }
    if (fbx && color) {
      addAni()
    }
  }, [color])
  useEffect(() => {
    if (!isLoad) {
      // actions[getNameAction(7)]?.fadeIn(0.5)?.play()
      const x =listAction.current.map((item, index) =>{
        // return actions[getNameAction(index)]?.fadeIn(0.5)?.play()
      })
      // Promise.all(x)
    }
  }, [actions, isLoad])
  const init = async () => {
    fbx?.traverse((ob) => {
      ob.material = color
    })
    fbx.animations.map((ob, index) => {
      if (!listAction.current.includes(ob.name)) {
        listAction.current.push(ob.name)
      }
    })
  }
  const getNameAction = (indexAction) => {
    if (listAction.current.length < 2) {
      return listAction.current[0]
    }
    return listAction.current[indexAction]
  }

  return (
    <mesh ref={propellerMesh}>
      {/* <axesHelper /> */}
      <primitive object={fbx} scale={keyName==='Minion Devil'?0.035: 0.015} />
    </mesh>
  )
}

const NFT3D = ({ 
  nftId, 
  close3D,
  modal= '../../../Angels_Anim_Composed_690MB.fbx', 
  texTure = '../../../Textures_Web/Angle_ANIMA.png',
  isChange,
  keyName,
  intensity= 0.5,
  key
}) => {
  console.log({intensity});
  const [isLoad, setIsLoad] = useState(true)
  const [isLoadServer, setIsLoadServer] = useState(true)
  const [data3D, setData3D] = useState(null)
  const closeCanvas = () => {
    const div3d = document.getElementById('nft-3d')
    while (div3d.firstChild) {
      div3d.removeChild(div3d.firstChild)
    }
    close3D()
  }
  return (
    <Container>
      <Close3D onClick={isLoad ? null : () => closeCanvas()}>
        {isLoad ? '3D loading...' : 'Click to close modal 3D'}
        {isLoad && (
          <ContainerLoading>
            <Spin
              size="large"
              style={{ marginTop: '30%' }}
              indicator={antIcon}
            />
          </ContainerLoading>
        )}
      </Close3D>
      {isLoadServer && (

          <CanvasCustom id="nft-3d" >
            <Suspense fallback={null}>
            {/* <color attach='background' args={['#d0d0d0']} /> */}
            <pointLight
                rotation={[100, 10, 0]}
                position={[1000, 100, 200]}
                intensity={0.75}
              />
              <pointLight
                rotation={[100, 10, 0]}
                position={[-1000, 100, 200]}
                intensity={0.3}
              />
              <pointLight
                rotation={[100, 10, 0]}
                position={[-10, 1, -1000]}
                intensity={0.5}
              />
              <Scene 
              keyName={keyName}
              key={key}
              isChange={isChange}
              modal={modal}
              textTure={texTure}
              isLoad={isLoad} setIsLoad={setIsLoad} 
              intensity={intensity}
              />

                      
              <OrbitControls
                target0={[0, 1, 0]}
                // enableZoom={false}
                target={[0, 1, 0]}
                enablePan={false}
                // minPolarAngle={Math.PI / 2}
                // maxPolarAngle={Math.PI / 2}
              />
              </Suspense>
          </CanvasCustom>
      )}
    </Container>
  )
}
export default React.memo(NFT3D)

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40, color: 'white' }} spin />
)
const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
const Close3D = styled.div`
  position: relative;
  font-size: 16px;
  color: rgba(100, 61, 167, 1);
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  @media screen and (max-width: 568px) {
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
  }
`
const CanvasCustom = styled(Canvas)`
  display: flex;
  flex: 1;
  position: absolute !important;
  height: 130% !important;
  width: 100% !important;
  canvas {
    transform: translateY(20px);
  }
`
const ContainerLoading = styled.div`
  position: absolute;

  --color: white; /* color */
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  border: ${(props) => (props.border ? '1px solid var(--color)' : 'none')};
  border-radius: 16px;
  margin-top: ${(props) => (props.border ? '26px' : '0px')};
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
  }
  gap: 20px;
`
