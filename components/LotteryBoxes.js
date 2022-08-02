import { Box } from '@chakra-ui/react'

export default function LotteryBoxes(props) {
    return (
        <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
           {props.children}
        </Box>
    )
}