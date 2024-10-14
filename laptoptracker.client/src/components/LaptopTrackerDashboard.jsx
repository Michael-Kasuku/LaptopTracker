import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HorizontalNavBar from './LaptopTracker/HorizontalNavBar';
import VerticalNavBar from './LaptopTracker/VerticalNavBar';
import LaptopTrackingDashboard from './LaptopTracker/LaptopTrackingDashboard';
import AddDevice from './LaptopTracker/AddDevice'; // Import AddDevice component
import ViewDevices from './LaptopTracker/ViewDevices'; // Import ViewDevices component
import UsageReport from './LaptopTracker/UsageReport';

class LaptopTrackerDashboard extends Component {
    render() {
        // Get the viewport width to handle responsiveness
        const isMobile = window.innerWidth <= 768; // Adjust this threshold as needed

        // Sample data for UsageReport
        const pieData = [
            { name: 'Active', value: 60 },
            { name: 'Inactive', value: 30 },
            { name: 'Unknown', value: 10 },
        ];

        const lineData = [
            { name: 'Jan', usage: 4000 },
            { name: 'Feb', usage: 3000 },
            { name: 'Mar', usage: 2000 },
            { name: 'Apr', usage: 2780 },
            { name: 'May', usage: 1890 },
            { name: 'Jun', usage: 2390 },
        ];

        // Define styles for the layout components
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        };

        const headerStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        };

        const sidebarStyle = {
            position: isMobile ? 'relative' : 'fixed',
            top: '64px',
            left: 0,
            width: isMobile ? '100%' : '240px',
            height: isMobile ? 'auto' : 'calc(100vh - 64px)',
            overflowY: 'auto',
            backgroundColor: '#f8f8f8',
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
        };

        const mainContentStyle = {
            marginLeft: isMobile ? 0 : '240px',
            marginTop: '64px',
            padding: '16px',
            flexGrow: 1,
            overflowY: 'auto',
            height: 'calc(100vh - 64px)',
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
        };

        return (
            <div style={containerStyle}>
                <header style={headerStyle}>
                    <HorizontalNavBar />
                </header>
                <aside style={sidebarStyle}>
                    <VerticalNavBar />
                </aside>
                <main style={mainContentStyle}>
                    <Routes>
                        <Route path="/" element={<LaptopTrackingDashboard />} /> {/* Default Dashboard component */}
                        <Route path="add-device" element={<AddDevice />} /> {/* AddDevice component */}
                        <Route path="view-devices" element={<ViewDevices />} /> {/* ViewDevices component */}
                        <Route path="usage-report" element={<UsageReport pieData={pieData} lineData={lineData} />} /> {/* Pass props to UsageReport */}
                    </Routes>
                </main>
            </div>
        );
    }
}

export default LaptopTrackerDashboard;
