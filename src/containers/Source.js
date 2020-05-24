import React, {useState} from 'react';
import Combobox from "../components/combobox/combobox";
import {sources} from "../data/sources";
import RefreshButton from "../components/refreshButton";
import {connect} from "react-redux";
import {load} from "../store/actionCreators";

const Source = ({onRefresh}) => {
    const [selectedSource, setSource] = useState('');

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
                <td><Combobox items={sources} changed={handleChange} label="Wybierz kolekcję"/></td>
                <td><RefreshButton clicked={handleRefresh}/></td>
            </tr>
            </tbody>
        </table>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: (source) => load(dispatch, source)
    }
};

export default connect(null, mapDispatchToProps)(Source);