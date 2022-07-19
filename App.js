var nodemailer = require('nodemailer');
const {senderMail,receiverMail,password}=require('./Cruds')


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: senderMail, 
    pass: password,
  },
  });
  
  var mailOptions = {
    from: senderMail,
    to: receiverMail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });