import React, { useState } from "react"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(`Thanks, ${formData.name}! Sourdough Hut will get back to you soon!`)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
        <p className={styles.description}>
          We'd love to hear from you! Please fill out the form below.
        </p>
      </header>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formControl}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className={styles.formControl}
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={styles.inputTextarea}
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
