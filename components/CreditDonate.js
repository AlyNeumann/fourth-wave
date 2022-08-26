import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
import { Grid, GridItem, Box, Button, Select, RadioGroup, HStack, Radio } from '@chakra-ui/react'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CreditDonate() {
    const router = useRouter();
    const { success, canceled } = router.query;
    const [paymentType, setPaymentType] = useState('payment')

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        // const query = new URLSearchParams(window.location.search);
        setPaymentType('payment');
        if (success !== undefined || canceled !== undefined) {

        }
        if (success) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (canceled) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, [success, canceled]);

    const handlePaymentType = (e) => {
        console.log(e.target.value)
        const payment = e.target.value;
        setPaymentType(payment);
    }

    return (
        <form action="/api/checkoutSessions" method="POST">
            <section>
                <GridItem colStart={4} colEnd={6} p="30px">
                    <select onChange={handlePaymentType} name="paymentType" value={paymentType}>
                        <option value='payment'>One Time Contribution</option>
                        <option value='subscription'>Monthly Recurring Contribution</option>
                    </select>
                </GridItem>
                {paymentType === 'subscription' ? (
                    <GridItem colStart={4} colEnd={6}> <Box display='flex' >
                        <label htmlFor="first">$10</label>
                        <input type='radio' id="nametext" name="amount" value='price_1LX8QAA5VujM1cWrw00Es00x'></input>
                        <label htmlFor="second">$50</label>
                        <input type='radio' id="nametext" name="amount" value='price_1LX8RdA5VujM1cWrhlDmhW9z' defaultChecked></input>
                        <label htmlFor="third">$100</label>
                        <input type='radio' id="nametext" name="amount" value='price_1LX8SwA5VujM1cWroy1aJlpQ'></input>
                        <label htmlFor="second">$250</label>
                        <input type='radio' id="nametext" name="amount" value='price_1LX8RdA5VujM1cWrhlDmhW9z'></input>
                        <label htmlFor="third">$500</label>
                        <input type='radio' id="nametext" name="amount" value='price_1LX8SwA5VujM1cWroy1aJlpQ'></input>
                        </Box>
                    </GridItem>
                ) : (<GridItem colStart={4} colEnd={6}> <Box display='flex' >
                    <label htmlFor="first">$10</label>
                    <input type='radio' id="nametext" name="amount" value='price_1LX8QAA5VujM1cWr2wZJrCF9'></input>
                    <label htmlFor="second">$50</label>
                    <input type='radio' id="nametext" name="amount" value='price_1LX8RdA5VujM1cWr5LCbB4lH' defaultChecked></input>
                    <label htmlFor="third">$100</label>
                    <input type='radio' id="nametext" name="amount" value='price_1LX8SwA5VujM1cWrM2DMAUlU'></input>
                    <label htmlFor="second">$250</label>
                    <input type='radio' id="nametext" name="amount" value='price_1LX8TpA5VujM1cWr0QVN8Dar'></input>
                    <label htmlFor="third">$500</label>
                    <input type='radio' id="nametext" name="amount" value='price_1LX8UkA5VujM1cWrdw4XOkD8'></input>
                    </Box>
                </GridItem>)}
                <GridItem colStart={4} colEnd={6} h='100' w='100%'><Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <Button colorScheme="teal"
                        variant="ghost"
                        size="lg"
                        value="candidate"
                        bg='purple.100'
                        whiteSpace='normal'
                        w='80%'
                        h='100%'
                        p='5%'
                        type="submit"
                        role="link"
                    >Donate with credit</Button>
                </Box>
                </GridItem>
            </section>
        </form>
    )
}