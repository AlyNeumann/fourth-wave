// const { TelegramClient } = require("telegram");
// const { StringSession } = require("telegram/sessions");
// const input = require("input"); // npm i input
import { useState, useEffect } from 'react'
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input';

const apiId = process.env.NEXT_PUBLIC_TELE_APP_ID;
const apiHash = process.env.NEXT_PUBLIC_TELE_APP_API_HASH;
const stringSession = new StringSession(""); // fill this later with the value from session.save()

export default async function Telegram () {

    const [windowLoaded, setWindowLoaded] = useState(false)

    useEffect(() => {
        setWindowLoaded(true)
    }, [])

    if(windowLoaded){
          (async () => {
            console.log("Loading interactive example...");
            const client = new TelegramClient(stringSession, apiId, apiHash, {
                connectionRetries: 5,
            });
            await client.start({
                phoneNumber: async () => await input.text("Please enter your number: "),
                password: async () => await input.text("Please enter your password: "),
                phoneCode: async () =>
                    await input.text("Please enter the code you received: "),
                onError: (err) => console.log(err),
            });
            console.log("You should now be connected.");
            console.log(client.session.save()); // Save this string to avoid logging in again
            await client.sendMessage("me", { message: "Hello!" });
        })();
    }
    return(<div>Telegram</div>)
}

//TODO: Make Call
// const {Api, TelegramClient} = require('telegram');
// const {StringSession} = require('telegram/sessions');

// const session = new StringSession('');
// const client = new TelegramClient(session, apiId, apiHash, {});

// (async function run() {
//     const result = await client.invoke(new Api.phone.requestCall({
//         video: true,
//         userId: new Api.InputUser({...}),
//         randomId: 3511366,
//         gAHash: Buffer.from('some bytes here'),
//         protocol: new Api.PhoneCallProtocol({...}),
//         }));
//     console.log(result); // prints the result
// })();

