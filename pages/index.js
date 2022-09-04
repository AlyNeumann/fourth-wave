import React, { useContext, useEffect } from 'react';
import { Context } from "../context/context";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Wallet from '../components/Wallet';
import { Grid, GridItem, Button, Box } from '@chakra-ui/react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import SocialMediaIcons from '../components/SocialMediaIcons';
import LiFi from '../components/LiFiWidget';

export default function Home() {

  const { state, dispatch } = useContext(Context);

  let imageWith = 72;
  let imageHeight = 72;

  return (
    <div className={styles.container}>
      <Head>
        <title>Fourth Wave App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/FourthWaveLogo_Transparent.png" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fourth Wave DAO
        </h1>
        <p className={styles.description}>
          {!state.user ? "Get started by connecting your wallet." : `Account succesfully connected`}

        </p>
        <Wallet />
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
          <GridItem colSpan={2} h='100' w='100%' ><Box boxShadow='xl' p='6' bg='white' w={[120, 200, 300]}>
            <Link href="/about">
              <Button color="teal.600"
                variant="ghost"
                bg='purple.100'
                whiteSpace='normal'
                w='100%'
                h='100%'
                p='5%'
                size="lg">Read About Our Mission</Button>
            </Link>
          </Box>
          </GridItem>
          <GridItem colStart={4} colEnd={6} h='100' w='100%' ><Box boxShadow='xl' p='6' rounded='md' bg='white' w={[120, 200, 300]}>
            <Link href="/lottery">
              <Button color="teal.600"
                variant="ghost"
                bg='purple.100'
                whiteSpace='normal'
                w='100%'
                h='100%'
                p='5%'
                size="lg">Play The Lottery Game!</Button>
            </Link>
          </Box>
          </GridItem>
        </Grid>
        <Link href="/donations">
          <Button color="teal.600"
            variant="ghost"
            padding="2px"
            marginTop={['30%', '15%', '5%']}
            whiteSpace='normal'
            size="lg">Donate to our Crowd Funding Campaign by clicking HERE</Button>
        </Link>
        <Link href="/application">
          <Button color="teal.600"
            variant="ghost"
            padding="50px 10px 50px 10px"
            marginTop={['30%', '15%', '5%']}
            whiteSpace='normal'
            size="lg">Apply HERE to become a candidate in our governance system, or an aunty in our nextwork.</Button>
        </Link>
        <LiFi/>
        <span>
            <SocialMediaIcons />
        </span>
      </main>

      <footer className={styles.footer}>
        <span>
          <Link href="/" passHref>
            <a>
              <Image src="/images/FourthWaveLogo_Transparent.png" alt="Vercel Logo" width={imageWith} height={imageHeight} />
            </a>
          </Link>
        </span>
      </footer>
    </div>
  )
}
