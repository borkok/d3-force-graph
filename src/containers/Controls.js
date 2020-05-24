import React from 'react';
import Source from "./Source";
import ChargePicker from "./ChargePicker";

const Controls = () => {
    return (
        <table style={{width:"100%", paddingLeft: 100, paddingRight: 100}}>
            <tbody>
            <tr>
                <td><Source/></td>
                <td><ChargePicker/></td>
            </tr>
            </tbody>
        </table>
    );
};

export default Controls;