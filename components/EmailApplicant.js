import {Button} from '@chakra-ui/react';
import axios from 'axios'

export default function EmailApplicant(props) {
    const email = props.email;

    const sendMail = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/email', { email })
            .then(
                (res) => {
                    alert('Email Sent!')
                }
            ).catch(
                (e) => console.log(e)
            )
    }

    return (
        <div>
            <Button onClick={sendMail}>Send Email Invite</Button>
        </div>
    )
}