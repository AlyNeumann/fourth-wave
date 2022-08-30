import { Tooltip, Flex, Box, Spacer, Button, ButtonGroup } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ChakraNextLink from './Link';

export default function Nav() {

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box display='flex' w={['70%', '85%', '100%']}>
        <Tooltip label="Home" aria-label='A tooltip' w='100%' alignItems='left' >
          <ChakraNextLink href="/">
            <Image src="/images/FourthWaveNavLogo_Transparent.png" alt="Fourth Wave Logo" width="100%" height='50%' />
          </ChakraNextLink>
        </Tooltip>
        <Spacer />
        <ButtonGroup gap='2' pt='20px' w={[100, 200, 300]}>
          <ChakraNextLink href="/about">
            <Button colorScheme='teal'>About</Button>
          </ChakraNextLink>
          <ChakraNextLink href="/lottery">
            <Button colorScheme='teal'>Lottery</Button>
          </ChakraNextLink>
        </ButtonGroup>
      </Box>
    </Flex>
  )
}

