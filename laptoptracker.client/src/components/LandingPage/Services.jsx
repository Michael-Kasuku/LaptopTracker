import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component {
    renderServiceItem(title, description, icon, delay) {
        return (
            <Grid
                item xs={12} sm={6} md={4}
                data-aos="fade-up" data-aos-delay={delay}
            >
                <Card
                    className="service-item shadow-lg"
                    sx={{
                        borderRadius: 2,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'scale(1.05)' }
                    }}
                >
                    <CardContent>
                        <div style={{ textAlign: 'center', marginBottom: 15 }}>
                            <FontAwesomeIcon
                                icon={icon}
                                style={{ fontSize: 40, color: '#007bff' }}
                            />
                        </div>
                        <Typography variant="h5" className="fw-bold text-dark mb-2">
                            {title}
                        </Typography>
                        <Typography className="text-muted">{description}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    render() {
        return (
            <section
                id="services"
                className="services section"
                style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}
            >
                {/* Section Header */}
                <Container
                    className="section-title"
                    data-aos="fade-up"
                    sx={{ textAlign: 'center', marginBottom: 5 }}
                >
                    <Typography variant="h2" className="text-primary mb-3">
                        Our Services
                    </Typography>
                    <Typography
                        variant="h6"
                        className="text-muted"
                    >
                        Comprehensive solutions to track and secure your devices, powered by advanced technology.
                    </Typography>
                </Container>

                {/* Service Items */}
                <Container>
                    <Grid container spacing={4} justifyContent="center">
                        {this.renderServiceItem(
                            'Real-time Location Tracking',
                            'Monitor your laptop\'s precise location in real-time to ensure safety and security.',
                            faLocationDot,
                            100
                        )}
                        {this.renderServiceItem(
                            'Remote Locking',
                            'Lock your laptop remotely to prevent unauthorized access or data breaches.',
                            faShieldAlt,
                            200
                        )}
                        {this.renderServiceItem(
                            'Activity History',
                            'Review detailed logs of your laptop\'s activities to identify suspicious behavior.',
                            faHistory,
                            300
                        )}
                    </Grid>
                </Container>
            </section>
        );
    }
}

export default Services;
