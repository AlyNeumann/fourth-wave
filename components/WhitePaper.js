import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure } from '@chakra-ui/react'

export default function FAQ() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
          <Button 
          colorScheme="teal"
          variant="ghost"
          size="lg"
          onClick={onOpen}>Read our white paper</Button>
    
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Fourth Wave DAO White Paper</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <WhitePaperText/> */}
              </ModalBody>
              <ModalFooter>
                <Button 
                colorScheme="teal"
                variant="ghost"
                size="lg"
                onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )

}