import { Box, Badge, VStack } from '@chakra-ui/react';
import * as Scroll from 'react-scroll';
import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure } from '@chakra-ui/react';

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
                                        <IsolatedModal data={data} />
                                    </Box>)

                                })}
                                {props.candidates && props.candidates.map((data, i) => {
                                    return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i}>
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

    const sendEmailHandler = async (e) => {
        const email = data.email
        const res = await fetch('http://localhost:3000/api/email', {
            method: 'post',
            body: JSON.stringify({ email })
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
                    <ModalHeader pt={[200, 150, 50]} color='purple.500'>Email Accepted Applicants</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>First Name: {data.first}</p>
                        <p>Last Name: {data.last}</p>
                        <p>Email: {data.email}</p>
                        <p>Date of Application: {data.time}</p>
                        <Button onClick={sendEmailHandler}>Send Email</Button>
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