import React, {useEffect, useRef} from "react";
import Graph from "../../components/Graph/Graph";
import {useSelector} from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import useElementDimensions from "./useElementDimensions";

const RelationVisualizer = () => {
    const graphRef = useRef();

    const loading = useSelector((state) => state.loading);
    const charge = useSelector((state) => state.charge);
    const data = useSelector((state) => {
        return {nodes: state.nodes, links: state.links};
    });

    const [width, height] = useElementDimensions(graphRef);

    useEffect(() => {
        graphRef?.current?.scrollIntoView();
    }, [data, graphRef]);

    if (loading) {
        return <Spinner/>;
    }
    return (
        <div ref={graphRef} style={{ width: "100%" }}>
            <Graph
                data={data}
                width={width}
                height={height}
                charge={charge}
            />
        </div>
    );
};

export default RelationVisualizer;
