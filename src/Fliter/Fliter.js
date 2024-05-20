import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyContext from '../Contect/data/MyContext';
import MainStyles from '../Pages/home/Main.module.css';

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
                <Box sx={{ p: 4 }}>
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
    const items = React.useContext(MyContext);// eslint-disable-next-line
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleProductClick = (producttitle) => {
        setSelectedProduct(producttitle);
        // Navigate to the product info page with the product id as a URL parameter
        window.location.href = `/productinfo/${producttitle}`;
    };
    /* const handleProductClick = (product) => {
         setSelectedProduct(product);
     };
 */
    /* const filterItemsByBrand = (brand) => {
         const lowerCaseBrand = brand.toLowerCase();
         return items.filter(item => item.Brand && item.Brand.toLowerCase() === lowerCaseBrand);
     }; */
    const filterItemsByBrand = (brand) => {
        const lowerCaseBrand = brand.trim().toLowerCase();
        return items.filter(item => item.Brand && item.Brand.trim().toLowerCase() === lowerCaseBrand);
    };




    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="iphone" {...a11yProps(1)} />
                    <Tab label="Samsung" {...a11yProps(2)} />
                    <Tab label="Realme" {...a11yProps(3)} />
                    {/*  <Tab label="Oppo" {...a11yProps(4)} />*/}
                    <Tab label="IQoo" {...a11yProps(5)} />
                    <Tab label="Redmi" {...a11yProps(6)} />
                    <Tab label="Oneplus" {...a11yProps(7)} />
                    <Tab label="Vivo" {...a11yProps(8)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChange}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>

                    {items.map((item, index) => (
                        <div key={index} onClick={() => handleProductClick(item.title)}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>

                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {filterItemsByBrand(' iphone').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {filterItemsByBrand('Samsung').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>


                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>

                <TabPanel value={value} index={3} dir={theme.direction}>

                    {filterItemsByBrand('realme').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>


                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>{/*
                <TabPanel value={value} index={4} dir={theme.direction}>
                    {filterItemsByBrand('Oppo').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>


                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>*/}
                <TabPanel value={value} index={5} dir={theme.direction}>
                    {filterItemsByBrand('iqoo').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                    {filterItemsByBrand('redmi').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                    {filterItemsByBrand('oneplus').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={8} dir={theme.direction}>
                    {filterItemsByBrand('vivo').map((item, index) => (
                        <div key={index}>
                            <div className={MainStyles.product_card} onClick={() => window.location.href = `/productinfo/${item.title}`}>

                                <div className={MainStyles.product_image}>
                                    <img src={item.link} alt="" />
                                </div>
                                <div className={MainStyles.product_details}>
                                    <div className={MainStyles.product_rating}>
                                        <p>{item.stars}</p>
                                    </div>
                                    <div className={MainStyles.product_price} >
                                        <div className={MainStyles.actual_price}>{item.price}</div>
                                        <div className={MainStyles.mrp_price}>{item.mrp}</div>
                                    </div>
                                    <div className={MainStyles.product_title}>
                                        <p>{item.title.substring(0, 60)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </TabPanel>

            </SwipeableViews>

        </Box >
    );
} 