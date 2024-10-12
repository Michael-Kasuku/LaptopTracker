import React, { Component } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Footer extends Component {
    renderSocialLinks() {
        const socialLinks = [
            { href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
            { href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
            { href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
            { href: 'https://www.linkedin.com/in/laptoptracker', icon: 'fab fa-linkedin' }
        ];

        return socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.icon} page`} // Accessibility
                style={{ margin: '0 10px' }} // Margin for spacing
            >
                <i className={link.icon}></i>
            </a>
        ));
    }

    renderUsefulLinks() {
        const links = [
            { href: '#hero', label: 'Home' },
            { href: '#about', label: 'About Us' },
            { href: '#services', label: 'Services' },
            { to: '/terms', label: 'Terms of Service' },
            { to: '/privacy', label: 'Privacy Policy' }
        ];

        return links.map((link, index) => (
            <li key={index}>
                {link.to ? (
                    <Link to={link.to} style={{ textDecoration: 'none' }}>
                        {link.label}
                    </Link>
                ) : (
                    <a href={link.href} style={{ textDecoration: 'none' }}>
                        {link.label}
                    </a>
                )}
            </li>
        ));
    }

    renderServiceLinks() {
        const services = [
            { href: '#tracking', label: 'Laptop Tracking' },
            { href: '#reporting', label: 'Incident Reporting' },
            { href: '#alerts', label: 'Security Alerts' },
            { href: '#support', label: 'Customer Support' }
        ];

        return services.map((service, index) => (
            <li key={index}>
                <a href={service.href} style={{ textDecoration: 'none' }}>
                    {service.label}
                </a>
            </li>
        ));
    }

    render() {
        return (
            <footer id="footer" className="footer position-relative light-background">
                <Container className="footer-top">
                    <div className="row gy-4">

                        {/* About Section with Social Links */}
                        <div className="col-lg-5 col-md-12 footer-about">
                            <Typography variant="h4" component="h4" gutterBottom>
                                Connect with Us
                            </Typography>
                            <Typography variant="body1">
                                Stay connected via social media:
                            </Typography>
                            <div className="social-links d-flex mt-4">
                                {this.renderSocialLinks()}
                            </div>
                        </div>

                        {/* Useful Links Section */}
                        <div className="col-lg-2 col-6 footer-links">
                            <Typography variant="h4" component="h4" gutterBottom>
                                Useful Links
                            </Typography>
                            <ul>
                                {this.renderUsefulLinks()}
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="col-lg-2 col-6 footer-links">
                            <Typography variant="h4" component="h4" gutterBottom>
                                Our Services
                            </Typography>
                            <ul>
                                {this.renderServiceLinks()}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <Typography variant="h4" component="h4" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1">Mega Plaza, Second Floor</Typography>
                            <Typography variant="body1">Oginga Odinga Street, Kisumu City</Typography>
                            <Typography variant="body1" className="mt-4">
                                <strong>Phone:</strong> 0712345678
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> support@laptoptracker.com
                            </Typography>
                            <Button variant="contained" color="primary" className="mt-4">
                                Get Support
                            </Button>
                        </div>
                    </div>
                </Container>

                {/* Footer Bottom Section */}
                <Container className="text-center mt-4">
                    <Typography variant="body2">
                        &copy; 2024 <strong className="sitename">Laptop Tracker</strong> - All Rights Reserved!
                    </Typography>
                </Container>
            </footer>
        );
    }
}

export default Footer;
