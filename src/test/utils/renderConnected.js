// utility function for testing components with redux
// see: https://www.30secondsofcode.org/articles/s/testing-redux-connected-components
import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import reducer from '../../store/reducer';
import {configureStore} from "@reduxjs/toolkit";
import {initialState} from "../../store/initialState";

const renderConnected = (
    ui, {
        initial = initialState,
        store = configureStore({reducer: reducer, preloadedState: initial}),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );
    return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;