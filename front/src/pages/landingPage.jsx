import { Button, Container, Slider, Typography } from "@mui/material";
import { useState } from "react";

export default function LandingPage() {
    const [sliderValue, setSliderValue] = useState(100);

    const handleChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div>
            LandingPage
            <Container>
                <Slider aria-label="Volume" value={sliderValue} onChange={handleChange} />
                <Button>
                <Typography variant="h1" align="center">%{sliderValue}</Typography>
                </Button>
            </Container>
        </div>
    );
}
