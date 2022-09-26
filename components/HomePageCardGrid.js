import { Grid, GridItem } from '@chakra-ui/react'
import HomeCard from './HomePageCard'
import React from "react";
import { useSpring, animated } from "react-spring";


export default function HomeCardGrid() {

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const props2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000, })

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={4} pt="100px" pb="30px">
            <GridItem colSpan={[6,4,2]} h={[240, 185, 220]} bg='teal.100' w="500" borderRadius='lg' pt="10px">
            <animated.div style={props}>
            <HomeCard text="Fourth Wave DAO is growing an anonymous decentralized network of people across North America known as the Auntie Network." />
            </animated.div>
            </GridItem>
            <GridItem colSpan={[6,4,2]} colEnd={6} h={[240, 185, 220]} bg='teal.100' w="500" borderRadius='lg' pt="10px">
            <animated.div style={props}>
                <HomeCard text="The Auntie Network will provide food, shelter, transportation, and support to women seeking reproductive health services." />
                </animated.div>
            </GridItem>
            <GridItem colSpan={[6,4,2]} h={[240, 185, 220]} bg='teal.100' w="500" borderRadius='lg' pt="10px">
            <animated.div style={props2}>
                <HomeCard text="Our DeFi protocol will attract philanthropist-investors who want to see their investments performing societal good." />
                </animated.div>
            </GridItem>
            <GridItem colSpan={[6,4,2]} colEnd={6} h={[240, 185, 220]} w="500" bg='teal.100' borderRadius='lg' pt="10px">
            <animated.div style={props2}>
                <HomeCard text="Our innovative governance model will demonstrate the true power of a community-driven organization." />
                </animated.div>
            </GridItem>
        </Grid>
    )
}