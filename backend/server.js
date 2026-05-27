const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/send-email', async (req, res) => {

  const { name, email, message } = req.body

  try {

    const transporter = nodemailer.createTransport({

      service: 'gmail',

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }

    })

    await transporter.sendMail({

      from: email,

      to: process.env.EMAIL_USER,

      subject: 'Portfolio Contact Message',

      text: `
Name: ${name}

Email: ${email}

Message: ${message}
      `
    })

    res.status(200).json({
      success: true,
      message: 'Email Sent Successfully'
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: 'Error Sending Email'
    })
  }
})

app.listen(5000, ()=>{
  console.log("Server running")
})