import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import ApplicationDisplayBoxes from "./ApplicationDisplayBoxes";
import AcceptedApplicationDisplayBoxes from "./AcceptedApplicationDisplayBoxes";

export default function ApplicationGrid(props) {
    let newAunties = props.aunties.filter(aunty => aunty.status === "new");
    let acceptedAunties = props.aunties.filter(aunty => aunty.status === "accept");
    let newCandidates = props.candidates.filter(candidate => candidate.status === "new");
    let acceptedCandidates = props.candidates.filter(candidate => candidate.status === "accept");

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4} pt="30px">
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]} >
                <ApplicationDisplayBoxes title="Auntie Applications" text="Review the latest Auntie Applicants: " aunties={newAunties} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' bg='purple.100' w={[150, 300, 500]}>
                <ApplicationDisplayBoxes title="Candidate Applications" text="Review the latest Candidate Applicants: " candidates={newCandidates} />
            </GridItem>
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]} >
                <AcceptedApplicationDisplayBoxes title="Accepted Auntie Applications" text="Contact Accepted Auntie Applicants: " aunties={acceptedAunties} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' bg='purple.100' w={[150, 300, 500]}>
                <AcceptedApplicationDisplayBoxes title="Accepted Candidate Applications" text="Contact Accepted Candidate Applicants: " candidates={acceptedCandidates} />
            </GridItem>
        </Grid>
    )
}