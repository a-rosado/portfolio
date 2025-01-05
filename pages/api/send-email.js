import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // Your Gmail address
        pass: process.env.SMTP_PASS, // Your App Password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.RECEIVER_EMAIL, // Your email where messages will be sent
        subject: subject || 'No subject',
        text: message || 'No message content',
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
