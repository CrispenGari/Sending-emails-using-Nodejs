import nodemailer from "nodemailer";
const trasporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "garidziracrispen@gmail.com",
    pass: "**************",
  },
});

const mailOptions = {
  from: "garidziracrispen@gmail.com",
  to: "crispendev@gmail.com, crispengari@gmail.com",
  subject: "Test Email using Node.js",
  text: "This is the test email from crispen Gari",
  replyTo: "garidziracrispen@gmail.com",
  cc: true,
  html: `
  <h1>This is a test Email from Crispen Gari</h1>
  
  To go to google please <a href="https://www.google.com">click</a> here!!
  `,
};

trasporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email was sent ", info);
  }
});
console.log("---------------------------------");
