import React, { Component } from 'react';
import {
    TextField,
    Button,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    Card,
    CircularProgress,
    Typography,
    Tooltip,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff, InfoOutlined } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addYears, subYears } from 'date-fns';

class SignUp extends Component {
    state = {
        activeStep: 0,
        showPassword: false,
        showConfirmPassword: false,
        formData: {
            firstName: '',
            lastName: '',            
            phoneNumber: '',
            gender: '',
            dateOfBirth: null,
            email: '',
            password: '',
            confirmPassword: '',
        },
        formErrors: {},
        isLoading: false,
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: { ...prevState.formData, [name]: value },
        }));
    };

    handleDateChange = (date) => {
        this.setState((prevState) => ({
            formData: { ...prevState.formData, dateOfBirth: date },
        }));
    };

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    };

    toggleConfirmPasswordVisibility = () => {
        this.setState((prevState) => ({ showConfirmPassword: !prevState.showConfirmPassword }));
    };

    handleNext = () => {
        const errors = this.validateFields();
        if (Object.keys(errors).length === 0) {
            this.setState((prevState) => ({
                activeStep: prevState.activeStep + 1,
                formErrors: {},
            }));
        } else {
            this.setState({ formErrors: errors });
        }
    };

    handleBack = () => {
        this.setState((prevState) => ({ activeStep: prevState.activeStep - 1 }));
    };

    validateFields = () => {
        const { formData, activeStep } = this.state;
        const errors = {};

        if (activeStep === 0) {
            if (!formData.firstName) errors.firstName = 'First Name is required.';
            if (!formData.lastName) errors.lastName = 'Last Name is required.';            
        } else if (activeStep === 1) {
            const phoneRegex = /^(07\d{8}|01\d{8}|\+2547\d{8}|\+2541\d{8})$/;
            if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
                errors.phoneNumber = 'Enter a valid phone number.';
            }
            if (!formData.gender) errors.gender = 'Gender is required.';
            if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of Birth is required.';
        } else if (activeStep === 2) {
            if (!formData.email) errors.email = 'Email is required.';
            if (!formData.password || formData.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long.';
            }
            if (formData.password !== formData.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match.';
            }
        }
        return errors;
    };

    render() {
        const { activeStep, isLoading } = this.state;
        const steps = ['Personal Information', 'Contact Information', 'Account Setup', 'Review'];

        return (
            <section style={styles.container}>
                <Card style={styles.card}>
                    {isLoading && (
                        <div style={styles.loadingOverlay}>
                            <CircularProgress />
                        </div>
                    )}
                    <Typography variant="h4" style={styles.title}>
                        Create a New Account
                    </Typography>
                    <Stepper activeStep={activeStep} alternativeLabel style={styles.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <form>
                        {activeStep === 0 && this.renderPersonalInfo()}
                        {activeStep === 1 && this.renderContactInfo()}
                        {activeStep === 2 && this.renderAccountSetup()}
                        {activeStep === 3 && this.renderReview()}

                        <div style={styles.buttonContainer}>
                            {activeStep > 0 && (
                                <Button onClick={this.handleBack} variant="outlined" style={styles.backButton}>
                                    Back
                                </Button>
                            )}
                            <Button
                                onClick={this.handleNext}
                                variant="contained"
                                style={styles.nextButton}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>
        );
    }

    renderPersonalInfo() {
        const { formData, formErrors } = this.state;
        return (
            <>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.firstName}
                    helperText={formErrors.firstName}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.lastName}
                    helperText={formErrors.lastName}
                />                
            </>
        );
    }

    renderContactInfo() {
        const { formData, formErrors } = this.state;
        return (
            <>
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.phoneNumber}
                    helperText={formErrors.phoneNumber}
                />
                <TextField
                    select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.gender}
                    helperText={formErrors.gender}
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={this.handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    maxDate={subYears(new Date(), 18)}
                    placeholderText="Select Date of Birth"
                />
            </>
        );
    }

    renderAccountSetup() {
        const { formData, formErrors, showPassword, showConfirmPassword } = this.state;
        return (
            <>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={this.handleInputChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={this.togglePasswordVisibility}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </>
        );
    }

    renderReview() {
        const { formData } = this.state;
        return (
            <div>
                <Typography variant="h6">Review Your Information</Typography>
                <p><strong>First Name:</strong> {formData.firstName}</p>
                <p><strong>Last Name:</strong> {formData.lastName}</p>                
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            </div>
        );
    }
}

const styles = {
    container: { padding: '20px', display: 'flex', justifyContent: 'center' },
    card: { maxWidth: 500, padding: '30px', position: 'relative' },
    title: { textAlign: 'center', marginBottom: '20px' },
    stepper: { marginBottom: '20px' },
    buttonContainer: { display: 'flex', justifyContent: 'space-between', marginTop: '20px' },
    nextButton: { backgroundColor: '#1976d2', color: '#fff' },
    backButton: { color: '#1976d2' },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
};

export default SignUp;
