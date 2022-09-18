import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    const { email, id, type } = JSON.parse(req.body)
    console.log(req.body)

    console.log('testing email')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    let applicationType;
    if(type == "aunty"){
        applicationType = "Auntie"
    }else{
        applicationType = "Candidate"
    }

    const msg = {
        to: email,
        from: 'applications@fourthwavedao.ca',
        templateId: 'd-106a64eabba846d8ab7c60f506fcd38c',
        dynamicTemplateData: {
            subject: 'testing template',
            id: id,
            type: applicationType
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

