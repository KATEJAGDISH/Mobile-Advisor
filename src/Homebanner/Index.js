import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {

        imgPath:
            'https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/b7626f26b03b2892.jpg?q=50',
    },
    {

        imgPath:
            'https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/c919eea018b1ca69.jpg?q=50',
    },
    {

        imgPath:
            'https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/Redmi125G/GW/March/D114346362_INWLD_BAU_Redmi12_5G_catpage_1400x800._CB579223603_.jpg',
    },
    {

        imgPath:
            'https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12R/NewVariant/Rv1/D111800050_WLD_OnePlus_Aston_12R_NewLaunch_1400x800_2._CB579426337_.jpg',
    },


    {

        imgPath:
            'https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/22ndMarch/D109961859_IN_WLD_Samsung_Eureka_Launch_1400x800._CB579816406_.jpg'
    }, {

        imgPath:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/tdhruvko/Stores/IPL/21stMarch/D124266280_IN_WLD_IPL_Store_1242x600_1.jpg'
    }, {

        imgPath:
            'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/7/AmazonStores/A21TJRUUN4KGV/4f4c9bd052319547ad5ee5b10042bab4.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg'
    }, {

        imgPath:
            "https://m.media-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z9/March/NEO9/V2/1400x800._CB579210966_.gif"
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 80,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 450,
                                    display: 'block',
                                    maxWidth: 1500,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;