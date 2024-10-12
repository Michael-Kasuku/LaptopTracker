import React, { Component } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

class About extends Component {
    render() {
        return (
            <section
                id="about"
                className="about-section"
                style={{ padding: '80px 0', backgroundColor: '#f5f7fa' }}
            >
                <Container data-aos="fade-up" data-aos-delay="100" maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                        }}
                    >
                        About Us
                    </Typography>

                    <Typography
                        variant="body1"
                        align="justify"
                        sx={{
                            lineHeight: 1.75,
                            color: 'text.secondary',
                            fontSize: '1.125rem',
                            marginBottom: '2.5rem',
                        }}
                    >
                        <strong>Laptop Tracker</strong> is a premier platform dedicated to empowering users with advanced tools for tracking, managing, and securing their laptops. Our intuitive web and mobile applications allow users to seamlessly monitor device locations, receive instant alerts for unauthorized access, and ensure optimal laptop health. We are committed to enhancing the security and productivity of individuals and businesses alike.
                    </Typography>

                    <Grid container spacing={5} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: 5,
                                    backgroundColor: '#ffffff',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'primary.main',
                                        marginBottom: '1rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    Mission
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.6,
                                        color: 'text.secondary',
                                    }}
                                >
                                    Our mission is to provide a comprehensive tracking solution that enhances the security and management of laptops, enabling individuals and organizations to safeguard their data and minimize risks effectively.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: 5,
                                    backgroundColor: '#ffffff',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'primary.main',
                                        marginBottom: '1rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    Vision
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.6,
                                        color: 'text.secondary',
                                    }}
                                >
                                    Our vision is to become the leading platform for laptop tracking and security, providing users with complete control and unparalleled visibility over their devices through innovative technology.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        );
    }
}

export default About;
