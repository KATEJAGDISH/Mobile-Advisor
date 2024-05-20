import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
}));

const CustomerService = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.heading}>
                Customer Service
            </Typography>
            <Typography variant="body1" gutterBottom>
                Our customer service team is available to assist you with any questions or concerns you may have. You can reach us through the following channels:
            </Typography>
            <Typography variant="body1" gutterBottom>
                Email: support@example.com
            </Typography>
            <Typography variant="body1" gutterBottom>
                Phone: 1-800-123-4567
            </Typography>
            <Typography variant="body1">
                Our customer service representatives are available Monday to Friday from 9:00 AM to 5:00 PM (EST).
            </Typography>
        </div>
    );
};

export default CustomerService;
