import React, {useCallback, useState} from "react";
import Combobox from "../components/Combobox/Combobox";
import {sources} from "../store/sources";
import RefreshButton from "../components/RefreshButton";
import {useDispatch} from "react-redux";
import {load} from "../store/actionCreators";
import ObjectPropertyInput from "../components/ObjectTextField/ObjectPropertyInput";
import Grid from '@mui/material/Unstable_Grid2';

const Source = () => {
    const [selectedSource, setSource] = useState();
    const dispatch = useDispatch();
    const handleChange = useCallback((source) => {
        setSource(source);
    }, []);

    const handleRefresh = useCallback(() => {
        load(dispatch, selectedSource);
    }, [dispatch, selectedSource]);

    return (
        <Grid container spacing={2}>
            <Grid xs={8}>
                <Combobox
                    items={sources.map((source) => ({
                        label: source.label,
                        value: source,
                    }))}
                    changed={handleChange}
                    label="Select collection:"
                />
            </Grid>
            <Grid xs>
                <RefreshButton clicked={handleRefresh}/>
            </Grid>
            {selectedSource === undefined ? <></> : (
                <Grid container>
                    <Grid>
                        {/*TODO put selected source in redux store, or move whole source form with submit button to a separate component*/}
                        <ObjectPropertyInput
                            property="url"
                            object={selectedSource}
                            readonly={selectedSource.readonly}
                            changed={handleChange}
                        />
                    </Grid>
                    <Grid>
                        <ObjectPropertyInput
                            property="episodesPath"
                            object={selectedSource}
                            readonly={selectedSource.readonly}
                            changed={handleChange}
                            helperText="* enter jmespath"
                        />
                    </Grid>
                    <Grid>
                        <ObjectPropertyInput
                            property="episodeCharactersPath"
                            object={selectedSource}
                            readonly={selectedSource.readonly}
                            changed={handleChange}
                            helperText="* enter jmespath"
                        />
                    </Grid>
                    <Grid>
                        <ObjectPropertyInput
                            property="episodeCategoryPath"
                            object={selectedSource}
                            readonly={selectedSource.readonly}
                            changed={handleChange}
                            helperText="* enter jmespath"
                        />

                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default Source;
