import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "gugfug1@gmail.com", // generated ethereal user
      pass: "qwmbrlfvqlmziuxb", // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: "gugfug1@gmail.com", // sender address
    to: JSON.parse(request.body).email, // list of receivers
    subject: "Hello ✔", // Subject line

    html: `<div>
      <h1 style="color: red">awesome title</h1>
    </div>`, // html body
  });

  response.status(200).json(info);
}
