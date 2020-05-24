import React from 'react';
import Graph from "../../components/graph/graph";
import {connect} from "react-redux";
import useWindowDimensions from "../../utils/useWindowDimensions";
import Spinner from "../../components/spinner/spinner";

export const RelationVisualizer = (props) => {
    const { height, width } = useWindowDimensions();
    if (props.loading) {
        return <Spinner/>;
    }
    return <Graph data={props.data} width={width - props.margin} height={height - props.margin} charge={props.charge}/>;
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        charge: state.charge,
        data: state
    }
};

export default connect(mapStateToProps)(RelationVisualizer);