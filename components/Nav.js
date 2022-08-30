import { Tooltip, Flex, Box, Spacer, Button, ButtonGroup } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ChakraNextLink from './Link';
import Link from 'next/link'

export default function Nav() {

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box display='flex' w={['70%', '85%', '100%']}>
        <Tooltip label="Home" aria-label='A tooltip' w='100%' alignItems='left' >
          {/* <Link href="/"> */}
          <ChakraNextLink href="/">
            <Image src="/images/FourthWaveNavLogo_Transparent.png" alt="Fourth Wave Logo" width="100%" height='50%' />
          </ChakraNextLink>
          {/* </Link> */}
        </Tooltip>
        <Spacer />
        <ButtonGroup gap='2' pt='20px' w={[100, 200, 300]}>
          {/* <Link href="/about"> */}
          <ChakraNextLink href="/about">
            <Button colorScheme='teal'>About</Button>
            {/* </Link> */}
          </ChakraNextLink>
          <ChakraNextLink href="/lottery">
          {/* <Link href="/lottery"> */}
            <Button colorScheme='teal'>Lottery</Button>
          </ChakraNextLink>
          {/* </Link> */}
        </ButtonGroup>
      </Box>
    </Flex>
  )
}

