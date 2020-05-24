import React, {useState} from 'react';
import {Grommet, RangeInput} from "grommet/es6";
import InputLabel from "@material-ui/core/InputLabel";
import {connect} from "react-redux";
import {changeCharge} from "../store/actionCreators";

const theme = {
    global: {
        focus: {
           border: {
               color: "#BEE7FF"
           }
        }
    },
    rangeInput: {
        track: {
            height: "2px"
        },
        thumb: {
            color: "#0079c1"
        }
    }
};

const ChargePicker = ({chargeValue, onChange}) => {
    const [value, setValue] = useState(chargeValue);

    const onChargeChange = (event) => {
        const value = event.target.value;
        setValue(value);
        onChange(value);
    };

    return (
        <div>
            <InputLabel id="charge-label">Ładunek ({value})</InputLabel>
            <Grommet theme={theme}>
                <RangeInput
                    value={value}
                    min={-1000}
                    max={0}
                    step={10}
                    name="Odpychanie"
                    onChange={onChargeChange}/>
            </Grommet>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        chargeValue: state.charge
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: charge => changeCharge(dispatch, charge)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChargePicker);