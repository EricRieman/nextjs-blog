import Head from 'next/head'
import ContactForm from '../components/contact/contact-form'

const ContactPage = () => {
  return <>
    <Head>
      <title>Contact me</title>
      <meta name='description' content='Send me a message' />
    </Head>
    <ContactForm />
  </>
}

export default ContactPage