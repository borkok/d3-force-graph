import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from "react";
import Combobox from "./Combobox";
import {InputLabel, MenuItem, Select} from "@material-ui/core";

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

describe('combobox component test', () => {
    let testee;

    beforeEach(() => {
       testee = shallow(<Combobox/>);
    });

    it('should have label', () => {
        testee.setProps({"label": "etykieta"});
        expect(testee.find(InputLabel).text()).toEqual("etykieta");
    });

    it('should have items', () => {
        testee.setProps({"items": [{value: 1, label: "first"}, {value: 2, label: "second"}]});
        const menuItems = testee.find(MenuItem);
        expect(menuItems).toHaveLength(3);
        expect(menuItems.getElements()[0].props).toMatchObject({value:""});
        expect(menuItems.getElements()[1].props).toMatchObject({value:1});
        expect(menuItems.getElements()[1].props.children).toEqual("first");
        expect(menuItems.getElements()[2].props).toMatchObject({value:2});
        expect(menuItems.getElements()[2].props.children).toEqual("second");
    });

    it('should call back on change', () => {
        const mockFn = jest.fn();
        testee.setProps({"changed": mockFn});
        testee.find(Select).simulate('change', {"target":""});
        expect(mockFn).toBeCalled();
    })

})