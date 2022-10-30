import React from 'react';
import Graph from "../../components/Graph/Graph";
import {useSelector} from "react-redux";
import useWindowDimensions from "./useWindowDimensions";
import Spinner from "../../components/Spinner/Spinner";

const RelationVisualizer = ({margin}) => {
    const loading = useSelector(state => state.loading);
    const charge = useSelector(state => state.charge);
    const data = useSelector(state => {
        return {"nodes": state.nodes, "links": state.links};
    });

    const { height, width } = useWindowDimensions();
    if (loading) {
        return <Spinner/>;
    }
    return <Graph data={data} width={width - margin} height={height - margin} charge={charge}/>;
};

export default RelationVisualizer;