import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(4, 0),
    },
    footerLink: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (

        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Typography>
                            <Link component={RouterLink} to="/AboutUs" className={classes.footerLink}>
                                About Us
                            </Link>
                            <Link component={RouterLink} to="contacatus" className={classes.footerLink}>
                                Contact Us
                            </Link>
                            <Link href="#" className={classes.footerLink}>
                                Careers
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Typography>
                            <Link component={RouterLink} to="Service" className={classes.footerLink}>
                                Customer Service
                            </Link>
                            <Link href="#" className={classes.footerLink}>
                                FAQ
                            </Link>

                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Connect With Us
                        </Typography>
                        <Typography>
                            <Link href="https://www.instagram.com/jagdish___06?igsh=ZHRocHIwd2RxOWhi" className={classes.footerLink}>
                                Facebook
                            </Link>
                            <Link href="https://www.instagram.com/jagdish___06?igsh=ZHRocHIwd2RxOWhi" className={classes.footerLink}>
                                Twitter
                            </Link>
                            <Link href="https://www.instagram.com/jagdish___06?igsh=ZHRocHIwd2RxOWhi" className={classes.footerLink}>
                                Instagram
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography>
                            Stay updated with our latest offers and products by subscribing
                            to our newsletter.
                        </Typography>
                        {/* You can add a newsletter signup form here */}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
