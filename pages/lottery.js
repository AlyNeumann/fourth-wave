import React, { useContext, useState } from 'react';
import { Context } from "../context/context";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Wallet from '../components/Wallet';
import LotteryGrid from '../components/LotteryGrid';
import Link from 'next/link';
import Nav from '../components/Nav'

export default function Lottery() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lottery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Play the Lottery!
        </h1>
        <p className={styles.description}>
          Welcome Player
        </p>
        {!state.user ? 'Please connect your wallet to play' : `${state.user}`}
        {!state.user ? <Wallet page='lottery' user='connected'/> : <Wallet page='lottery' user='connected'/>}
        <LotteryGrid />
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Link href="/" passHref>
            <a>
            <Image src="/images/FourthWave_Logo.png" alt="Vercel Logo" width={72} height={72} />
            </a>
          </Link>
        </span>
      </footer>
    </div>
  )
}