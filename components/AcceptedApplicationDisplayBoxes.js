import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Box, Badge, VStack } from '@chakra-ui/react';
import * as Scroll from 'react-scroll';
import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure, Tooltip } from '@chakra-ui/react';
import Map from '../components/Mapbox';
import { getRandomWord } from '../helpers/RandomWordGenerator';
import styles from '../styles/Home.module.css'

export default function AcceptedApplicationDisplayBoxes(props) {
    let Element = Scroll.Element;

    return (
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='black' h='200'>
            <Box p='6' >
                <Box alignItems='center'>
                    <Badge borderRadius='full' px='2' colorScheme='teal' marginBottom="20px" whiteSpace='normal'>
                        {props.title}
                    </Badge>

                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        marginBottom="20px"
                    >
                        {props.text}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                </Box>
                <Element name="test7" className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    <Box >
                        <Element name="test7" className="element" id="containerElement" style={{
                            position: 'relative',
                            height: '100px',
                            overflow: 'scroll',
                            marginBottom: '10px'
                        }}>

                            <VStack>
                                {props.aunties && props.aunties.map((data, i) => {
                                    return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i}>
                                        <IsolatedModal data={data} vetter={props.vetterId} />
                                    </Box>)

                                })}
                                {props.candidates && props.candidates.map((data, i) => {
                                    return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i}>
                                        <IsolatedModal data={data} vetter={props.vetterId} />
                                    </Box>)
                                })}

                            </VStack>
                        </Element>
                    </Box>
                </Element>
            </Box>
        </Box>
    )
}

const IsolatedModal = ({ data, vetter }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [coords, setCoords] = useState([]);
    const [word, setWord] = useState(null)

    useEffect(() => {
        if (!word) {
            let result = getRandomWord();
            setWord(result);
        }
    }, [])

    const gatedSetCoords = useCallback((value) => {
        console.log(value)
        setCoords(value);
    }, []);

    //TODO: make sure vetter address exists before letting them open applications!!!!
    const applicationStatusHandler = async () => {
        const status = "interview";
        const id = data._id;
        const type = data.formType;

        const res = await fetch('http://localhost:3000/api/updateInterviewStatus', {
            method: 'post',
            body: JSON.stringify({ id, status, type, vetter })
        })
        const json = await res.json()
        console.log(json)
    }

    const approveApplicantHandler = (e) => {
        //use to seperate approve & reject (or could make seperate handler...)
        console.log(e.target.value)
        //use to seperate Aunties & Candidates
        console.log(data.formType)
        const answer = window.confirm("are you sure?")
        if (answer) {
            console.log('mint NFT, delete DB info, add new record with NFT address, locations, & wallet')
            onClose();
        } else {
            alert("Approval cancelled. Please Approve or Reject applicant.")
            console.log("Approval Cancelled");
        }
    }

    return (
        <Box as="section" >
            {
                (data.status == "interview" && data.vetter == vetter && <Button onClick={onOpen} size="sm">
                    {`${data.first}  ${data.last}: Continue Interview Process`}
                </Button>)
            }
            {
                (data.status == "pending" && <Button onClick={onOpen} size="sm">
                    {(data.status == "pending") && `${data.first}  ${data.last}: Being Interview Process`}
                </Button>)
            }
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW="56rem">
                    <ModalHeader pt={[200, 150, 50]} color='purple.500'>Contact Accepted Applicant</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        {data.status === "interview" ? <p className={styles.warning}>Interview Process Already Started For: </p> : <p className={styles.nowarning}>Start the Interview Process For: </p>}
                        <p>First Name: {data.first}</p>
                        <p>Last Name: {data.last}</p>
                        <p>Email: {data.email}</p>
                        <p>Date of Application: {data.time}</p>
                        <p className={styles.descriptionsm}>Step 1</p>
                        <p>Copy the applicant's Telegram ID by clicking on it.</p>
                        <Tooltip label='Copy Text'>
                            <Button onClick={() => { navigator.clipboard.writeText(data.telegramId) }}>Telegram ID: {data.telegramId}</Button>
                        </Tooltip>
                        <p className={styles.descriptionsm}>Step 2</p>
                        <p>Click the button below to open the chat app. Login and use the search bar on the top left to search the user name. Click on their name to start the chat. This action officially assigns you to this interview process.</p>
                        <a target="_blank" href="https://chat.fourthwavedao.ca/" rel="noopener noreferrer">
                            <Button onClick={applicationStatusHandler}>Open Chat App</Button>
                        </a>
                        <p className={styles.descriptionsm}>Step 3</p>
                        <p>Copy the secret code word below by clicking on it.</p>
                        <Tooltip label='Copy Text'>
                            <Button onClick={() => { navigator.clipboard.writeText(word) }}>Code Word: {word}</Button>
                        </Tooltip>
                        <p className={styles.descriptionsm}>Step 4</p>
                        <p>Message the applicant with the secret code word. Ask the applicant to write the code word down on a piece of paper, then send you a selfie with the their face and the code word visible in the photo.</p>
                        <p className={styles.descriptionsm}>Step 5</p>
                        <p>Ask the applicant their general location (nothing specific for privacy reasons).</p>
                        <p className={styles.descriptionsm}>Step 6</p>
                        <p>Enter the applicant's general location. This can be a city, state, or province.</p>
                        <Map coords={coords} setCoords={gatedSetCoords} />
                        <p className={styles.descriptionsm}>Step 7</p>
                        <p>Ask the applicant any further questions if you sense any concerns or red flags (voice chat or seeing a piece of photo ID can help with this).</p>
                        <p className={styles.descriptionsm}>Step 8</p>
                        <p>Approve or Reject the applicant by clicking the button below!</p>
                        <Button value="approve" onClick={approveApplicantHandler}>Approve Application</Button>
                        <Button value="reject" onClick={approveApplicantHandler}>Reject Application</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            variant="ghost"
                            size="lg"
                            w='100%'
                            h='100%'
                            p='5%'
                            whiteSpace='normal'
                            onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}