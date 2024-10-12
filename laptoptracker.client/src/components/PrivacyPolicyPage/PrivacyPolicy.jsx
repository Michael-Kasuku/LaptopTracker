import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

class PrivacyPolicy extends React.Component {
    render() {
        return (
            <Box component="section" id="privacy" sx={{ py: 5, backgroundColor: '#f8f9fa' }}>
                <Container data-aos="fade-up" data-aos-delay="100">
                    <Box sx={{ mb: 5 }}>
                        <Typography variant="h2" color="primary" gutterBottom>
                            Privacy Policy
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, textAlign: 'justify', mb: 4 }}>
                            At Laptop Tracker, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, protect, and share your information in compliance with applicable data protection laws, including the Data Protection Act, 2019 (Kenya). By using our services, you acknowledge that you have read and understood this Privacy Policy.
                        </Typography>

                        {/* Section 1 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            1. Information We Collect
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            To deliver our services effectively, we may collect the following types of personal information:
                        </Typography>
                        <ul>
                            <li><strong>Personal Identification Information</strong>: Full name, email address, phone number, and other contact details during registration.</li>
                            <li><strong>Device Information</strong>: Details about the laptop being tracked, including device ID, operating system, and browser type.</li>
                            <li><strong>Usage Data</strong>: Information on how you use our application, including timestamps, access durations, and features accessed.</li>
                            <li><strong>Location Data</strong>: Geographical data to assist in locating the laptop when necessary.</li>
                            <li><strong>Communication Data</strong>: Records of communications between you and our support team for quality assurance and training purposes.</li>
                        </ul>

                        {/* Section 2 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            2. Purpose of Collecting Your Information
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            We use your personal information for the following purposes:
                        </Typography>
                        <ul>
                            <li>To track and locate your laptop in case of theft or loss.</li>
                            <li>To provide customer support and respond to your inquiries.</li>
                            <li>To enhance the functionality and user experience of our platform.</li>
                            <li>To ensure compliance with applicable laws and regulations.</li>
                            <li>To detect and prevent fraud and unauthorized activities on our platform.</li>
                        </ul>

                        {/* Section 3 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            3. Sharing Your Information
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            We do not sell or rent your personal information to third parties. Your information may be shared in the following situations:
                        </Typography>
                        <ul>
                            <li>With trusted service providers who assist us in operating our platform and conducting our business, subject to confidentiality agreements.</li>
                            <li>In response to legal obligations or to protect our rights and the safety of our users and the public.</li>
                            <li>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that business transaction.</li>
                        </ul>

                        {/* Section 4 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            4. Data Security
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, loss, or misuse. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                        </Typography>

                        {/* Section 5 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            5. Cookies and Tracking Technologies
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            Our platform utilizes cookies and similar technologies to enhance user experience and analyze usage patterns. Cookies are small files placed on your device. You can adjust your browser settings to refuse cookies, but this may affect your experience on our platform.
                        </Typography>

                        {/* Section 6 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            6. Retention of Your Information
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Once your information is no longer required, we will securely delete or anonymize it.
                        </Typography>

                        {/* Section 7 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            7. Your Rights
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            Under applicable data protection laws, you have the following rights regarding your personal data:
                        </Typography>
                        <ul>
                            <li>The right to access your personal data.</li>
                            <li>The right to rectify inaccurate or incomplete information.</li>
                            <li>The right to request deletion of your data under certain conditions.</li>
                            <li>The right to restrict processing of your data in specific situations.</li>
                            <li>The right to data portability, allowing you to obtain your data in a structured format.</li>
                        </ul>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            To exercise these rights or if you have any questions about how we handle your information, please contact us at <Link href="mailto:laptoptracker@gmail.com">laptoptracker@gmail.com</Link>.
                        </Typography>

                        {/* Section 8 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            8. Third-Party Links
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            Our application may contain links to third-party websites. We are not responsible for their content or privacy practices. We encourage you to review the privacy policies of any external sites you visit.
                        </Typography>

                        {/* Section 9 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            9. Changes to This Privacy Policy
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            We may periodically update this Privacy Policy. Any changes will be reflected on this page, and we will notify you of significant changes via email or through our platform. Your continued use of our services after any changes signifies your acceptance of the updated policy.
                        </Typography>

                        {/* Section 10 */}
                        <Typography variant="h4" color="primary" gutterBottom>
                            10. Contact Us
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                            If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact us at <Link href="mailto:laptoptracker@gmail.com">laptoptracker@gmail.com</Link>.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default PrivacyPolicy;
