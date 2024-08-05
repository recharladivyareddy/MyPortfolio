import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: <name>,
            message: message,
        };
        emailjs.send('service_id', '<template_id>',
            templateParams, '<user_id>')
            .then((result) => {
                console.log(result.text);
                console.log(email);
                console.log(name);
                alert('Email sent successfully!', result);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
    };
    return (
        <div >
            <h3>Contact Us</h3>
            <h3>Contact Us</h3>
            <form onSubmit={sendEmail} className='emailForm'>
                <label>Your Name:</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Your Email:</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Your Message:</label>
                <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="Send Email" />
            </form>
        </div>
    );
};
export default Contact;
