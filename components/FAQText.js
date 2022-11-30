import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react';

export default function WhitePaperText() {

    return (
        <Box color='teal.700' pt="10px">
            <p className={styles.whitepapertitle}>
                What is Fourth Wave DAO?
            </p>
            <p className={styles.whitepapertext}>
                Fourth Wave is a decentralized autonomous organization that helps women in need of safe medical services related to reproductive rights connect with people near by who can help them. This network of helpers is called the Auntie Network. We are also building a mobile app that will serve as the gateway to DeFi protocols, and we will use profits to support the women and helpers in our Auntie Network.
            </p>
            <p className={styles.whitepapertitle}>
            Who is Fourth Wave DAO for?
            </p>
            <p className={styles.whitepapertext}>
            Fourth Wave DAO is for anyone who wants to help women, anyone who wants to grow their wealth while supporting women, and anyone who needs an easy-to-use way to access the best protocols that DeFi has to offer.
            </p>
            <p className={styles.whitepapertitle}>
            What is the Auntie Network?
            </p>
            <p className={styles.whitepapertext}>
            The Auntie Network is a network of people all across North America who offer food, housing, shelter, or financial assistance to women seeking to access safe medical services related to reproductive rights. This network currently only exists on Reddit and could be taken down at any moment. 
            As long as the Auntie Netowrk stays centralized, the governmant or a clever hacker could easily expose the identities of the Aunties by accessing a single database.
            We are moving the Auntie Network to the blockchain to ensure it stays standing, and by doing this with a DeFi protocol, we can prodive the Aunties in our network with the funding they need to help women.
            </p>
            <p className={styles.whitepapertitle}>
            Why is the Fourth Wave Governance model an innovation?
            </p>
            <p className={styles.whitepapertext}>
            Many current governance models are cumbersome and outdated. We offer a new modularized solution that we hope will spark a governance revolution. 
            Since the Fourth Wave community will be the ones driving the organization forward, we contructed a scalable and effecient governance model to facilitate this.
            </p>
            <p className={styles.whitepapertitle}>
            Who is the team behind Fourth Wave?
            </p>
            <p className={styles.whitepapertext}>
            Our team is made up of super hero tech & finance nerds, grumpy feminists, an experienced social worker, and political activists who view the blockchain ecosystem as a tool for political and social change.
            </p>
            <p className={styles.whitepapertitle}>
            How can I help?
            </p>
            <p className={styles.whitepapertext}>
            Use our early sign up form so you can reserve your spot in the DAO, and to stay up to date on our upcoming governance token launch.
            You can also support the project by joining our community, applying to be an Auntie or a Candidate by clicking the "Applications" button above, playing the lottery game, or donating to our crowd funding campaign. 
            We were kicked off of Go Fund Me, so we do need any help we can get.
            </p>
        </Box>
    )
}