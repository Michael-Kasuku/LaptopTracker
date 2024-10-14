import React, { Component } from 'react';
import Navbar from './LandingPage/Navbar';
import Hero from './LandingPage/Hero';
import About from './LandingPage/About';
import Team from './LandingPage/Team';
import Services from './LandingPage/Services';
import FAQs from './LandingPage/FAQs';
import Contact from './LandingPage/Contact';
import Footer from './LandingPage/Footer';

class LandingPage extends Component {
    componentDidMount() {
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                });
            });
        });
    }

    render() {
        return (
            <div style={pageContainerStyle}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Hero />
                    <section id="about" style={sectionStyle}>
                        <About />
                    </section>
                    <section id="team" style={sectionStyle}>
                        <Team />
                    </section>
                    <section id="services" style={sectionStyle}>
                        <Services />
                    </section>
                    <section id="faq" style={sectionStyle}>
                        <FAQs />
                    </section>
                    <section id="contact" style={sectionStyle}>
                        <Contact />
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

// Styles
const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9fafb', // Soft background for modern feel
    fontFamily: `'Inter', sans-serif`, // Professional font for text clarity
};

// Section Styles with Professional Enhancements
const sectionStyle = {
    padding: '80px 40px',
    margin: '40px auto', // Spacing between sections
    maxWidth: '1200px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Enhanced shadow depth
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    lineHeight: '1.6', // Improved text readability
};

// Adding subtle hover and media query behavior
const sectionHoverEffect = {
    ':hover': {
        transform: 'scale(1.01)', // Slight zoom-in on hover
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
    },
};

// Combine base style and hover effect (for reusability)
Object.assign(sectionStyle, sectionHoverEffect);

// Responsive media queries for better layout on smaller screens
const mediaQueryStyle = `
    @media (max-width: 768px) {
        section {
            padding: 60px 20px;
        }
    }
`;

// Injecting media query directly into the document's style
const styleSheet = document.createElement('style');
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default LandingPage;
