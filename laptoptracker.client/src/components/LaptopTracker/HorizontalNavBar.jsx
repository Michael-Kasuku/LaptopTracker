import React, { Component } from 'react';
import $ from 'jquery';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    Tooltip,
} from '@mui/material';

class HorizontalNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            menuType: '', // Identifies which menu is currently open
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
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    {/* Logo */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src="assets/img/logo.jfif" alt="Laptop Tracker Logo" style={{ height: 40 }} />
                    </Typography>

                    {/* User Account Button */}
                    <Tooltip title="Account Settings" arrow>
                        <IconButton
                            edge="end"
                            aria-label="current user account"
                            onClick={(e) => this.handleMenuOpen(e, 'profile')}
                            color="inherit"
                        >
                            <Avatar alt="Michael Kasuku" src="assets/img/team/kasuku.jpg" />
                        </IconButton>
                    </Tooltip>
                </Toolbar>

                {/* Profile Menu */}
                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen && menuType === 'profile'}
                    onClose={this.handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={this.handleMenuClose}>Profile Settings</MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>
                </Menu>
            </AppBar>
        );
    }
}

export default HorizontalNavBar;
