import React from 'react';
import { treeleaf } from './new/Images';

export default function Contactt() {
  const backgroundImageStyle = {
    backgroundImage: `url(${treeleaf})`
  };

  return (
    <>
      <section id="contact">
        <div className="img" style={backgroundImageStyle}>
          <div className="row">
            <div className="col-md-9 col-lg-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Get in touch with us</h3>
                <div id="form-message-warning" className="mb-4"></div>
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary"
                        />
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
