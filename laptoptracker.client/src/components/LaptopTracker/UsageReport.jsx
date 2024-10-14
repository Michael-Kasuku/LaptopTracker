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
    CircularProgress,
} from '@mui/material';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { styled } from '@mui/material/styles'; // Import styled from MUI

const Container = styled('div')(({ theme }) => ({
    padding: '16px',
}));

const TableHeaderCell = styled(TableCell)({
    fontWeight: 'bold',
});

class UsageReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            loading: false,
            openSnackbar: false,
            snackbarMessage: '',
            snackbarSeverity: 'success',
        };
    }

    componentDidMount() {
        this.fetchUsageReports();
    }

    fetchUsageReports = async () => {
        this.setState({ loading: true });
        try {
            const sampleReports = [
                { id: 1, deviceName: 'Library Laptop', userName: 'John Doe', date: '2024-10-01', hoursUsed: 3 },
                { id: 2, deviceName: 'Computer Lab Laptop', userName: 'Jane Smith', date: '2024-10-02', hoursUsed: 5 },
                { id: 3, deviceName: 'Admin Office Laptop', userName: 'Alice Johnson', date: '2024-10-03', hoursUsed: 2 },
            ];
            this.setState({ reports: sampleReports });
        } catch (error) {
            this.setState({ snackbarMessage: 'Error fetching usage reports.', snackbarSeverity: 'error', openSnackbar: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    handleSnackbarClose = () => {
        this.setState({ openSnackbar: false });
    };

    renderPieChart = () => {
        const { pieData } = this.props;
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

        return (
            <PieChart width={400} height={400}>
                <Pie
                    data={pieData}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        );
    };

    renderLineChart = () => {
        const { lineData } = this.props;

        return (
            <LineChart
                width={500}
                height={300}
                data={lineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke="#82ca9d" />
            </LineChart>
        );
    };

    render() {
        const { reports, loading, openSnackbar, snackbarMessage, snackbarSeverity } = this.state;

        return (
            <Container>
                
                <div style={{ marginTop: '16px' }}>
                    <Typography variant="h6">Usage Statistics</Typography>
                    {this.renderPieChart()}
                </div>

                <div style={{ marginTop: '16px' }}>
                    <Typography variant="h6">Usage Over Time</Typography>
                    {this.renderLineChart()}
                </div>

                <TableContainer style={{ marginTop: '16px', boxShadow: 'none' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Device Name</TableHeaderCell>
                                <TableHeaderCell>User Name</TableHeaderCell>
                                <TableHeaderCell>Date</TableHeaderCell>
                                <TableHeaderCell>Hours Used</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center"><CircularProgress /></TableCell>
                                </TableRow>
                            ) : (
                                reports.map(report => (
                                    <TableRow key={report.id}>
                                        <TableCell>{report.deviceName}</TableCell>
                                        <TableCell>{report.userName}</TableCell>
                                        <TableCell>{report.date}</TableCell>
                                        <TableCell>{report.hoursUsed}</TableCell>
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
            </Container>
        );
    }
}

export default UsageReport;
