import React, { Component } from 'react';
import { Container, Grid, Typography, Paper, Avatar, IconButton, Tooltip, Box } from '@mui/material';
import { Twitter, Facebook, Instagram, LinkedIn } from '@mui/icons-material';

class Team extends Component {
    render() {
        const teamMembers = [
            {
                name: 'Dr. Collins Odoyo',
                position: 'Senior Research Scientist',
                qualification: 'PhD. Business Information Systems',
                description: 'Specialist in ICT4D, Business IT, and Data Analytics. Passionate about driving mobile commerce growth in rural areas.',
                image: 'assets/img/team/odoyo.jpg',
                socialLinks: [
                    { platform: 'Twitter', url: 'https://twitter.com' },
                    { platform: 'Facebook', url: 'https://facebook.com' },
                    { platform: 'Instagram', url: 'https://instagram.com' },
                    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-odoyo-collins/' },
                ],
            },
            {
                name: 'Dr. Satwinder Singh Rupra',
                position: 'IT Security and Audit Expert',
                qualification: 'PhD. IT Security',
                description: 'Committed to innovative solutions for IT security and audits, empowering industries to stay secure.',
                image: 'assets/img/team/rupra.jpg',
                socialLinks: [
                    { platform: 'Twitter', url: 'https://twitter.com' },
                    { platform: 'Facebook', url: 'https://facebook.com' },
                    { platform: 'Instagram', url: 'https://instagram.com' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com' },
                ],
            },
            {
                name: 'Michael Otieno Kasuku',
                position: 'Project Manager',
                qualification: 'BSc. Computer Science',
                description: 'Experienced IT Support Specialist with expertise in managing projects efficiently within timelines and budgets.',
                image: 'assets/img/team/kasuku.jpg',
                socialLinks: [
                    { platform: 'Twitter', url: 'https://twitter.com' },
                    { platform: 'Facebook', url: 'https://facebook.com' },
                    { platform: 'Instagram', url: 'https://instagram.com' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com' },
                ],
            },
        ];

        return (
            <section id="team" className="team-section" style={{ backgroundColor: '#f5f7fa', padding: '80px 0' }}>
                {/* Section Title */}
                <Container className="text-center mb-5" data-aos="fade-up">
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
                        Meet Our Team
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
                        A dedicated group of professionals committed to excellence and innovation across diverse fields.
                    </Typography>
                </Container>

                {/* Team Members Grid */}
                <Container>
                    <Grid container spacing={6} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={member.name} data-aos="fade-up" data-aos-delay={index * 100}>
                                <Paper
                                    elevation={5}
                                    sx={{
                                        padding: 4,
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <Avatar
                                            alt={member.name}
                                            src={member.image}
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                margin: '0 auto',
                                                marginBottom: 2,
                                                border: '4px solid #007bff',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                marginTop: 1,
                                            }}
                                        >
                                            {member.socialLinks.map((link) => (
                                                <Tooltip key={link.platform} title={link.platform}>
                                                    <IconButton
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            color: '#333',
                                                            margin: '0 5px',
                                                            transition: 'color 0.3s, transform 0.3s',
                                                            '&:hover': {
                                                                color: '#007bff',
                                                                transform: 'scale(1.1)',
                                                            },
                                                        }}
                                                    >
                                                        {link.platform === 'Twitter' && <Twitter />}
                                                        {link.platform === 'Facebook' && <Facebook />}
                                                        {link.platform === 'Instagram' && <Instagram />}
                                                        {link.platform === 'LinkedIn' && <LinkedIn />}
                                                    </IconButton>
                                                </Tooltip>
                                            ))}
                                        </Box>
                                    </Box>

                                    <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 2 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                                        {member.position}
                                    </Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                                        {member.qualification}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                                        {member.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        );
    }
}

export default Team;
