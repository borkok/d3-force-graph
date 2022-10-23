import React, {useState} from 'react';
import Combobox from "../components/Combobox/Combobox";
import {sources} from "../data/sources";
import RefreshButton from "../components/RefreshButton";
import {useDispatch} from "react-redux";
import {load} from "../store/actionCreators";

const Source = () => {
    const [selectedSource, setSource] = useState('');
    const dispatch = useDispatch();
    const onRefresh = source => load(dispatch, source);

    const handleChange = selectedSource => {
        setSource(selectedSource);
    };

    const handleRefresh = (event) => {
        onRefresh(selectedSource);
    };

    return (
        <table>
            <tbody>
            <tr>
                <td><Combobox items={sources} changed={handleChange} label="Select collection:"/></td>
                <td><RefreshButton clicked={handleRefresh}/></td>
            </tr>
            </tbody>
        </table>
    );
};

export default Source;