import { Grid, GridItem } from '@chakra-ui/react';
import Team from './AboutTeam';


export default function AboutTeamGrid() {

    return (
        <Grid templateColumns={['repeat(6)', 'repeat(6)', 'repeat(6, 1fr)']} templateRows='repeat(2, 1fr)' gap={4} pt="30px" pb="30px">
            <GridItem colSpan={[6, 4, 2]} bg='teal.100' w="500" borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Aly_circle.png"
                    name="Aly Neumann" 
                    role="Founder" 
                    role2="Lead Developer" 
                    bio="Aly is a full stack & cloud developer who recently made the switch to Web3 as a Solidity developer & a blockchain technology blogger. She has a ton of startup experience, and has lead numerous successful artistic projects."
                    twitter="https://twitter.com/the_code_queen"
                    linkedIn="https://www.linkedin.com/in/alymargueriteneumann/"/>
            </GridItem>
            <GridItem colSpan={[6, 4, 2]} colEnd={6} bg='teal.100' w="500" borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Gaby_circle_sm.png"
                    name="Gaby Chen" 
                    role="" 
                    role2="Mobile App Developer" 
                    bio="Gaby is a junior full stack developer who has worked with Aly on her various artistic projects as an audio engineer over the last decade. Gaby is an extremely fast learner and a great team member, and is developing our mobile app."
                    twitter="https://twitter.com/FourthWaveDAO"
                    linkedIn="https://www.linkedin.com/in/gabriel-chen-9a7ba99a/"/>
            </GridItem>
            <GridItem colSpan={[6, 4, 2]} colEnd={6} bg='teal.100' w="500" borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Maysam_circle_sm.png"
                    name="Maysam Shahsavari" 
                    role="" 
                    role2="Front End Developer" 
                    bio="Maysam is a senior front end developer who is passionate about women’s rights as well as all things tech and blockchain. He has extensive experience from working at various startups, and we are lucky to have him on board."
                    twitter="https://twitter.com/DevMaysam"
                    linkedIn="https://www.linkedin.com/in/maysam-shahsavari-1bb07262/"/>
            </GridItem>
            <GridItem colSpan={[6, 4, 2]} colEnd={6} bg='teal.100' w="500" borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Simon_circle-sm.png"
                    name="Simon Neviani" 
                    role="" 
                    role2="Marketing" 
                    bio="Simon is a seasoned content creator and film maker who specializes in getting brand new projects off the ground. His attention to detail and ability to tell stories makes him perfect for this role at Fourth Wave DAO."
                    twitter="https://www.instagram.com/iamsimoneneviani/"
                    linkedIn="https://www.linkedin.com/in/simoneneviani/"/>
            </GridItem>
            <GridItem colSpan={[6, 4, 2]} colEnd={6} w="500" bg='teal.100' borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Molly_circle_sm.png"
                    name="Molly Barber" 
                    role="" 
                    role2="Lead Vetter" 
                    bio="Molly is a social worker and political activist. She will ensure that the applications for the Auntie and Candidate roles within our system are coming from people acting in good faith, who truly want the best for the organization."
                    twitter="https://twitter.com/MollyBa021953"
                    linkedIn="https://www.linkedin.com/in/molly-barber-357a4a55/"/>
            </GridItem>
            <GridItem colSpan={[6, 4, 2]} colEnd={6} w="500" bg='teal.100' borderRadius='lg' pt="10px">
                    <Team 
                    img="https://fourth-wave-images.4everland.store/images/Wayne_circle_sm.png"
                    name="Wayne Robinson" 
                    role="" 
                    role2="Vetting Team"
                    bio="Wayne Robinson is an indigenous political activist and a marxist thinker. He studied Health & Human Services at Mohawk College and is a member of our vetting team, as well as a consultant for our governance model. "
                    twitter="https://twitter.com/FourthWaveDAO"
                    linkedIn="https://www.linkedin.com/company/fourth-wave-dao/"/>
            </GridItem>
        </Grid>
    )
}