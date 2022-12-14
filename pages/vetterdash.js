import React, { useState, useContext, useEffect} from 'react';
import { Context } from "../context/context";
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import Image from 'next/image';
import Wallet from '../components/Wallet';
import styles from '../styles/Home.module.css';
import ApplicationGrid from '../components/ApplicationGrid';

export default function VetterDash() {

  const { state, dispatch } = useContext(Context);
  const [isVetter, setIsVetter] = useState(false)

  const vetter = process.env.NEXT_PUBLIC_VETTER

  useEffect(() => {
    if(state.user === vetter){
      setIsVetter(true)
    }
    if(!state.user){
      setIsVetter(false)
    }
  },[state])

  return (
    <div className={styles.container}>
      <Head>
        <title>Fourth Wave App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/FourthWave_Logo_Circle.png" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Time to approve some applications!
        </h1>
        {!isVetter && (<div><p className={styles.description}>Please connect your wallet to get started</p><Wallet vetter={vetter} /></div>)}
        {isVetter && <ApplicationGrid vetter={state}/>}
      </main>
      <footer className={styles.footer}>
        <span>
          <Link href="/" passHref>
            <a>
              <Image src="/images/FourthWaveLogo_Transparent.png" alt="Vercel Logo" width={72} height={72} />
            </a>
          </Link>
        </span>
      </footer>
    </div>)
}