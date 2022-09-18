import React from 'react';
import { Button } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import SocialMediaIcons from '../components/SocialMediaIcons';

export default function DuplicateEmail() {

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
          Your previous application was already recieved.
        </h1>
        <Link href="/" passHref>
          <Button colorScheme="teal"
            variant="ghost"
            size="lg"
            bg='purple.100'
            whiteSpace='normal'
            w='50%'
            h='20%'
            p='2%'
            value="aunty">Home</Button>
            </Link>
            <span>
            <SocialMediaIcons />
        </span>
      </main>
    </div>)
}