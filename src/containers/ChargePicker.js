import React, {useState} from 'react';
import {Grommet, RangeInput} from "grommet/es6";
import InputLabel from "@material-ui/core/InputLabel";
import {changeCharge} from "../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";

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

const ChargePicker = () => {
    const chargeValue = useSelector(state => state.charge);
    const [value, setValue] = useState(chargeValue);

    const dispatch = useDispatch();
    const onChange = charge => changeCharge(dispatch, charge);

    const onChargeChange = (event) => {
        const value = event.target.value;
        setValue(value);
        onChange(value);
    };

    return (
        <div>
            <InputLabel id="charge-label">Charge ({value})</InputLabel>
            <Grommet theme={theme}>
                <RangeInput
                    value={value}
                    min={-1000}
                    max={0}
                    step={10}
                    name="Repulsion"
                    onChange={onChargeChange}/>
            </Grommet>
        </div>
    );
};

export default ChargePicker;