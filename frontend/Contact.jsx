import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    emailjs.send(
      'service_6kqs70q',
      'template_udyqxvm',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'a0kug0obyBcIElY8Q'
    )
    .then(() => {

      alert('Message Sent Successfully')

    })
    .catch(() => {

      alert('Error Sending Message')

    })
  }

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Send
        </button>

      </form>
      <div className="contact-info">

  <p>Email : laxmiprasannamandala49@gmail.com</p>

  <a
    href="https://instagram.com/laxmiprasanna_jagan"
    target="_blank"
  >
    Instagram ↗
  </a>

  <a
    href="https://linkedin.com/in/laxmi-prasanna-mandala-78749140a"
    target="_blank"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/laxmiprasannamandala49"
    target="_blank"
  >
    GitHub ↗
  </a>

</div>

    </section>
  )
}

export default Contact
