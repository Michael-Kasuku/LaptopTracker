import React, { Component } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListItemIcon,
    Divider,
    Typography,
    Box,
    Tooltip
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Home,
    Laptop,
    Report,
    Assignment,
    AddCircle, // for adding devices
    Visibility // for viewing devices
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

class VerticalNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeviceManagement: false,
            openReports: false,
        };
    }

    toggleCollapse = (section) => {
        this.setState((prevState) => ({
            [section]: !prevState[section],
        }));
    };

    renderListItem = (to, icon, primaryText, padding) => (
        <ListItem
            button
            component={Link}
            to={to}
            sx={{
                padding: padding || '15px 20px',
                '&:hover': { backgroundColor: '#f0f0f0' },
            }}
        >
            <ListItemIcon sx={{ color: '#1976d2' }}>
                <Tooltip title={primaryText}>
                    {icon}
                </Tooltip>
            </ListItemIcon>
            <ListItemText primary={primaryText} />
        </ListItem>
    );

    renderCollapsibleList = (isOpen, sectionName, items) => (
        <>
            <ListItem
                button
                onClick={() => this.toggleCollapse(sectionName)}
                sx={{
                    padding: '15px 20px',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
            >
                <ListItemIcon sx={{ color: '#1976d2' }}>
                    {items.icon}
                </ListItemIcon>
                <ListItemText primary={items.title} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.subItems.map((subItem, index) => this.renderListItem(subItem.to, subItem.icon, subItem.text, '10px 40px', index))}
                </List>
            </Collapse>
        </>
    );

    render() {
        const { openDeviceManagement, openReports } = this.state;

        return (
            <nav
                className="sidebar"
                style={{
                    width: '280px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        padding: '20px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#1976d2',
                    }}
                >
                    Laptop Tracker
                </Typography>
                <Divider />

                <List component="nav" disablePadding>
                    {/* Dashboard */}
                    {this.renderListItem("/dashboard", <Home />, "Dashboard")}

                    {/* Device Management */}
                    {this.renderCollapsibleList(openDeviceManagement, 'openDeviceManagement', {
                        icon: <Laptop />,
                        title: "Device Management",
                        subItems: [
                            { to: "/dashboard/add-device", icon: <AddCircle />, text: "Add Device" }, // Updated to include '/dashboard'
                            { to: "/dashboard/view-devices", icon: <Visibility />, text: "View Devices" }, // Make sure this is also updated
                        ]
                    })}

                    {/* Reports */}
                    {this.renderCollapsibleList(openReports, 'openReports', {
                        icon: <Report />,
                        title: "Reports",
                        subItems: [
                            { to: "/dashboard/usage-report", icon: <Assignment />, text: "Usage Report" },                            
                        ]
                    })}
                </List>
            </nav>
        );
    }
}

export default VerticalNavBar;
