import React, {useCallback, useState} from 'react';
import Combobox from "../components/Combobox/Combobox";
import {sources} from "../store/sources";
import RefreshButton from "../components/RefreshButton";
import {useDispatch} from "react-redux";
import {load} from "../store/actionCreators";
import ObjectPropertyInput from "../components/ObjectTextField/ObjectPropertyInput";

const Source = () => {
    const [selectedSource, setSource] = useState();
    const dispatch = useDispatch();
    const handleChange = useCallback(source => {
        setSource(source);
    }, []);

    const handleRefresh = useCallback(() => {
        load(dispatch, selectedSource)
    }, [dispatch, selectedSource]);

    return (
        <table border={0}>
            <tbody>
            <tr>
                <td colSpan="2" align={"left"}><Combobox
                    items={sources.map(source => ({"label": source.label, "value": source}))}
                    changed={handleChange} label="Select collection:"/></td>
                <td align={"left"}><RefreshButton clicked={handleRefresh}/></td>
            </tr>
            {selectedSource !== undefined &&
                <>
                    <tr>
                        {/*TODO put selected source in redux store,
                        or move whole source form with submit button to a separate component*/
                        }
                        <td colSpan="3">
                            <ObjectPropertyInput property="url" object={selectedSource}
                                                 readonly={selectedSource.readonly}
                                                 changed={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ObjectPropertyInput property="episodesPath" object={selectedSource}
                                                 readonly={selectedSource.readonly}
                                                 changed={handleChange}
                                                 helperText="* enter jmespath"
                            />
                        </td>
                        <td>
                            <ObjectPropertyInput property="episodeCharactersPath" object={selectedSource}
                                                 readonly={selectedSource.readonly}
                                                 changed={handleChange}
                                                 helperText="* enter jmespath"
                            />
                        </td>
                        <td>
                            <ObjectPropertyInput property="episodeCategoryPath" object={selectedSource}
                                                 readonly={selectedSource.readonly}
                                                 changed={handleChange}
                                                 helperText="* enter jmespath"
                            />
                        </td>
                    </tr>
                </>
            }
            </tbody>
        </table>
    );
};

export default Source;