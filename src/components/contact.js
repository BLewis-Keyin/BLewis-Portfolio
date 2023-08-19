import React from 'react';
import '../App.css'; 

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>
                    Want to collaborate on a project or just say hello? Feel free to get in
                    touch with me through the following channels.
                </p>
                <ul className="contact-list">
                    <li>Email: BrandonLewis94@protonmail.com</li>
                    <li>GitHub: github.com/BLewis-Keyin</li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;