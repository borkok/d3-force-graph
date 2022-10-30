import React, {useCallback, useState} from 'react';
import Combobox from "../components/Combobox/Combobox";
import {sources} from "../store/sources";
import RefreshButton from "../components/RefreshButton";
import {useDispatch} from "react-redux";
import {load} from "../store/actionCreators";

const Source = () => {
    const [selectedSource, setSource] = useState('');
    const dispatch = useDispatch();
    const handleChange = useCallback(source => {
        setSource(source);
    }, []);

    const handleRefresh = useCallback(() => {
        load(dispatch, selectedSource)
    }, [dispatch, selectedSource]);

    return (
        <table>
            <tbody>
            <tr>
                <td><Combobox items={sources.map(source => ({"label": source.label, "value": source.id}))} changed={handleChange} label="Select collection:"/></td>
                <td><RefreshButton clicked={handleRefresh}/></td>
            </tr>
            </tbody>
        </table>
    );
};

export default Source;