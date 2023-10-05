import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { MdContactMail } from "react-icons/md"
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent"
import { Animate } from "react-simple-animate"
import "./style.scss"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_y66dq7d",
        "template_obw661r",
        form.current,
        "Mgi0dwPMAJKtCNPd3"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<MdContactMail size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            className="contact__content__form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact__content__form__controlWrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"email"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  className="inputDescription"
                  name="message"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Descritption
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  )
}

export default Contact
