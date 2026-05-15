import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contact } from '../../data/portfolio';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Get In Touch</div>
          <h2>
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p>{contact.description}</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info side */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact__title-block">
              <h3>{contact.title}</h3>
              <p>Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.</p>
            </div>

            <div className="contact__details">
              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <a href={`tel:${contact.phone}`} className="contact__detail-value">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <div className="contact__detail-value">{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="contact__social-btn"
              >
                <FiGithub size={20} /> GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__social-btn contact__social-btn--linkedin"
              >
                <FiLinkedin size={20} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {submitted ? (
              <div className="contact__success glass-card">
                <div className="contact__success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you as soon as possible!</p>
                <button
                  className="btn btn--primary"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Sanjay Sharma"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary contact__submit">
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
