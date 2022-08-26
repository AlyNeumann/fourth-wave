import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    const { email } = JSON.parse(req.body)

    console.log('testing email')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: email, 
        from: 'applications@fourthwavedao.ca', 
        templateId: 'd-106a64eabba846d8ab7c60f506fcd38c',
        dynamicTemplateData: {
            subject: 'testing template'
        }
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error.body)
        })

    res.status(200).send(JSON.stringify({ message: 'Email Sent' }))
}

