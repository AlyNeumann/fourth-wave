import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure } from '@chakra-ui/react'
import FAQText from './FAQText';

export default function FAQ() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        variant="ghost"
        size="lg"
        bg='purple.100'
        whiteSpace='normal'
        w='100%'
        h='100%'
        p='5%'
        onClick={onOpen}>Read our FAQ</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW="56rem" margin='auto'>
          <ModalHeader color='purple.500'>Frequently Asked Questions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FAQText />
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf4-EsHYewiDxX1Ietv51NJwWDqA7f28GRWYhunTlgDRXsmEQ/viewform?usp=sf_link" rel="noopener noreferrer">
          <Button color="teal.600"
            variant="ghost"
            padding="10px 1px 10px 1px"
            marginTop={['5%', '5%', '5%']}
            whiteSpace='normal'
            fontWeight=''
            size="sm">Fill out this form to join our early access list & to receive email updates!</Button>
            </a>
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
    </>
  )

}