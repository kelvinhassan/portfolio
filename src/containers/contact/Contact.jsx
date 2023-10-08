import React, { useRef, useState, useEffect } from "react"
//import emailjs from "@emailjs/browser"
import { MdContactMail } from "react-icons/md"
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent"
import { Animate } from "react-simple-animate"
import emailjs from "@emailjs/browser"
import "./style.scss"

const Contact = () => {
  const form = useRef()
  const sendEmail = () => {
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

  const initialValues = { user_name: "", user_email: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    sendEmail()
    setFormValues(initialValues)
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  })

  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i
    if (!values.user_name) {
      errors.user_name = "Name is required"
    }
    if (!values.user_email) {
      errors.user_email = "email is required"
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format"
    }
    if (!values.message) {
      errors.message = "message is required"
    } else if (values.message.length < 10) {
      errors.message = "The email is too short"
    }

    return errors
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
          <br />
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
            onSubmit={handleSubmit}
          >
            <div className="contact__content__form__controlWrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                  value={formValues.user_name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
                <p>{formErrors.user_name}</p>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"email"}
                  value={formValues.user_email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                <p>{formErrors.user_email}</p>
              </div>
              <div>
                <textarea
                  required
                  className="inputDescription"
                  name="message"
                  rows="5"
                  placeholder="Write your email here"
                  value={formValues.message}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  {formErrors.message}
                </label>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                  <div className="descriptionLabel">
                    Email sent Successfully
                  </div>
                ) : (
                  <p></p>
                )}
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
