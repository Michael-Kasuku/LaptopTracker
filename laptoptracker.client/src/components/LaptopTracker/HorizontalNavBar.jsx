import React, { Component } from 'react';
import $ from 'jquery';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Badge,
    Avatar,
    Divider,
    Box,
    Tooltip,
} from '@mui/material';
import { Menu as MenuIcon, Laptop as LaptopIcon, Mail as MailIcon, Notifications as NotificationsIcon, Settings as SettingsIcon } from '@mui/icons-material';

class HorizontalNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            menuType: '', // Identifies which menu (profile, messages, notifications, laptops) is currently open
        };
    }

    handleMenuOpen = (event, menuType) => {
        this.setState({ anchorEl: event.currentTarget, menuType }, () => {
            // Use jQuery to animate menu opening
            $(`#${menuType}-menu`).slideDown(200);
        });
    };

    handleMenuClose = () => {
        const { menuType } = this.state;
        // Use jQuery to animate menu closing
        $(`#${menuType}-menu`).slideUp(200, () => {
            this.setState({ anchorEl: null, menuType: '' });
        });
    };

    render() {
        const { anchorEl, menuType } = this.state;
        const isMenuOpen = Boolean(anchorEl);

        return (
            <AppBar position="fixed">
                <Toolbar>
                    {/* Menu Button */}
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    {/* Logo */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src="assets/img/logo.jfif" alt="Laptop Tracker" style={{ height: 40 }} />
                    </Typography>

                    {/* Laptop Tracking Button */}
                    <Tooltip title="Track Laptops">
                        <IconButton
                            color="inherit"
                            aria-label="show laptops"
                            onClick={(e) => this.handleMenuOpen(e, 'laptops')}
                        >
                            <Badge badgeContent={10} color="info">
                                <LaptopIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    {/* Messages Button */}
                    <Tooltip title="Messages">
                        <IconButton
                            color="inherit"
                            aria-label="show messages"
                            onClick={(e) => this.handleMenuOpen(e, 'messages')}
                        >
                            <Badge badgeContent={4} color="warning">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    {/* Notifications Button */}
                    <Tooltip title="Notifications">
                        <IconButton
                            color="inherit"
                            aria-label="show notifications"
                            onClick={(e) => this.handleMenuOpen(e, 'notifications')}
                        >
                            <Badge badgeContent={3} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    {/* User Account Button */}
                    <Tooltip title="Account Settings">
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            onClick={(e) => this.handleMenuOpen(e, 'profile')}
                            color="inherit"
                        >
                            <Avatar alt="Michael Kasuku" src="assets/img/team/kasuku.jpg" />
                        </IconButton>
                    </Tooltip>
                </Toolbar>

                {/* Dropdown Menus for Profile, Messages, Notifications, and Laptop Tracking */}

                {/* Profile Menu */}
                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen && menuType === 'profile'}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={this.handleMenuClose}>Profile Settings</MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>
                </Menu>

                {/* Messages Menu */}
                <Menu
                    id="messages-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen && menuType === 'messages'}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Typography variant="h6" sx={{ px: 2, py: 1 }}>Messages</Typography>
                    <Divider />
                    <MenuItem>
                        <Avatar alt="Lopez" src="assets/img/team/lopez.jpg" />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="body2">Lopez sent you a message</Typography>
                            <Typography variant="caption" color="text.secondary">1 minute ago</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Avatar alt="Josphine" src="assets/img/team/josphine.jpg" />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="body2">Josphine sent you a message</Typography>
                            <Typography variant="caption" color="text.secondary">15 minutes ago</Typography>
                        </Box>
                    </MenuItem>
                </Menu>

                {/* Notifications Menu */}
                <Menu
                    id="notifications-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen && menuType === 'notifications'}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Typography variant="h6" sx={{ px: 2, py: 1 }}>Notifications</Typography>
                    <Divider />
                    <MenuItem>
                        <Avatar><NotificationsIcon /></Avatar>
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="body2">Laptop Location Updated</Typography>
                            <Typography variant="caption" color="text.secondary">Your laptop's location has been updated.</Typography>
                        </Box>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Avatar><NotificationsIcon /></Avatar>
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="body2">New device registered</Typography>
                            <Typography variant="caption" color="text.secondary">A new laptop has been registered under your account.</Typography>
                        </Box>
                    </MenuItem>
                </Menu>

                {/* Laptops Menu */}
                <Menu
                    id="laptops-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen && menuType === 'laptops'}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Typography variant="h6" sx={{ px: 2, py: 1 }}>Laptops</Typography>
                    <Divider />
                    <MenuItem onClick={this.handleMenuClose}>View All Laptops</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Track Laptop</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Manage Devices</MenuItem>
                </Menu>
            </AppBar>
        );
    }
}

export default HorizontalNavBar;
