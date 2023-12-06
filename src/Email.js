import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        const serviceId = "service_93rinbs"
        const publicKey = "vzhcQsMXHOPmgvLVD"
        const templateID = "template_llgddn6"
        e.preventDefault();
        emailjs.sendForm(serviceId, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
