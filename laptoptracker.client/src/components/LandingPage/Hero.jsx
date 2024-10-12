import React, { Component } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

class Hero extends Component {
    render() {
        return (
            <section id="hero" className="hero section dark-background">
                <div className="hero-image-container">
                    <img
                        src="assets/img/hero.jfif"
                        alt="Hero Background"
                        className="hero-background"
                        data-aos="fade-in"
                    />
                </div>

                <Container className="container">
                    <Typography
                        variant="h2"
                        component="h2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hero-title"
                    >
                        Welcome to Laptop Tracker
                    </Typography>

                    <Typography
                        variant="body1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="hero-description"
                        sx={{ color: 'white' }} // Set text color to white for better contrast
                    >
                        Your ultimate solution for tracking and managing your laptops.
                        Stay connected, secure, and in control of your devices.
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        component={Link} // Enables navigation within the app
                        to="/login" // Route to the login page
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="get-started-button"
                        sx={{ marginTop: '20px' }} // Styling using MUI's sx prop
                    >
                        Get Started
                    </Button>
                </Container>
            </section>
        );
    }
}

export default Hero;
