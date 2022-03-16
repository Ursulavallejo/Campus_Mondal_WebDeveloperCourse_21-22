import React, { useState } from 'react';
import { createContext } from 'react/cjs/react.development';

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const [data, setData] = useState([])

    return (
        <GlobalContext.Provider value={[data, setData]}>
            {props.children}
        </GlobalContext.Provider>
    )
};