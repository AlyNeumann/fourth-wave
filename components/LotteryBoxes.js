import { Box, Badge, VStack } from '@chakra-ui/react'

export default function LotteryBoxes(props) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' color='black' >
            <Box p='6'>
                <Box alignItems='center'>
                    <Badge borderRadius='full' px='2' colorScheme='teal' marginBottom="20px">
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

                <Box >
                    <VStack overflow='auto'>
                        {props.data.map((data, i) => {
                            return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i} >
                                {data}
                            </Box>)

                        })}
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}