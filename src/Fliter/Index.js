import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 8 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: 1550 }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Iphone" {...a11yProps(1)} />
                    <Tab label="Samsung" {...a11yProps(2)} />
                    <Tab label="Realme" {...a11yProps(3)} />
                    <Tab label="Oppo" {...a11yProps(4)} />
                    <Tab label="IQoo" {...a11yProps(5)} />
                    <Tab label="Redmi" {...a11yProps(6)} />
                    <Tab label="Oneplus" {...a11yProps(7)} />
                    <Tab label="Vivo" {...a11yProps(8)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Alll
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>

                <TabPanel value={value} index={3} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    Item Three
                </TabPanel>

                <TabPanel value={value} index={6} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={8} dir={theme.direction}>
                    Item Two
                </TabPanel>

            </SwipeableViews>
        </Box>
    );
}