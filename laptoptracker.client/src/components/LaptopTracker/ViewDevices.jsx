import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Typography,
    Snackbar,
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    InputAdornment,
    CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

class ViewDevices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
            searchQuery: '',
            openSnackbar: false,
            snackbarMessage: '',
            snackbarSeverity: 'success',
            openUpdateDialog: false,
            openDeleteDialog: false,
            selectedDevice: null,
            deviceToDelete: null,
            sortDirection: 'asc',
            sortColumn: 'deviceName',
            loading: false,
        };
    }

    componentDidMount() {
        this.fetchDevices();
    }

    fetchDevices = async () => {
        this.setState({ loading: true });
        try {
            const sampleDevices = [
                { id: 1, deviceName: 'Library Laptop', deviceType: 'Laptop', serialNumber: 'LL12345', macAddress: '00:14:22:01:23:45' },
                { id: 2, deviceName: 'Computer Lab Laptop', deviceType: 'Laptop', serialNumber: 'CL67890', macAddress: '00:14:22:01:23:46' },
                { id: 3, deviceName: 'Admin Office Laptop', deviceType: 'Laptop', serialNumber: 'AL11223', macAddress: '00:14:22:01:23:47' },
                { id: 4, deviceName: 'Library Desktop', deviceType: 'Desktop', serialNumber: 'LD44556', macAddress: '00:14:22:01:23:48' },
            ];
            this.setState({ devices: sampleDevices });
        } catch (error) {
            this.setState({ snackbarMessage: 'Error fetching devices.', snackbarSeverity: 'error', openSnackbar: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleDelete = () => {
        this.setState((prevState) => ({
            devices: prevState.devices.filter(device => device.id !== prevState.deviceToDelete),
            openSnackbar: true,
            snackbarMessage: 'Device deleted successfully!',
            snackbarSeverity: 'success',
            openDeleteDialog: false,
            deviceToDelete: null,
        }));
    };

    handleUpdate = () => {
        const { selectedDevice } = this.state;
        this.setState((prevState) => ({
            devices: prevState.devices.map(device =>
                device.id === selectedDevice.id ? selectedDevice : device
            ),
            openSnackbar: true,
            snackbarMessage: 'Device updated successfully!',
            snackbarSeverity: 'success',
            openUpdateDialog: false,
            selectedDevice: null,
        }));
    };

    handleOpenDeleteDialog = (deviceId) => {
        this.setState({ openDeleteDialog: true, deviceToDelete: deviceId });
    };

    handleOpenUpdateDialog = (device) => {
        this.setState({ openUpdateDialog: true, selectedDevice: device });
    };

    handleDialogClose = () => {
        this.setState({ openUpdateDialog: false, openDeleteDialog: false, selectedDevice: null });
    };

    handleSnackbarClose = () => {
        this.setState({ openSnackbar: false });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            selectedDevice: {
                ...prevState.selectedDevice,
                [name]: value,
            },
        }));
    };

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSort = (column) => {
        const { sortDirection } = this.state;
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        const sortedDevices = [...this.state.devices].sort((a, b) => {
            const comparison = a[column] > b[column] ? 1 : -1;
            return newDirection === 'asc' ? comparison : -comparison;
        });

        this.setState({ devices: sortedDevices, sortDirection: newDirection, sortColumn: column });
    };

    render() {
        const {
            devices,
            searchQuery,
            openSnackbar,
            snackbarMessage,
            snackbarSeverity,
            openUpdateDialog,
            openDeleteDialog,
            selectedDevice,
            loading,
        } = this.state;

        const filteredDevices = devices.filter(device =>
            device.deviceName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div style={{ padding: '16px' }}>

                {/* Search Bar */}
                <TextField
                    placeholder="Search by device name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Device Table */}
                <TableContainer style={{ marginTop: '16px', boxShadow: 'none' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => this.handleSort('deviceName')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                    Device Name
                                </TableCell>
                                <TableCell onClick={() => this.handleSort('deviceType')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                    Device Type
                                </TableCell>
                                <TableCell onClick={() => this.handleSort('serialNumber')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                    Serial Number
                                </TableCell>
                                <TableCell onClick={() => this.handleSort('macAddress')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                    MAC Address
                                </TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center"><CircularProgress /></TableCell>
                                </TableRow>
                            ) : (
                                filteredDevices.map(device => (
                                    <TableRow key={device.id}>
                                        <TableCell>{device.deviceName}</TableCell>
                                        <TableCell>{device.deviceType}</TableCell>
                                        <TableCell>{device.serialNumber}</TableCell>
                                        <TableCell>{device.macAddress}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => this.handleOpenUpdateDialog(device)} color="primary" style={{ marginRight: '8px' }}>
                                                Update
                                            </Button>
                                            <Button onClick={() => this.handleOpenDeleteDialog(device.id)} color="secondary">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

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

                {/* Update Device Dialog */}
                <Dialog open={openUpdateDialog} onClose={this.handleDialogClose}>
                    <DialogTitle>Update Device</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Device Name"
                            name="deviceName"
                            fullWidth
                            variant="outlined"
                            value={selectedDevice?.deviceName || ''}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            label="Device Type"
                            name="deviceType"
                            fullWidth
                            variant="outlined"
                            value={selectedDevice?.deviceType || ''}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            label="Serial Number"
                            name="serialNumber"
                            fullWidth
                            variant="outlined"
                            value={selectedDevice?.serialNumber || ''}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            label="MAC Address"
                            name="macAddress"
                            fullWidth
                            variant="outlined"
                            value={selectedDevice?.macAddress || ''}
                            onChange={this.handleInputChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose}>Cancel</Button>
                        <Button onClick={this.handleUpdate} color="primary">Update</Button>
                    </DialogActions>
                </Dialog>

                {/* Delete Device Dialog */}
                <Dialog open={openDeleteDialog} onClose={this.handleDialogClose}>
                    <DialogTitle>Delete Device</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this device?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose}>Cancel</Button>
                        <Button onClick={this.handleDelete} color="secondary">Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ViewDevices;
