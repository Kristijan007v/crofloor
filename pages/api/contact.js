const mailgunSdk = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const mailgun = mailgunSdk({ apiKey });

export default async (req, res) => {
  let response;

  try {
    response = await mailgun.messages().send({
      to: "kiki.vidovic.6969@gmail.com",
      from: req.body.email,
      subject: req.body.name,
      text: req.body,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  res.status(200).json({ result: response });
  console.log(response);
};
