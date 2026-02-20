    import React, { useState } from 'react';
    import './Contact.css'; // we'll create this next

    const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Later: send to backend / email service (EmailJS, Formspree, etc.)
        console.log('Form submitted:', formData);
        alert('Message sent! (demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
        <div className="contact-wrapper">
            {/* Envelope + geometric shapes decoration */}
            <div className="envelope-section">
            <div className="envelope-icon">✉</div>
            <div className="shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </div>
            </div>

            <h2>Get in touch</h2>

            <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
                />
                <label>Name</label>
            </div>

            <div className="form-group">
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
                />
                <label>Email</label>
            </div>

            <div className="form-group">
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a Message..."
                rows={5}
                required
                />
                <label></label>
            </div>

            <button type="submit" className="send-btn">
                Send
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default Contact;






























    // function Contact() {
        // return (
        //     <div style={{ padding: "40px" }}>
        //     <h2>Contact Us</h2>
        //     <form>
        //         <input type="text" placeholder="Your Name" /><br /><br />
        //         <input type="email" placeholder="Your Email" /><br /><br />
        //         <textarea placeholder="Message"></textarea><br /><br />
        //         <button type="submit">Send</button>
        //     </form>
        //     </div>
        // );
        // }

        // export default Contact;
