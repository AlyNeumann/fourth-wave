

export default async function handler(req, res) {
    const { token } = JSON.parse(req.body)
    console.log(token)

    const captchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY}&response=${token}`,
        {
          method: 'POST'
        }
      );

    res.status(200).send(JSON.stringify({ captchaRes }))
}