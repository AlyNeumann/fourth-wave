import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AuntyForm from "../components/AuntyForm";
import CandidateForm from '../components/CandidateForm';
import Wallet from '../components/Wallet';
import { Grid, GridItem, Button, Box } from '@chakra-ui/react';
import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import Link from 'next/link';
import Nav from '../components/Nav'

export default function Application() {

    const { state, dispatch } = useContext(Context);

    const [isAuntyApplication, setIsAuntyApplication] = useState(false);
    const [isCandidateApplicaion, setIsCandidateApplicaion] = useState(false);
    const [openApplication, setOpenApplication] = useState(false);

    const handleApplication = (e) => {
        if (e.target.value === "aunty") {
            setIsAuntyApplication(true);
            setIsCandidateApplicaion(false);
            setOpenApplication(true);
        }
        if (e.target.value === "candidate") {
            setIsCandidateApplicaion(true);
            setIsAuntyApplication(false);
            setOpenApplication(true);
        }
    }

    const handleCloseApplication = () => {
        setOpenApplication(false);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Fourth Wave Application Form</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Fourth Wave Application Forms
                </h1>
                <p className={styles.description}>
                </p>
                {!state.user ? <Wallet /> : `Account ${state.user} succesfully connected`}
                {!openApplication && <Grid templateColumns='repeat(5, 1fr)' gap={4} pt="100px">
                    <GridItem colSpan={2} h='100'><Box boxShadow='xl' p='6' rounded='md' bg='white'>
                        <Button colorScheme="teal"
                            variant="ghost"
                            size="lg"
                            bg='purple.100'
                            onClick={handleApplication}
                            value="aunty">Apply to become an Aunty</Button>
                    </Box>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h='100'><Box boxShadow='xl' p='6' rounded='md' bg='white'>
                        <Button colorScheme="teal"
                            variant="ghost"
                            size="lg"
                            value="candidate"
                            bg='purple.100'
                            onClick={handleApplication}>Apply to become a Candidate</Button>
                    </Box>
                    </GridItem>
                </Grid>}
                {openApplication &&
                    <Grid
                        h='60%'
                        gap='1'
                        width='65%'>
                        <GridItem colStart={1} colEnd={12} h='80%' w="100%" bg='purple.100'>
                            <Box boxShadow='2xl' pt='10' pl='50' pr='50' pb='30' rounded='md' bg='white'>
                                {isAuntyApplication && <AuntyForm />}
                                {isCandidateApplicaion && <CandidateForm />}
                            </Box>
                            <Box>
                                <Button colorScheme="teal"
                                    variant="ghost"
                                    size="lg"
                                    value="candidate"
                                    marginTop="50px"
                                    onClick={handleCloseApplication}>Close Application (will not save)</Button>
                            </Box>
                        </GridItem>
                    </Grid>
                }
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