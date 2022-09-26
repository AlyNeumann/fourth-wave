import { Container, Box } from '@chakra-ui/react'

export default function HomeCard(props) {

    return (
        <Container>
            <Box
                className="home-page-box"
                h={[220, 150, 200, 150]}
                boxShadow='xl' 
                rounded='md' 
                bg='teal.50'
                p='4'
                borderWidth='7px'
                borderRadius='lg'
                color='gray.500'
                fontWeight='semibold'
                letterSpacing=''
                fontSize={['sm','lg']}
                ml='2'>
                {props.text}
            </Box>
        </Container>
    )
}