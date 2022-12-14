import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { Grid, GridItem, Button, Box, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import SocialMediaIcons from '../components/SocialMediaIcons';
import HomeCardGrid from '../components/HomePageCardGrid';
import AuntieMap from '../components/AuntieMap';


export default function Home() {

  let imageWith = 72;
  let imageHeight = 72;

  return (
    <div className={styles.container}>
      <Head>
        <title>Fourth Wave App</title>
        <meta name="description" content="Fourth Wave home page" />
        <link rel="icon" href="/images/FourthWaveLogo_Transparent.png" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fourth Wave DAO
        </h1>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf4-EsHYewiDxX1Ietv51NJwWDqA7f28GRWYhunTlgDRXsmEQ/viewform?usp=sf_link" rel="noopener noreferrer">
          <Button color="teal.600"
            variant="ghost"
            padding="10px 10px 10px 10px"
            marginTop={['5%', '5%', '5%']}
            whiteSpace='normal'
            fontWeight={['normal','bold', 'bolder']}
            size={['sm', 'md', 'lg']}>Fill out this form to join our early access list & to receive email updates!</Button>
            </a>
        <h4 className={styles.description}>
          Auntie Network Growth
        </h4>
        <AuntieMap/>
        <Divider />
        <HomeCardGrid />

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
        <span>
          <SocialMediaIcons />
        </span>
        <Link href="/application">
          <Button color="teal.600"
            variant="ghost"
            padding="50px 10px 50px 10px"
            marginTop={['30%', '15%', '5%']}
            whiteSpace='normal'
            size="lg">Apply HERE to become a candidate in our governance system, or an aunty in our nextwork.</Button>
        </Link>
        <Link href="/donations">
          <Button color="teal.600"
            variant="ghost"
            padding="2px"
            marginTop={['30%', '15%', '5%']}
            whiteSpace='normal'
            size="lg">Donate to our Crowd Funding Campaign by clicking HERE</Button>
        </Link>
        {/* <span>
            <SocialMediaIcons />
        </span> */}
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
