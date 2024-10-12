import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    CircularProgress,
    InputAdornment,
    IconButton,
    Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import $ from 'jquery';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            isLoading: false,
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            submissionError: ''
        };
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    };

    validateForm = () => {
        const { email, password } = this.state;
        let emailError = '';
        let passwordError = '';

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            emailError = 'Please enter a valid email address.';
        }

        if (!password || password.length < 6) {
            passwordError = 'Password must be at least 6 characters long.';
        }

        this.setState({
            formErrors: { email: emailError, password: passwordError },
            submissionError: ''
        });

        return !emailError && !passwordError;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.validateForm()) return;

        this.setState({ isLoading: true });

        setTimeout(() => {
            this.setState({ isLoading: false });
            if (this.state.email !== 'admin@tracker.com' || this.state.password !== 'password123') {
                this.setState({ submissionError: 'Invalid email or password. Please try again.' });
                $('.error-message').fadeIn();
            } else {
                alert('Login successful!');
            }
        }, 2000);
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            if (value) $('.error-message').fadeOut();
        });
    };

    render() {
        const { showPassword, isLoading, formErrors, email, password, submissionError } = this.state;

        return (
            <Container
                component="section"
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: '#f5f5f5',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        bgcolor: '#fff',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        textAlign: 'center',
                        position: 'relative',
                        opacity: isLoading ? 0.5 : 1,
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#1976d2' }}>
                        Laptop Tracker Login
                    </Typography>

                    {submissionError && (
                        <Alert severity="error" sx={{ mb: 2 }} className="error-message">
                            {submissionError}
                        </Alert>
                    )}

                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            label="Email Address"
                            name="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={email}
                            onChange={this.handleInputChange}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={password}
                            onChange={this.handleInputChange}
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={this.togglePasswordVisibility}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 2 }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={showPassword}
                                    onChange={this.togglePasswordVisibility}
                                    color="primary"
                                />
                            }
                            label="Show Password"
                            sx={{ mb: 2 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Login'}
                        </Button>
                    </form>

                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body2">
                            Don't have an account? <Link to="/signup">Register</Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <Link to="/forgot">Forgot your password?</Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default Login;
