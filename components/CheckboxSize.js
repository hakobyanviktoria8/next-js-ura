import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
    root: {
        color: "#272744",
        '&$checked': {
            color: "#FF7E27",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxSize() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                    />
                }
                label="EUR 36, US 10"
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                    />
                }
                label="EUR 36, US 10"
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                    />
                }
                label="EUR 36, US 10"
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={state.checkedD}
                        onChange={handleChange}
                        name="checkedD"
                    />
                }
                label="EUR 36, US 10"
            />
        </FormGroup>
    );
}