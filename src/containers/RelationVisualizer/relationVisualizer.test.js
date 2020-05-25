import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import * as redux from 'react-redux';
import RelationVisualizer from "./RelationVisualizer";
import Graph from "../../components/graph/graph";
import Spinner from "../../components/spinner/spinner";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

jest.mock("../../utils/useWindowDimensions", () =>({
    __esModule: true,
    default: jest.fn(() => {return {height: 123, width: 987}})
}));

jest.mock('react-redux');

describe('relation visualizer component test', () => {
    let testee;

    it('should have dimensions from window', () => {
        redux.useSelector.mockImplementation(jest.fn());
        testee = shallow(<RelationVisualizer/>);
        testee.setProps({margin: 100});
        expect(testee.find(Graph).props()).toMatchObject({height: 23, width: 887});
    });

    it('should show spinner if loading', () => {
        redux.useSelector.mockImplementation(() => true);
        testee = shallow(<RelationVisualizer/>);
        expect(testee.contains(<Graph/>)).toBeFalsy();
        expect(testee.contains(<Spinner/>)).toBeTruthy();
    });

    it('should pass data and charge value to graph', () => {
        redux.useSelector
            .mockImplementationOnce(() => false) //loading
            .mockImplementationOnce(() => -200) //charge
            .mockImplementationOnce(() => ({obj: "some"})) //data
        ;
        testee = shallow(<RelationVisualizer/>);
        expect(testee.find(Graph).props()).toMatchObject({data: {obj: "some"}, charge: -200});
    });
});
