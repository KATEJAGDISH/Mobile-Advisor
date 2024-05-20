import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../../Components/Layout/Layout';
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
    paragraph: {
        marginBottom: theme.spacing(2),
        lineHeight: 1.6,
    },
}));

const ContactUs = () => {
    const classes = useStyles();

    return (<Layout>
        <div className={classes.root}>
            <Typography variant="h4" className={classes.heading}>
                Contact Us
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                If you have any questions or concerns, feel free to reach out to us using the following contact information:
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Email: mobileAdvisor@example.com
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Phone: +91 8424013789
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Address: 123 Main Street, City, india
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Our customer service team is available to assist you during business hours.
            </Typography>
        </div></Layout>
    );
};

export default ContactUs;
