import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
        };
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
    };

    closeMobileMenu = () => {
        this.setState({ isMobileMenuOpen: false });
    };

    render() {
        const { isMobileMenuOpen } = this.state;

        return (
            <header
                id="header"
                className="header d-flex align-items-center fixed-top shadow-sm"
                style={{ backgroundColor: 'white' }}  // White background set here
            >
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    {/* Logo Section */}
                    <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                        <img
                            src="assets/img/logo.jfif"
                            alt="Laptop Tracker"
                            className="img-fluid me-2"
                            style={{ height: '50px' }}
                        />
                        <h1 className="sitename h4 mb-0 text-primary fw-bold">
                            Laptop Tracker
                        </h1>
                    </Link>

                    {/* Navigation Menu */}
                    <nav id="navmenu" className="navmenu d-none d-xl-block">
                        <ul className="d-flex list-unstyled mb-0">
                            <li><Link to="/" className="nav-link px-3">Home</Link></li>
                            <li className="dropdown position-relative">
                                <Link
                                    to="#"
                                    className="nav-link px-3 dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    About Us
                                </Link>
                                <ul className="dropdown-menu shadow-sm">
                                    <li><Link to="#about" className="dropdown-item">About</Link></li>
                                    <li><Link to="#team" className="dropdown-item">Our Team</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#services" className="nav-link px-3">Services</Link></li>
                            <li className="dropdown position-relative">
                                <Link
                                    to="#"
                                    className="nav-link px-3 dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Support
                                </Link>
                                <ul className="dropdown-menu shadow-sm">
                                    <li><Link to="#faq" className="dropdown-item">FAQs</Link></li>
                                    <li><Link to="#contact" className="dropdown-item">Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    {/* Get Started Button */}
                    <Link to="/login" className="btn btn-primary btn-sm ms-3 fw-semibold">Get Started</Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-nav-toggle d-xl-none btn btn-light border-0"
                        onClick={this.toggleMobileMenu}
                        aria-label="Toggle Mobile Menu"
                    >
                        <i className="bi bi-list fs-3"></i>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <nav className="mobile-nav position-fixed top-0 start-0 w-100 h-100 bg-white d-xl-none animated">
                        <div className="container-fluid d-flex flex-column align-items-start p-4">
                            <button
                                className="mobile-nav-close btn btn-light border-0 align-self-end mb-3"
                                onClick={this.toggleMobileMenu}
                                aria-label="Close Mobile Menu"
                            >
                                <i className="bi bi-x-lg fs-3"></i>
                            </button>
                            <ul className="list-unstyled w-100">
                                <li><Link to="/" className="nav-link py-2" onClick={this.closeMobileMenu}>Home</Link></li>
                                <li><Link to="#about" className="nav-link py-2" onClick={this.closeMobileMenu}>About Us</Link></li>
                                <li><Link to="#services" className="nav-link py-2" onClick={this.closeMobileMenu}>Services</Link></li>
                                <li><Link to="#faq" className="nav-link py-2" onClick={this.closeMobileMenu}>FAQs</Link></li>
                                <li><Link to="#contact" className="nav-link py-2" onClick={this.closeMobileMenu}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                )}
            </header>
        );
    }
}

export default Navbar;
