import React, { useState, useContext } from 'react';
// import { Context } from "../context/context";
import Link from 'next/link';
import ChakraNextLink from '../components/Link';
import Nav from '../components/Nav';
import Head from 'next/head';
import Image from 'next/image';
// import Wallet from '../components/Wallet';
import styles from '../styles/Home.module.css';
// import { Button } from '@chakra-ui/react';
// import ApplicationGrid from '../components/ApplicationGrid';

// export async function getStaticProps(context) {
//   const auntyApplications = await fetch("http://localhost:3000/api/getAuntyApplications");
//   const auntyjson = await auntyApplications.json();
//   const candidateApplications = await fetch("http://localhost:3000/api/getCandidateApplications");
//   const candidatejson = await candidateApplications.json();
//   return {
//     props: {
//       aunties: auntyjson,
//       candidates: candidatejson
//     },
//   };
// }


export default function VetterDash({aunties, candidates}) {

  let imageWith = 72;
  let imageHeight = 72;
  //TODO: to fix error, use useEffect to load data then pass to Application component
  // const { state, dispatch } = useContext(Context);

  const owner = process.env.NEXT_PUBLIC_OWNER
  return (
    <div className={styles.container}>
      <Head>
        <title>Fourth Wave App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/FourthWave_Logo_Circle.png" />
      </Head>
      {/* <Nav /> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Time to approve some applications! 
        </h1>
        {/* <Wallet owner={owner} />
        <ApplicationGrid aunties={aunties} candidates={candidates}/>
        <Button>Approve Application</Button>
        <Button>Mint NFT</Button> */}
      </main>
      <footer className={styles.footer}>
        <span>
        <ChakraNextLink href="/">
            <Image src="/images/FourthWaveLogo_Transparent.png" alt="Vercel Logo" width={imageWith} height={imageHeight} />
          </ChakraNextLink>
        </span>
      </footer>
    </div>)
}