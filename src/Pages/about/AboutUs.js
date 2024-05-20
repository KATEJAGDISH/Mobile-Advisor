import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        margin: 'auto',
        padding: theme.spacing(3),
    },
    heading: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.primary.main,
    },
    paragraph: {
        marginBottom: theme.spacing(2),
        lineHeight: 1.6,
    },
}));

function AboutUs() {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={3}>
            <Typography variant="h4" component="h2" className={classes.heading}>
                Welcome to Our Personalized Recommender System
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Our mission is to help users find the best deals and discounts across various e-commerce platforms like Amazon and Flipkart. We strive to provide an intuitive and user-friendly experience, allowing users to browse recommended discounts, compare prices, and explore similar products.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Whether you're looking for the latest tech gadgets, fashion trends, or home essentials, our recommender system is here to assist you in making informed purchasing decisions.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                We value your feedback! Feel free to let us know how we can improve and make our system even better. Your suggestions and comments are crucial in helping us enhance the user experience and tailor our recommendations to your preferences.
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
                Thank you for choosing our personalized recommender system. Happy shopping!
            </Typography>
        </Paper>

    );
}

export default AboutUs;
