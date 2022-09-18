import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import ApplicationDisplayBoxes from "./ApplicationDisplayBoxes";
import AcceptedApplicationDisplayBoxes from "./AcceptedApplicationDisplayBoxes";

export default function ApplicationGrid(props) {
    console.log(props)

    let newAunties = props.aunties.filter(aunty => aunty.status === "new");
    let acceptedAunties = props.aunties.filter(aunty => aunty.status !== "new");
    let newCandidates = props.candidates.filter(candidate => candidate.status === "new");
    let acceptedCandidates = props.candidates.filter(candidate => candidate.status !== "new");
    let vetterId = props.vetter.user;

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4} pt="30px">
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]} >
                <ApplicationDisplayBoxes title="Auntie Applications" text="Review the latest Auntie Applicants: " aunties={newAunties} vetterId={vetterId} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' bg='purple.100' w={[150, 300, 500]}>
                <ApplicationDisplayBoxes title="Candidate Applications" text="Review the latest Candidate Applicants: " candidates={newCandidates} vetterId={vetterId} />
            </GridItem>
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]} >
                <AcceptedApplicationDisplayBoxes title="Accepted Auntie Applications" text="Contact Accepted Auntie Applicants: " aunties={acceptedAunties} vetterId={vetterId} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' bg='purple.100' w={[150, 300, 500]}>
                <AcceptedApplicationDisplayBoxes title="Accepted Candidate Applications" text="Contact Accepted Candidate Applicants: " candidates={acceptedCandidates} vetterId={vetterId} />
            </GridItem>
        </Grid>
    )
}