import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Toast,
    ToastContainer,
    Form,
} from 'react-bootstrap';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { debounce } from 'lodash';

// Custom Icons for Laptops
const laptopIconSize = [40, 40]; // Increased icon size for better visibility

// Define custom icons for different laptop types
const libraryIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    iconSize: laptopIconSize,
});

const labIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922515.png',
    iconSize: laptopIconSize,
});

const adminIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922518.png',
    iconSize: laptopIconSize,
});

class LaptopTrackingDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            laptops: [],
            filteredLaptops: [],
            notification: '',
            showToast: false,
            trackedLaptop: null,
            searchTerm: '',
        };
    }

    componentDidMount() {
        const initialData = [
            {
                id: 1,
                name: 'Library Laptop',
                position: [0.2827, 34.7519],
                status: 'Active',
                signal: 'Strong',
                icon: libraryIcon,
            },
            {
                id: 2,
                name: 'Computer Lab Laptop',
                position: [0.2834, 34.7534],
                status: 'Inactive',
                signal: 'Weak',
                icon: labIcon,
            },
            {
                id: 3,
                name: 'Admin Office Laptop',
                position: [0.2842, 34.7541],
                status: 'Active',
                signal: 'Strong',
                icon: adminIcon,
            },
        ];
        this.setState({ laptops: initialData, filteredLaptops: initialData });

        this.interval = setInterval(this.updateLaptopPositions, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Update laptop positions randomly within a small range
    updateLaptopPositions = () => {
        this.setState(prevState => {
            const updatedLaptops = prevState.laptops.map(laptop => ({
                ...laptop,
                position: [
                    laptop.position[0] + (Math.random() - 0.5) * 0.0005,
                    laptop.position[1] + (Math.random() - 0.5) * 0.0005,
                ],
            }));

            return {
                laptops: updatedLaptops,
                filteredLaptops: updatedLaptops,
            };
        });
    };

    handleTrackClick = (laptop) => {
        this.setState({
            notification: `Tracking ${laptop.name}`,
            showToast: true,
            trackedLaptop: laptop,
        });
    };

    handleCloseToast = () => this.setState({ showToast: false });

    // Handle search input change with debounce
    handleSearchChange = debounce((e) => {
        const value = e.target.value.toLowerCase();
        this.setState({ searchTerm: value });
        const filtered = this.state.laptops.filter(laptop =>
            laptop.name.toLowerCase().includes(value)
        );
        this.setState({ filteredLaptops: filtered });
    }, 300);

    render() {
        const {
            filteredLaptops,
            notification,
            showToast,
            trackedLaptop,
            searchTerm,
        } = this.state;

        return (
            <Container
                fluid
                className="p-4"
                style={{ backgroundColor: '#e9ecef', fontFamily: 'Arial, sans-serif' }}
            >
                {/* Search Box */}
                <Row className="mb-4">
                    <Col xs={12}>
                        <Form>
                            <Form.Group controlId="search">
                                <Form.Control
                                    type="text"
                                    placeholder="Search for a laptop..."
                                    value={searchTerm}
                                    onChange={this.handleSearchChange}
                                    style={{
                                        borderRadius: '8px',
                                        padding: '12px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12} md={8}>
                        <Card className="shadow" style={{ borderRadius: '12px', border: 'none' }}>
                            <Card.Header
                                as="h5"
                                className="bg-success text-white text-center"
                                style={{
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px',
                                    fontSize: '1.25rem',
                                }}
                            >
                                Laptop Locations
                            </Card.Header>
                            <Card.Body style={{ height: '400px', position: 'relative', padding: '0' }}>
                                <MapContainer
                                    center={[0.2834, 34.7534]}
                                    zoom={18}
                                    minZoom={15}
                                    maxZoom={19}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '0 0 12px 12px',
                                    }}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    {filteredLaptops.map(laptop => (
                                        <Marker key={laptop.id} position={laptop.position} icon={laptop.icon}>
                                            <Popup>
                                                <strong>{laptop.name}</strong><br />
                                                <span>Status: {laptop.status}</span><br />
                                                <span>Signal: {laptop.signal}</span><br />
                                                <Button
                                                    variant="outline-success"
                                                    size="sm"
                                                    style={{
                                                        marginTop: '10px',
                                                        transition: 'background-color 0.3s, color 0.3s',
                                                    }}
                                                    onClick={() => this.handleTrackClick(laptop)}
                                                    className="hover-button"
                                                >
                                                    Track
                                                </Button>
                                            </Popup>
                                        </Marker>
                                    ))}
                                    {trackedLaptop && <MapView laptop={trackedLaptop} />}
                                </MapContainer>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="shadow" style={{ borderRadius: '12px', border: 'none' }}>
                            <Card.Header
                                as="h5"
                                className="bg-info text-white text-center"
                                style={{
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px',
                                    fontSize: '1.25rem',
                                }}
                            >
                                Legend
                            </Card.Header>
                            <Card.Body>
                                <div className="legend-item">
                                    <img
                                        src={libraryIcon.options.iconUrl}
                                        alt="Library"
                                        width="25"
                                        style={{ marginRight: '8px' }}
                                    />
                                    Library Laptop
                                </div>
                                <div className="legend-item">
                                    <img
                                        src={labIcon.options.iconUrl}
                                        alt="Lab"
                                        width="25"
                                        style={{ marginRight: '8px' }}
                                    />
                                    Computer Lab Laptop
                                </div>
                                <div className="legend-item">
                                    <img
                                        src={adminIcon.options.iconUrl}
                                        alt="Admin"
                                        width="25"
                                        style={{ marginRight: '8px' }}
                                    />
                                    Admin Office Laptop
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Toast Notification for Tracking */}
                <ToastContainer position="top-end" className="p-3">
                    <Toast onClose={this.handleCloseToast} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/104/104258.png"
                                alt="Notification"
                                width="20"
                                style={{ marginRight: '10px' }}
                            />
                            <strong className="me-auto">Notification</strong>
                        </Toast.Header>
                        <Toast.Body>{notification}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        );
    }
}

// Function to handle map flying to the tracked laptop
function MapView({ laptop }) {
    const map = useMap();

    React.useEffect(() => {
        if (laptop) {
            map.flyTo(laptop.position, 18, {
                animate: true,
                duration: 1,
            });
        }
    }, [laptop, map]);

    return null;
}

export default LaptopTrackingDashboard;
