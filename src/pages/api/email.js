import nodemailer from "nodemailer";

export default (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account");
      console.error(err);
      res.status(501).send({ message: "Bad request!" });
      return;
    }

    console.log("Credentials obtained, sending message...");

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries
    console.log(process.env.GMAIL_USER, process.env.GMAIL_PASSWORD, 'benobi089@gmail.com', 'Degivenchy01')
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport(
      {

        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // auth: {
        //     type: 'OAuth2',
        //     clientId: '000000000000-xxx.apps.googleusercontent.com',
        //     clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0'
        // },
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
        logger: true,
        transactionLog: true, // include SMTP traffic in the logs
      },
      {
        // default message fields

        // sender info
        from: `${req.body.name} <${req.body.email}>`,
        headers: {
          "X-Laziness-level": 1000, // just an example header, no need to use this
        },
      }
    );

    // Message object
    let message = {
      // Comma separated list of recipients
      to: "BioStatStars <benobi089@gmail.com>",

      // Subject of the message
      // subject: "Nodemailer is unicode friendly ✔" + Date.now(),
      subject: `BioStatStars contact mail from ${req.body.name} - <${req.body.email}>`,

      // plaintext body
      text: `${req.body.message}`,

      // HTML body
      html: `<p>${req.body.message}</p>`,

      // AMP4EMAIL
      amp: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>body{visibility:hidden}</style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
          </head>
          <body>
            <p>${req.body.message}</p>
          </body>
        </html>`,
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log("Error occurred");
        console.log(error.message);
        return res.status(500).send({ message: "Message not delivered!" });
      }

      console.log("Message sent successfully!");
      console.log(nodemailer.getTestMessageUrl(info));

      res.status(200).json({
        msg: "Thank you for contacting us, we will be in touch shortly.",
      });

      // only needed when using pooled connections
      transporter.close();
    });
  });
};
