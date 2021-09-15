import React from 'react';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
    return value
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([0, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
