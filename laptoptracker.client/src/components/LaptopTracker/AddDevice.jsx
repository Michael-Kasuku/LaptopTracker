import React, { Component } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Snackbar,
    Alert,
    MenuItem,
} from '@mui/material';

class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceName: '',
            deviceType: '',
            serialNumber: '',
            macAddress: '',
            errors: {
                deviceName: '',
                deviceType: '',
                serialNumber: '',
                macAddress: '',
            },
            openSnackbar: false,
            snackbarMessage: '',
            snackbarSeverity: 'success',
        };
    }

    // Handle input changes and update state
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

        // Clear error when user types
        this.setState((prevState) => ({
            errors: { ...prevState.errors, [name]: '' },
        }));
    };

    // Validate form fields
    validateFields = () => {
        const { deviceName, deviceType, serialNumber, macAddress } = this.state;
        const errors = {};
        let isValid = true;

        // Validate device name
        if (!deviceName.trim()) {
            errors.deviceName = 'Device name is required.';
            isValid = false;
        }

        // Validate device type
        if (!deviceType.trim()) {
            errors.deviceType = 'Device type is required.';
            isValid = false;
        }

        // Validate serial number
        if (!serialNumber.trim()) {
            errors.serialNumber = 'Serial number is required.';
            isValid = false;
        }

        // Validate MAC Address
        const macAddressPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        if (!macAddress.trim()) {
            errors.macAddress = 'MAC address is required.';
            isValid = false;
        } else if (!macAddressPattern.test(macAddress)) {
            errors.macAddress = 'Invalid MAC address format.';
            isValid = false;
        }

        this.setState({ errors });
        return isValid;
    };

    // Handle form submission
    handleSubmit = (event) => {
        event.preventDefault();

        // Validate fields before submission
        if (this.validateFields()) {
            const { deviceName, deviceType, serialNumber, macAddress } = this.state;

            // Show success message
            this.setState({
                openSnackbar: true,
                snackbarMessage: 'Device added successfully!',
                snackbarSeverity: 'success',
            });

            // Reset form fields
            this.resetForm();
        } else {
            // Show error message if validation fails
            this.setState({
                openSnackbar: true,
                snackbarMessage: 'Please correct the highlighted errors.',
                snackbarSeverity: 'error',
            });
        }
    };

    // Reset form fields
    resetForm = () => {
        this.setState({
            deviceName: '',
            deviceType: '',
            serialNumber: '',
            macAddress: '',
            errors: {
                deviceName: '',
                deviceType: '',
                serialNumber: '',
                macAddress: '',
            },
        });
    };

    // Close snackbar
    handleSnackbarClose = () => {
        this.setState({ openSnackbar: false });
    };

    render() {
        const {
            deviceName,
            deviceType,
            serialNumber,
            macAddress,
            errors,
            openSnackbar,
            snackbarMessage,
            snackbarSeverity,
        } = this.state;

        return (
            <Box
                component="form"
                onSubmit={this.handleSubmit}
                sx={{ padding: 2, maxWidth: 400, margin: 'auto' }}
            >
                <Typography variant="h4" gutterBottom>
                    Add Device
                </Typography>
                <TextField
                    label="Device Name"
                    name="deviceName"
                    value={deviceName}
                    onChange={this.handleChange}
                    fullWidth
                    required
                    error={!!errors.deviceName}
                    helperText={errors.deviceName}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Device Type"
                    name="deviceType"
                    value={deviceType}
                    onChange={this.handleChange}
                    fullWidth
                    required
                    select // Use select for dropdown
                    error={!!errors.deviceType}
                    helperText={errors.deviceType}
                    sx={{ marginBottom: 2 }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Laptop">Laptop</MenuItem>
                    <MenuItem value="Desktop">Desktop</MenuItem>
                    <MenuItem value="Tablet">Tablet</MenuItem>
                    <MenuItem value="Mobile">Mobile</MenuItem>
                    {/* Add more device types as needed */}
                </TextField>
                <TextField
                    label="Serial Number"
                    name="serialNumber"
                    value={serialNumber}
                    onChange={this.handleChange}
                    fullWidth
                    required
                    error={!!errors.serialNumber}
                    helperText={errors.serialNumber}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="MAC Address"
                    name="macAddress"
                    value={macAddress}
                    onChange={this.handleChange}
                    fullWidth
                    required
                    error={!!errors.macAddress}
                    helperText={errors.macAddress}
                    inputProps={{ pattern: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$" }} // Basic MAC Address format validation
                    sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 1 }}>
                    Add Device
                </Button>

                {/* Snackbar for success/error messages */}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={this.handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Box>
        );
    }
}

export default AddDevice;
