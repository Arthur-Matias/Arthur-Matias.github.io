import * as functions from 'firebase-functions';
import * as dotenv from 'dotenv';
import * as nodemailer from "nodemailer";
import * as Busboy from "busboy"

dotenv.config();

const emailUser = functions.config().gmail?.email || process.env.EMAIL_USER || 'default_email@example.com';
const emailPass = functions.config().gmail?.password || process.env.EMAIL_PASS || 'default_password';

if (!emailUser || !emailPass) {
    console.error('Email user or password is not set:', { emailUser, emailPass });
    throw new Error('Email user or password is not set.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service
  auth: {
      user: emailUser,
      pass: emailPass,
  },
});

interface Attachment{
  filename: string,
  content: Buffer,
  contentType: string,
}

export const sendEmail = functions.https.onRequest((req, res) => {
  const busboy = Busboy({ headers: req.headers });
  let email = '';
  let subject = '';
  let message = '';
  const attachments: Attachment[] = [];

  busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string) => {
      const buffer: Buffer[] = [];
      file.on('data', (data: Buffer) => {
          buffer.push(data);
      });
      file.on('end', () => {
          attachments.push({
              filename: filename,
              content: Buffer.concat(buffer),
              contentType: mimetype,
          });
      });
  });

  busboy.on('field', (fieldname: string, val: string) => {
      if (fieldname === 'email') email = val;
      if (fieldname === 'subject') subject = val;
      if (fieldname === 'message') message = val;
  });

  busboy.on('finish', () => {
      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: subject,
          text: message,
          attachments: attachments,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return res.status(500).send(error.toString());
          }
          return res.status(200).send('Email sent: ' + info.response);
      });
  });

  req.pipe(busboy);
});

