import { useEffect, useState } from 'react'
import NavBar from "../components/NavBar";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "../style/index.scss"


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'scothostsorg@gmail.com',
        'template_yuyjefo',
        form.current,
        'G9WXeTTQeMUE7qrvJ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
      <>
                <NavBar />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
         Contact Us
          </h1>
          <p>
            Get in touch for more information, we would love to hear from you!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Paul Murray,
          <br />
          Glasgow, Scotland
          <br />
          United Kingdom <br />
          <br />
          <span>07502162778</span>
          <br />
          <span>code4development@outlook.com</span>
        </div>
        <div className="map-wrap">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71661.14940461643!2d-4.3024977215533955!3d55.85553666630124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow!5e0!3m2!1sen!2suk!4v1649697661339!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    
    </>
  )
}

export default Contact
