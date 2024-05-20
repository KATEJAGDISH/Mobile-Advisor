import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import StyleStyles from '../productinfo/Style.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import amazon from '../../Assets/Img/logo-amazon.svg';
import flipkart from '../../Assets/Img/flipkart.svg';

function ProductInfo() {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const { title } = useParams(); // Extract id parameter from URL
    const [items, setItems] = useState([]);
    const [AZitems, setAZItems] = useState([]);
    const [mainImageSrc, setMainImageSrc] = useState("");

    useEffect(() => {
        // Fetch data from the API based on the id parameter
        axios.get(`http://localhost:3001/result?title=${title}`)
            .then(response => {
                // Set the fetched data to the state
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.get(`http://localhost:3002/result?title=${title}`)
            .then(response => {
                // Set the fetched data to the state
                setAZItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [title]); // Add title as a dependency to useEffect

    const handleImageClick = (src) => {
        setMainImageSrc(src);
    };

    return (
        <Layout>
            {items.map((product, index) => (
                <div className={StyleStyles.container} key={index}>
                    <div className={StyleStyles.product_imgs}>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <div style={{ flex: 1 }} className={StyleStyles.img}>
                                <img src={mainImageSrc || product.link} alt="0" style={{ maxWidth: '100%', maxHeight: '600px', width: 'auto', height: 'auto' }} />

                            </div>
                            <div style={{ flex: 0 }}>
                                <div>
                                    <img src={product.img1} alt="1" style={{ width: '100px', height: '75px', margin: '5px', cursor: 'pointer' }} onClick={() => handleImageClick(product.img1)} />
                                </div>
                                <div>
                                    <img src={product.img2} alt="2" style={{ width: '100px', height: '75px', margin: '5px', cursor: 'pointer' }} onClick={() => handleImageClick(product.img2)} />
                                </div>
                                <div>
                                    <img src={product.img3} alt="3" style={{ width: '100px', height: '75px', margin: '5px', cursor: 'pointer' }} onClick={() => handleImageClick(product.img3)} />
                                </div>
                                <div>
                                    <img src={product.img4} alt="4" style={{ width: '100px', height: '75px', margin: '5px', cursor: 'pointer' }} onClick={() => handleImageClick(product.img)} />
                                </div>
                                <div>
                                    <img src={product.img4} alt="5" style={{ width: '100px', height: '75px', margin: '5px', cursor: 'pointer' }} onClick={() => handleImageClick(product.img4)} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={StyleStyles.product_about}>
                        <div className={StyleStyles.product_title}>{product.title.substring(0, 200)}</div>
                        <div className={StyleStyles.product_less_price}>
                            <div className={StyleStyles.price}>Price: {product.price}</div>
                            <div className={StyleStyles.mrp}>MRP: {product.mrp}</div>
                        </div>
                        <div className={StyleStyles.product_rating}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    name="text-feedback"
                                    value={parseFloat(product.stars)}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <Box sx={{ ml: 2 }}>{labels[parseFloat(product.stars)]}</Box>
                            </Box>
                            <div className={StyleStyles.ratings}>{product.rating}</div>
                        </div>
                        <div className={StyleStyles.product_aboutphone}>
                            <ul>
                                <li>{product.about}</li>
                                <li>{product.about1}</li>
                                <li>{product.about2}</li>
                                <li>{product.about3}</li>
                                <li>{product.about4}</li>
                            </ul>
                        </div>
                        <div className={StyleStyles.produt_buy}>
                            {AZitems.map((AZproduct, index) => (
                                <div className={StyleStyles.amazon_pro} key={index}>
                                    <div className={StyleStyles.logo}><img src={amazon} alt="amazon" className={StyleStyles.logoImg} /></div>
                                    <div className={StyleStyles.product_price}>
                                        <div className={StyleStyles.amazon_price}>Amazon Price: {AZproduct.price}</div>
                                        <div className={StyleStyles.amazon_mrp}>MRP: {AZproduct.mrp}</div>
                                    </div>
                                    <div className={StyleStyles.btn}>
                                        <button><a href={AZproduct.product_url}>Buy on Amazon</a></button>
                                    </div>
                                </div>
                            ))}
                            <div className={StyleStyles.flipkart_pro}>
                                <div className={StyleStyles.logo}><img src={flipkart} alt="flipkart" className={StyleStyles.logoImg} /></div>
                                <div className={StyleStyles.product_price}>
                                    <div className={StyleStyles.flipkart_price}>Flipkart Price: {product.price}</div>
                                    <div className={StyleStyles.flipkart_mrp}>MRP: {product.mrp}</div>
                                </div>
                                <div className={StyleStyles.btn}>
                                    <button><a href={product.product_url}>Buy on Flipkart</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    );
}

export default ProductInfo;
