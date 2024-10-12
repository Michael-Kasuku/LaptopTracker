import React, { Component } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Avatar,
    Divider,
    ListItemIcon,
    Typography
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    Home,
    Folder,
    Laptop,
    Report,
    Assignment,
    Settings,
    Info
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import $ from 'jquery'; // Import jQuery

class VerticalNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeviceManagement: false,
            openReports: false,
            openSettings: false,
        };
    }

    toggleCollapse = (section) => {
        this.setState((prevState) => ({
            [section]: !prevState[section],
        }), () => {
            // jQuery for collapse effect
            const sectionElement = $(`.${section}`);
            if (this.state[section]) {
                sectionElement.slideDown(); // Show the section
            } else {
                sectionElement.slideUp(); // Hide the section
            }
        });
    };

    render() {
        const { openDeviceManagement, openReports, openSettings } = this.state;

        return (
            <nav className="sidebar" style={{ width: '280px', backgroundColor: '#f7f7f7' }}>
                <List component="nav" disablePadding>
                    {/* Profile Section */}
                    <ListItem className="nav-profile" style={{ padding: '20px 15px' }}>
                        <Avatar alt="Michael Kasuku" src="assets/img/team/kasuku.jpg" sx={{ width: 56, height: 56 }} />
                        <div style={{ marginLeft: '15px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Michael Kasuku
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Project Manager
                            </Typography>
                        </div>
                    </ListItem>
                    <Divider />

                    {/* Dashboard */}
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    {/* Device Management */}
                    <ListItem button onClick={() => this.toggleCollapse('openDeviceManagement')}>
                        <ListItemIcon>
                            <Laptop />
                        </ListItemIcon>
                        <ListItemText primary="Device Management" />
                        {openDeviceManagement ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse className="openDeviceManagement" in={openDeviceManagement} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/add-device">
                                <ListItemIcon>
                                    <Assignment />
                                </ListItemIcon>
                                <ListItemText primary="Add Device" />
                            </ListItem>
                            <ListItem button component={Link} to="/view-devices">
                                <ListItemIcon>
                                    <Report />
                                </ListItemIcon>
                                <ListItemText primary="View Devices" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Reports */}
                    <ListItem button onClick={() => this.toggleCollapse('openReports')}>
                        <ListItemIcon>
                            <Report />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                        {openReports ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse className="openReports" in={openReports} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/usage-report">
                                <ListItemIcon>
                                    <Assignment />
                                </ListItemIcon>
                                <ListItemText primary="Usage Report" />
                            </ListItem>
                            <ListItem button component={Link} to="/issues-report">
                                <ListItemIcon>
                                    <Report />
                                </ListItemIcon>
                                <ListItemText primary="Issues Report" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Settings */}
                    <ListItem button onClick={() => this.toggleCollapse('openSettings')}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        {openSettings ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse className="openSettings" in={openSettings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/profile-settings">
                                <ListItemIcon>
                                    <Info />
                                </ListItemIcon>
                                <ListItemText primary="Profile Settings" />
                            </ListItem>
                            <ListItem button component={Link} to="/app-settings">
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="App Settings" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </nav>
        );
    }
}

export default VerticalNavBar;
