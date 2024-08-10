import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Divya',
            message: message,
        };

        emailjs.send(serviceId, templateId,
            templateParams, userId)

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
        <div className='contact'>
            <form onSubmit={sendEmail} className='emailForm'>
            <h3 style={{color:"white"}}>Get in Touch</h3>
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
            <div className="social-icons" style={{justifyContent:"center"}}>
                <a href="https://github.com/recharladivyareddy" className="social-icon" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/divya-reddy-29576523b" className="social-icon" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://leetcode.com/123divyareddy" className="social-icon" aria-label="LeetCode">
                    <i className="fas fa-code"></i>
                </a>
            </div>
        </div>
    );
};
export default Contact;
