const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiId = parseInt(process.env.NEXT_PUBLIC_TELE_APP_ID);
const apiHash = process.env.NEXT_PUBLIC_TELE_APP_API_HASH;
const stringSession = new StringSession(""); // fill this later with the value from session.save()

export default async function handler(req, res) {
    console.log(apiId)
    try {
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
            await client.sendMessage("me", { message: "Hello from Fourth Wave DAO!" });

            // const result = await client.invoke(new Api.phone.requestCall({
            //     video: true,
            //     userId: new Api.InputUser(1338460793),
            //     randomId: 3511366,
            //     gAHash: Buffer.from('1AQAOMTQ5LjE1NC4xNzUuNTgBuzlyWFlnLvY4nK9n0RwmP3c6BbL6rx6nr8EYLG8sBlgHnwRaDt7s48ZqV0BQObeNW5kGSW14gUinchu72oSkolQO2lCOE6mdbJcWfZlLls3a/1sHlqZK4OtOTC99tX/O80sTF+g1zh8U10qaHv7yASIElV9hEeJhaXDIzJMGqYZYz33isc6VAVqsmmp6Y/BK5TarvFvwCtc+BFprF/nfia8kMOApF32LRGRoEj53rMWKyE68XKFQdi8G8jiOL2+VjJJdZ9HXMiLfc53kQ+W1VTC6+oQ0f8PYS/7H7U4gLe3safSCihp5Nj4JDYes8m+yGZmO9Vufgd/ujA20ik75sPk='),
            //     protocol: new Api.PhoneCallProtocol(new Api.phone.PhoneCall),
            // }));
            // console.log(result); // prints the result
        })();
    }
    catch (e) {
        console.log(e)
    }

}

//TODO - this wont work on front end because of fs & net module - 
//Create form that sends these details? - no because the confirmation code comes later....
//add random id generator