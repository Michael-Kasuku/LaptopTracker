import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button, Snackbar, Alert } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class LaptopTrackingDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            laptops: [],
            notification: '',
            open: false,
        };
    }

    componentDidMount() {
        // Mock data for laptops - this will be replaced with real-time data from the backend later
        const mockData = [
            { id: 1, name: 'Laptop 1', position: [51.505, -0.09], status: 'Active', signal: 'Strong' },
            { id: 2, name: 'Laptop 2', position: [51.515, -0.1], status: 'Inactive', signal: 'Weak' },
            { id: 3, name: 'Laptop 3', position: [51.525, -0.11], status: 'Active', signal: 'Strong' },
        ];
        this.setState({ laptops: mockData });
    }

    handleTrackClick = (laptop) => {
        this.setState({
            notification: `Tracking ${laptop.name}`,
            open: true,
        });
        // Future tracking logic will go here
    };

    handleCloseSnackbar = () => {
        this.setState({ open: false });
    };

    render() {
        const { laptops, notification, open } = this.state;

        return (
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop: 2 }}>
                    Dashboard
                </Typography>
                <Grid container spacing={3}>
                    {/* Map Section */}
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ height: '400px' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Laptop Locations
                                </Typography>
                                <MapContainer center={[51.515, -0.1]} zoom={13} style={{ height: '100%', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    {laptops.map(laptop => (
                                        <Marker key={laptop.id} position={laptop.position}>
                                            <Popup>
                                                <strong>{laptop.name}</strong><br />
                                                Status: {laptop.status}<br />
                                                Signal: {laptop.signal}<br />
                                                <Button variant="outlined" onClick={() => this.handleTrackClick(laptop)}>
                                                    Track
                                                </Button>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Snackbar for Notifications */}
                <Snackbar open={open} autoHideDuration={3000} onClose={this.handleCloseSnackbar}>
                    <Alert onClose={this.handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
                        {notification}
                    </Alert>
                </Snackbar>
            </Container>
        );
    }
}

export default LaptopTrackingDashboard;
