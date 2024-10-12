import React, { useState } from 'react';
import {
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Tooltip,
    Paper,
    Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section id="faq" className="faq-section" style={{ padding: '80px 0', backgroundColor: '#f5f7fa' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* FAQ Introduction */}
                    <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="100">
                        <Paper
                            elevation={4}
                            sx={{
                                padding: 4,
                                borderRadius: 3,
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ color: 'primary.main', fontWeight: 700, marginBottom: 2 }}
                            >
                                Frequently Asked Questions
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                                Find answers to some of the most common questions about our laptop tracking services.
                                We're here to ensure you have the best experience with our platform.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* FAQ Accordion */}
                    <Grid item xs={12} md={8} data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-container">
                            {faqData.map(({ panel, title, description, tooltip }) => (
                                <Accordion
                                    key={panel}
                                    expanded={expanded === panel}
                                    onChange={handleChange(panel)}
                                    sx={{ marginBottom: 2, borderRadius: 2 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`${panel}-content`}
                                        id={`${panel}-header`}
                                    >
                                        <Tooltip title={tooltip} arrow>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {title}
                                            </Typography>
                                        </Tooltip>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                                            {description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

const faqData = [
    {
        panel: 'panel1',
        title: 'How does the laptop tracker work?',
        description:
            'Our laptop tracker utilizes GPS and internet connectivity to provide real-time location updates and security alerts. You can monitor your device’s location through our user-friendly dashboard.',
        tooltip: 'Learn how our tracking works',
    },
    {
        panel: 'panel2',
        title: 'What should I do if my laptop is stolen?',
        description:
            'If your laptop is stolen, immediately log into your tracking account and activate the remote locking feature. You can also report the theft to local authorities using the last known location provided by our tracker.',
        tooltip: 'Steps to take if your laptop is stolen',
    },
    {
        panel: 'panel3',
        title: 'Can I access the tracker from my mobile device?',
        description:
            'Yes! Our laptop tracking service includes a mobile app that allows you to access tracking features, receive alerts, and monitor your device’s status from your smartphone or tablet.',
        tooltip: 'Access tracking on the go',
    },
    {
        panel: 'panel4',
        title: 'How is my data secured?',
        description:
            'We prioritize your privacy and security. All data transmitted is encrypted, and access is restricted to authorized users only. For additional security, you can set up two-factor authentication for your account.',
        tooltip: 'Your data security matters',
    },
];

export default FAQs;
