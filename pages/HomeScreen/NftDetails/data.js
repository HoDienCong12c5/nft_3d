const KEY = {
  anami: 'anami',
  keta: 'keta',
  angles: 'angles',
}
export const data = {
  KEY: {
    anami: 'anami',
    keta: 'keta',
    angles: 'angles',
  },
  anami: {
    fbx: '../../../3d/anami.fbx',
    texTure: '../../../3d/color_anami.png',
    key: KEY.anami,
    imgChar: './Img/anami_char.png',
    imgRight: './rightNew.png',
    imgAbout: './Img/about_anami.png',
    listMore: [
      {
        key: KEY.keta,
        img: './Img/keta_more.png',
      },
      {
        key: KEY.angles,
        img: './Img/angles_more.png',
      },
    ],
  },
  keta: {
    fbx: '../../../3d/keta.fbx',
    texTure: '../../../3d/Guardian_aqua.png',
    key: KEY.keta,
    imgChar: './Img/keta_char.png',
    imgRight: './Img/right_keta.png',
    imgAbout: './Img/about_keta.png',
    listMore: [
      {
        key: KEY.anami,
        img: './Img/anami_more.png',
      },
    ],
  },
  angles: {
    key: KEY.angles,
    fbx: '../../../3d/Angels_char.fbx',
    texTure: '../../../3d/Textures_angles/Angle_EARTH.png',
    imgChar: './Img/angles_char.png',
    imgAbout:'./Img/angles_about.png',
    imgRight: './Img/angles_right.png',
    listMore: [
      {
        key: KEY.keta,
        img: './Img/keta_more.png',
      },
    ],
  },
}
import React from 'react'

export const index = () => {
  return (
    <div>data</div>
  )
}

export default index
