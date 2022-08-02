import { Grid, GridItem, Button, Checkbox, Text } from '@chakra-ui/react'

export default function CandidateForm() {

    return (
            <form action="/api/form" method="post">
                <Text fontSize='3xl'>Candidate Application</Text>
                <Grid h="500px">
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                <label htmlFor="first ">First Name: </label>
                <input type="text" id="nametext" name="first" required pattern="[a-zA-Z]{3,20}" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                <label htmlFor="last ">Last Name: </label>
                <input type="text" id="nametext" name="last" required pattern="[a-zA-Z]{3,35}" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                <label htmlFor="last ">Email Address: </label>
                <input type="email" id="nametext" name="email" required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                    <label htmlFor="last ">Link to your twitter: </label>
                    <input type="text" id="socialtext" name="twitter" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                    <label htmlFor="last ">Link to your facebook: </label>
                    <input type="text" id="socialtext" name="facebook" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                    <label htmlFor="last ">Other social medias: </label>
                    <input type="text" id="socialtext" name="socialother" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                <label htmlFor="last ">Reasons for applying: </label>
                <input type="text" id="reasonstext" name="reason" required />
                </GridItem>
                <GridItem rowSpan={4} colSpan={4} p="2"bg='purple.100'>
                <Button type="submit">Submit</Button>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.100'>
                    <Checkbox size='lg' colorScheme='purple' defaultChecked>
                        By checking this box, you are agreeing to be contacted by the Fourth Wave Team.
                    </Checkbox>
                </GridItem>
                </Grid>
            </form>
    )
}