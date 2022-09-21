import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NFT3DNew from './HomeScreen/NFT3DNew'
import React,{Suspense} from 'react'
export default function Home() {
  return (
    <div className={styles.container}>
       <NFT3DNew />
      
    </div>
  )
}
