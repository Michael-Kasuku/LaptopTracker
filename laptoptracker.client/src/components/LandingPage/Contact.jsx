import React, { Component } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        successMessage: '',
        errorMessage: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;

        if (!name || !email || !subject || !message) {
            this.setState({ errorMessage: 'All fields are required.' });
            return;
        }

        try {
            const response = await axios.post('/api/messages', {
                name,
                senderEmailAddress: email,
                subject,
                messageContent: message,
            });

            if (response.status === 201) {
                this.setState({
                    successMessage: 'Message sent successfully!',
                    errorMessage: '',
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (error) {
            this.setState({ errorMessage: 'Error sending message. Please try again.' });
        }
    };

    render() {
        const { name, email, subject, message, successMessage, errorMessage } = this.state;

        return (
            <section id="contact" className="contact section">
                <Container className="section-title" data-aos="fade-up">
                    <Typography variant="h2" className="text-primary">Get in Touch</Typography>
                    <Typography variant="body1" gutterBottom>
                        We're here to help with your laptop tracking needs. Reach out with any questions or support requests.
                    </Typography>
                </Container>

                <Container data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            {this.renderInfoItems()}
                        </div>

                        <div className="col-lg-6">
                            <form onSubmit={this.handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">
                                    {this.renderTextFields()}
                                    <div className="col-12 text-center">
                                        <Button type="submit" variant="contained" color="primary">
                                            Send Message
                                        </Button>
                                    </div>
                                </div>

                                {successMessage && (
                                    <Typography className="text-success" align="center" gutterBottom>
                                        {successMessage}
                                    </Typography>
                                )}
                                {errorMessage && (
                                    <Typography className="text-danger" align="center" gutterBottom>
                                        {errorMessage}
                                    </Typography>
                                )}
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }

    renderInfoItems() {
        const infoItems = [
            { icon: 'fa-map-marker-alt', title: 'Our Location', content: 'Mega Plaza, Second Floor\nOginga Odinga Street, Kisumu City' },
            { icon: 'fa-phone', title: 'Phone', content: '+254 712 345 678' },
            { icon: 'fa-envelope', title: 'Email', content: 'support@laptoptracker.com' },
            { icon: 'fa-clock', title: 'Working Hours', content: 'Monday - Friday: 9:00 AM - 6:00 PM' },
        ];

        return (
            <div className="row gy-4">
                {infoItems.map((item, index) => (
                    <div key={index} className="col-md-6">
                        <div className="info-item" data-aos="fade" data-aos-delay={(index + 1) * 100}>
                            <i className={`fa ${item.icon}`} />
                            <Typography variant="h4" className="mt-2">{item.title}</Typography>
                            <Typography variant="body2">{item.content}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    renderTextFields() {
        const fields = [
            { name: 'name', label: 'Your Name', type: 'text', value: this.state.name },
            { name: 'email', label: 'Your Email', type: 'email', value: this.state.email },
            { name: 'subject', label: 'Subject', type: 'text', value: this.state.subject },
            { name: 'message', label: 'Message', type: 'text', multiline: true, rows: 4, value: this.state.message },
        ];

        return fields.map((field, index) => (
            <div key={index} className={`col-${field.multiline ? '12' : 'md-6'}`}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required
                    {...field}
                    onChange={this.handleChange}
                />
            </div>
        ));
    }
}

export default Contact;
