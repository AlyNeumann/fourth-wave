import { Container, Box } from '@chakra-ui/react'

export default function HomeCard(props) {

    return (
        <Container>
            <Box
                className="home-page-box"
                h={[220, 180, 210, 190]}
                boxShadow='xl' 
                rounded='md' 
                bg='teal.50'
                p='10%'
                borderWidth='7px'
                borderRadius='lg'
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='2%'
                fontSize={['sm','lg']}
                >
                {props.text}
            </Box>
        </Container>
    )
}