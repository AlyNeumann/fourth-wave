import { Box, Grid, GridItem, Button } from '@chakra-ui/react'
import LotteryBoxes from './LotteryBoxes'

export default function LotteryGrid(props) {

    const winners = ["OX1213123dsf", "OXrhqo34204u723", "OX3427804ujdf"]
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4} pt="30px">
            <GridItem colSpan={2} h='200' bg='purple.100'>
                <LotteryBoxes title="Lottery Pot" text="The current lottery pot total: " data={['$10045']} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='200' bg='purple.100'>
                <LotteryBoxes title="Treasury" text="The current treasury total: " data={['$10045458']} />
            </GridItem>
            <GridItem colSpan={2} h='200' bg='purple.100'>
                <LotteryBoxes title="Current Players" text="List of current lottery players: " data={winners} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='200' bg='purple.100'>
                <LotteryBoxes title="Past Winners" text="List of the previous lottery winners: " data={winners} />
            </GridItem>
        </Grid>
    )
}