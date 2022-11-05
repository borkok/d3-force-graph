import React, {useCallback, useState} from 'react';
import Combobox from "../components/Combobox/Combobox";
import {sources} from "../store/sources";
import RefreshButton from "../components/RefreshButton";
import {useDispatch} from "react-redux";
import {load} from "../store/actionCreators";
import TextField from "@material-ui/core/TextField";

const Source = () => {
    const [selectedSource, setSource] = useState();
    const dispatch = useDispatch();
    const handleChange = useCallback(source => {
        setSource(source);
    }, []);

    const handleRefresh = useCallback(() => {
        load(dispatch, selectedSource)
    }, [dispatch, selectedSource]);

    function getHandleChange(event, propertyName) {
        handleChange({
            ...selectedSource,
            [propertyName]: event.target.value
        });
    }

    function getSelectedSourceProperty(propertyName) {
        return selectedSource[propertyName];
    }

    return (
        <table border={0}>
            <tbody>
            <tr>
                <td colSpan="2" align={"left"}><Combobox items={sources.map(source => ({"label": source.label, "value": source}))}
                                          changed={handleChange} label="Select collection:"/></td>
                <td align={"left"}><RefreshButton clicked={handleRefresh}/></td>
            </tr>
            {selectedSource !== undefined &&
                <>
                    <tr>
                        {/*TODO extract text field to separate component, or put selected source in redux store,
                        or move whole source form with submit button to separate component*/}
                        <td colSpan="3"><TextField id="url" key="url"  fullWidth size="small"
                                                   onChange={event => getHandleChange(event, "url")}
                                                   InputProps={{
                                                       readOnly: selectedSource.readonly,
                                                   }}
                                                   label="url"
                                                   value={getSelectedSourceProperty("url")}/></td>
                    </tr>
                    <tr>
                        <td><TextField id="root-path" key="root-path"  fullWidth size="small"
                                       onChange={event => getHandleChange(event, "episodesPath")}
                                       InputProps={{
                                           readOnly: selectedSource.readonly,
                                       }}
                                       label="episodes"
                                       helperText="* enter jmespath"
                                       value={getSelectedSourceProperty("episodesPath")}/></td>
                        <td><TextField id="characters-path" key="characters-path"  fullWidth size="small"
                                       onChange={event => getHandleChange(event, "episodeCharactersPath")}
                                       InputProps={{
                                           readOnly: selectedSource.readonly,
                                       }}
                                       label="episode characters"
                                       helperText="* enter jmespath"
                                       value={getSelectedSourceProperty("episodeCharactersPath")}/></td>
                        <td><TextField id="category-path" key="category-path"  fullWidth size="small"
                                       onChange={event => getHandleChange(event, "episodeCategoryPath")}
                                       InputProps={{
                                           readOnly: selectedSource.readonly,
                                       }}
                                       label="episode category"
                                       helperText="* enter jmespath"
                                       value={getSelectedSourceProperty("episodeCategoryPath")}/></td>
                    </tr>
                </>
            }
            </tbody>
        </table>
    );
};

export default Source;