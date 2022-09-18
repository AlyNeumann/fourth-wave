import React, { useContext, useState, useRef } from 'react';
import { Context } from "../context/context";
import { Button, Grid, GridItem, Checkbox, Text } from '@chakra-ui/react'
import Reaptcha from 'reaptcha';

export default function AuntyForm() {

    const [age, setAge] = useState("35-44")
    const { state, dispatch } = useContext(Context);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [verified, setVerified] = useState(false);
    const captchaRef = useRef(null);

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const verify = (e) => {
        console.log(e)
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
            setVerified(true)
        })

    }

    return (
        <form action="/api/auntyForm" method="post" spellCheck="false">
            <Text fontSize='3xl' color='teal.600'>Aunty Application</Text>
            {/* <p>All information submitted to Fourth Wave will be kept confidential.</p> */}
            <Grid h="675px" w="100%" border='1px' borderColor='purple.100' borderRadius='15px' color='teal.700'>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50' borderRadius='15px 15px 0 0' w="100%">
                    <label htmlFor="first">First Name: </label>
                    <input type="text" id="nametext" name="first" required pattern="[a-zA-Z]{3,20}" maxLength="30"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Last Name: </label>
                    <input type="text" id="nametext" name="last" required pattern="[a-zA-Z]{3,35}" maxLength="40"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Email Address: </label>
                    <input type="email" id="nametext" name="email" required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" maxLength="40"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Link / URL to your twitter (EG: https://twitter.com/the_code_queen): </label>
                    <input type="url" id="socialtext" name="twitter" maxLength="100"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Link / URL to your facebook: </label>
                    <input type="url" id="socialtext" name="facebook" maxLength="100"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Link / URL to other social medias: </label>
                    <input type="url" id="socialtext" name="socialother" maxLength="100"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">References: </label>
                    <input type="text" id="socialtext" name="references" required maxLength="300" minLength="50"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Reasons for applying (approximately 150 to 300 words): </label>
                    <input type="text" id="reasonstext" name="reason" required maxLength="1500" minLength="150"/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="age ">Age: </label>
                    <select value={age} onChange={handleAge} name="age">
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55-64">55-64</option>
                        <option value="65-74">65-74</option>
                        <option value="75-84">75-84</option>
                        <option value="85-94">85-94</option>
                    </select>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <Checkbox size='lg' colorScheme='purple' defaultChecked>
                        By checking this box, you are agreeing to be contacted by the Fourth Wave Team.
                    </Checkbox>
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="wallet">User Wallet: </label>
                    <input type="text" id="wallet" name="wallet" value={state.user} readOnly />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <Reaptcha
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                        ref={captchaRef}
                        onVerify={verify}
                        size="normal"
                    ></Reaptcha>
                </GridItem>
                <GridItem rowSpan={4} colSpan={4} p="2" bg='purple.50' borderRadius='0 0 15px 15px'>
                    <Button type="submit" disabled={!verified}>Submit</Button>
                </GridItem>
            </Grid>
        </form>

    )
}