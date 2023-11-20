import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32j4ym7', 'template_vig41qw', form.current, 'qZu2bRVf_i12O7WYh')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/" className="a-flex">
                <IconPhone /> &nbsp; +212 772 248 889
              </a>
              <a href="/" className="a-flex">
                <IconMail /> &nbsp; saadelmasrour26@gmail.com
              </a>
              <a href="/" className="a-flex">
                <IconLocation />
                &nbsp; Fes, Morocco
              </a>
            </div>
            <div className="contact-div__form">
              <form autoComplete="off" action="" ref={form} method="send" onSubmit={sendEmail}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='Your Name' name="from_name" required></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" name="user_email" required></input>

                <label>
                  Phone <b>*</b>
                </label>
                <input type="phone" placeholder="Your Number" name="number_phone" required></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." name="message" maxLength={5000} required></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+212 772 248 889</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
