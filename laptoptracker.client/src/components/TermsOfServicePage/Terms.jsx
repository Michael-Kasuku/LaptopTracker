import React from 'react';
import { Container, Typography, Link } from '@mui/material';

class Terms extends React.Component {
    render() {
        return (
            <section
                id="terms"
                style={{
                    backgroundImage: "url('assets/img/terms-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '40px 0',
                    backgroundColor: '#f8f9fa'
                }}
            >
                <Container>
                    <div className="content">
                        <Typography variant="h3" color="primary" gutterBottom>
                            Terms of Service
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: '1.8', textAlign: 'justify' }}>
                            Welcome to <strong>Laptop Tracker</strong>! By accessing or using our platform, including our mobile app and web platform, you agree to comply with the following terms and conditions. Please review them carefully.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            1. Acceptance of Terms
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            By using Laptop Tracker, you agree to these Terms of Service. If you do not agree with any of these terms, you must refrain from using our platform and its services.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            2. Eligibility to Use the Platform
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Users must be at least 18 years old to use Laptop Tracker. If you are under 18, you may only use the platform with the involvement of a parent or guardian. You are responsible for ensuring that the information you provide is accurate and complete.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            3. User Responsibilities
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            You are responsible for safeguarding the confidentiality of your account credentials and for all activities that occur under your account. Ensure that your use of the platform complies with all applicable laws and these Terms of Service.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            4. Tracking and Monitoring Devices
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Laptop Tracker provides a platform for tracking and monitoring laptops. Users must ensure that they have the necessary permissions to track the devices they register on the platform. Laptop Tracker does not guarantee continuous availability or accuracy of tracking services.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            5. Payment and Fees
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Some services provided through Laptop Tracker may require payment. Payments processed through the platform are subject to our payment terms. Any disputes related to payments should be resolved through the provided support channels.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            6. Limitation of Liability
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Laptop Tracker acts solely as a facilitator for tracking services. We do not take responsibility for any damages, losses, or issues arising from the use of the tracking services. Laptop Tracker disclaims all liability for any direct or indirect damages resulting from your use of the platform.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            7. Termination of Service
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            We reserve the right to suspend or terminate your access to Laptop Tracker at our discretion, without prior notice, if you violate these Terms of Service or engage in unlawful behavior. Termination may also occur if your activities pose risks to the platform or its users.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            8. Privacy Policy
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using Laptop Tracker, you agree to the practices described in our Privacy Policy.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            9. Changes to Terms
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            Laptop Tracker reserves the right to amend or update these Terms of Service at any time. We will notify users of any changes by updating the terms on our website. Continued use of the platform after changes have been posted signifies your acceptance of the modified terms.
                        </Typography>

                        <Typography variant="h5" color="primary" gutterBottom>
                            10. Contact Information
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                            If you have any questions or concerns regarding these Terms of Service, please contact us at{' '}
                            <Link href="mailto:support@laptoptracker.com" aria-label="Contact support">support@laptoptracker.com</Link>.
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify', fontStyle: 'italic' }}>
                            Thank you for choosing Laptop Tracker. We are committed to providing you with the best tracking services possible.
                        </Typography>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Terms;
