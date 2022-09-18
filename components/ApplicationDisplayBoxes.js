import { Box, Badge, VStack } from '@chakra-ui/react'
import * as Scroll from 'react-scroll';
import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';

export default function ApplicationDisplayBoxes(props) {
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
                                    return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i} >
                                        <IsolatedModal key={i} data={data} />
                                    </Box>)

                                })}
                                {props.candidates && props.candidates.map((data, i) => {
                                    return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i} >
                                        <IsolatedModal data={data} />
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

const IsolatedModal = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // console.log(data)

    const applicationStatusHandler = async (e) => {
        const status = e.target.value;
        const id = data._id;
        const type = data.formType;
        const res = await fetch('http://localhost:3000/api/updateApplicationStatus', {
            method: 'post',
            body: JSON.stringify({ id, status, type })
        })
        const json = await res.json()
        // console.log(json)
        sendEmailHandler();
        onClose();
    }

    const date = new Date(data.time).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      console.log(date)

    const sendEmailHandler = async () => {
        const email = data.email;
        const id = data._id;
        const type = data.formType;
        const res = await fetch('http://localhost:3000/api/email', {
            method: 'post',
            body: JSON.stringify({ email, id, type })
        })
        const json = await res.json()
        console.log(json)
        onClose();
    }

    return (
        <Box as="section">
            <Button onClick={onOpen} size="sm">
                {data.first}  {data.last}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {data.formType == "aunty" ? (<ModalHeader pt={[200, 150, 50]} color='purple.500'>Auntie Application Review</ModalHeader>) : (
                        <ModalHeader pt={[200, 150, 50]} color='purple.500'>Candidate Application Review</ModalHeader>
                    )}
                    <ModalCloseButton />
                    <ModalBody>
                        <p className={styles.descriptionsm}>FIRST NAME: {data.first}</p>
                        <p className={styles.descriptionsm}>LAST NAME: {data.last}</p>
                        <p className={styles.descriptionsm}>EMAIL: {data.email}</p>
                        <a target="_blank" href={data.twitter} rel="noopener noreferrer">
                        <p className={styles.descriptionsm}>TWITTER: </p>
                        <p className={styles.hyperlink}>{data.twitter}</p>
                        </a>
                        <a target="_blank" href={data.facebook} rel="noopener noreferrer">
                        <p className={styles.descriptionsm}>FACEBOOK: </p>
                        <p className={styles.hyperlink}>{data.facebook}</p>
                        </a>
                        <a target="_blank" href={data.socialother} rel="noopener noreferrer">
                        <p className={styles.descriptionsm}>OTHER: </p>
                        <p className={styles.hyperlink}>{data.socialother}</p>
                        </a>
                        <p className={styles.descriptionsm}>REASONS FOR APPLYING: </p>
                        <p className={styles.descriptionsm}>{data.reason}</p>
                        <p className={styles.descriptionsm}>DATE OF APPLICATION: {date}</p>
                        <Button value="accept" onClick={applicationStatusHandler}>Accept</Button>
                        <Button value="reject" onClick={applicationStatusHandler}>Reject</Button>
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