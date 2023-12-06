import React, { useRef } from 'react';
import { treeleaf } from './new/Images';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export default function Contactt() {
  const form = useRef();
  const sendEmail = (e) => {
      const serviceId = "service_93rinbs"
      const publicKey = "vzhcQsMXHOPmgvLVD"
      const templateID = "template_llgddn6"
      e.preventDefault();
      emailjs.sendForm(serviceId, templateID, form.current, publicKey)
          .then((result) => {
              console.log(result.text);
              toast.success('Message sent successfully!', {
                position: toast.POSITION.TOP_RIGHT
              });
              form.current.reset();
          }, (error) => {
              console.log(error.text);
              toast.error('Failed to send message. Please try again.', {
                position: toast.POSITION.TOP_RIGHT
              });
          });
  };
  return (
    <div>
    <h2>Contact with me</h2>
    <hr />
    <div className="bgmine flex">
      <form ref={form} onSubmit={sendEmail} className="w-100">
        <div className='flex'>
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" className="form-control" />
          </div>
          <div className="form-group ml-3">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" className="form-control" />
          </div>
        </div>

        <div className='flex'>
          <div className="form-group w-100">
            <label htmlFor="message">Message</label>
            <textarea name="message" className="form-control" rows="4"></textarea>
          </div>
        </div>

        <div className='flex'>
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </form>
    </div>
    <ToastContainer />
  </div>
  )
}

  