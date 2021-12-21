import { useState, useEffect } from 'react'
import Notification from '../ui/notification'
import style from './contact-form.module.css'

const sendContactData = async (contactData) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/JSON'
    }
  })

  const data = await res.json()
  if ( !res.ok )
    throw new Error(data.message || 'Something went wrong')
}

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [reqStatus, setReqStatus] = useState() // pending, success, error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(()=>{
    if( reqStatus === 'success' || reqStatus === 'error'){
      const timer = setTimeout(()=> {
        setReqStatus(null)
        setErrorMsg(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [reqStatus])

  const sendMessageHandler = async (e) => {
    e.preventDefault()
    setReqStatus('pending')

    // optional: add client-side validation

    try {
      await sendContactData({email, name, message})
      setReqStatus('success')
      setEmail('')
      setName('')
      setMessage('')
    }
    catch(err) {
      setReqStatus('error')
      setErrorMsg(err.message)
    }
  }

  let notification
  if ( reqStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way'
    }
  }
  else if ( reqStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully'
    }
  }
  else if ( reqStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: errorMsg
    }
  }

  return (
    <section className={style.contact}>
      <h1>How can I help you?</h1>
      <form className={style.form} onSubmit={sendMessageHandler}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className={style.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
        </div>

        <div className={style.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows='5' value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
        </div>

        <div className={style.actions}>
          <button>SendMessage</button>
        </div>
      </form>

      {notification && <Notification {...notification}/> }
    </section>
  )
}

export default ContactForm
