import { Box, Badge, Image } from "@chakra-ui/react"
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Team(props) {
    return (<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' pt="2.5">
        <Image src={props.img} alt="person" width="100" height="100" pl="35%"/>

        <Box p='4'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {props.name}
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    {props.role} &bull; {props.role2}
                </Box>
            </Box>

            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                About
            </Box>

            <Box h="200">
               {props.bio}
            </Box>

            <Box display='flex' mt='2' alignItems='center'>

                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    Contact   &bull;
                    <Box as='span' color='gray.600' fontSize='sm' p="10">
                        <SocialIcon network="twitter" url={props.twitter} fgColor="#e7daf2" bgColor="#289e9e" />
                        <SocialIcon network="linkedin" url={props.linkedIn} fgColor="#e7daf2" bgColor="#289e9e" />
                    </Box>

                </Box>
            </Box>
        </Box>
    </Box>
    )
}