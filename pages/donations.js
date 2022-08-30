import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Nav from '../components/Nav'
import Link from 'next/link';
// import ChakraNextLink from '../components/Link';
import styles from '../styles/Home.module.css'
import { Grid, GridItem, Box, Button } from '@chakra-ui/react'
import CreditDonate from '../components/CreditDonate';
import VideoPlayer from '../components/CrowdFunderVideo';


export default function Donations() {

    let imageWith = 72;
    let imageHeight = 72;

    const [loadVideo, setLoadVideo] = useState(false)

    useEffect(() => {
        setLoadVideo(true)
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Done to support the development of Fourth Wave DAO</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/FourthWave_Logo_Circle.png" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Crowd Funding
                </h1>
                <p className={styles.description}>
                    Donate to support the development of Fourth Wave DAO
                </p>
                <p className={styles.descriptionsm}>
                    We were blocked from using the traditional crowd funding platforms.
                </p>
                <p className={styles.descriptionsm}>
                    Go Fund Me has made it clear that they do not support womens rights, so please donate to Fourth Wave directly by using one of our secure payment options below.
                </p>
                <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    {!loadVideo ? "" : <VideoPlayer />}
                </Box>
                <Grid pt="6">
                    <div>
                        <Image
                            src='https://d1wqzb5bdbcre6.cloudfront.net/505800aa25923f8a0e61974599b60e1b51368c614ed6b4edf5e498f1003dbdd3/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785446637a526e70424e565a31616b30785931647966475a735833526c633352664e3367355258427a55574674526e6c5a5a6b7873524739794f546c735457706e3030684d523878397658'
                            alt='donations'
                            width={150}
                            height={150}
                        />
                    </div>
                    <CreditDonate />
                    <p className={styles.descriptionsm}>
                        or
                    </p>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <GridItem colStart={4} colEnd={6} h='100' w='100%'>
                            <Box boxShadow='xl' p='6' rounded='md' bg='white' h='100' w={[80, 200, 300]}>
                                <Button colorScheme="teal"
                                    variant="ghost"
                                    size="lg"
                                    value="candidate"
                                    whiteSpace='normal'
                                    w='100%'
                                    h='10%'
                                    type="submit"
                                    role="link"
                                >
                                    <input type="hidden" name="hosted_button_id" value="9HSAPP5VWL2U4" />
                                    <input className={styles.paypal} type="image" src="/images/paypalbutton.png" border="none" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                </Button>
                            </Box>
                        </GridItem>
                    </form>
                </Grid>
                <p className={styles.description}>
                    Why does Fourth Wave need crowd funding?
                </p>
                <p className={styles.descriptionsm}>
                    Although I have already begun coding the application, I am only one woman, and I need some help. I am looking to cover the first three months of our startup costs.
                </p>
                <p className={styles.descriptionsm}>
                    I need a budget to hire a senior Solidity developer, a React Native developer, as well as someone qualified to help with marketing and content creation.
                </p>
                <p className={styles.descriptionsm}>
                    Once we launch in three months, there will be no further crowd funding needed.
                </p>
                <p className={styles.descriptionsm}>
                    I only need your help with this first push to launch our MVP!
                </p>
            </main>

            <footer className={styles.footer}>
                <span>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/images/FourthWaveLogo_Transparent.png" alt="Vercel Logo" width={72} height={72} />
                        </a>
                    </Link>
                    {/* <ChakraNextLink href="/">
                        <Image src="/images/FourthWaveLogo_Transparent.png" alt="Vercel Logo" width={imageWith} height={imageHeight} />
                    </ChakraNextLink> */}
                </span>
            </footer>
        </div>
    );
}