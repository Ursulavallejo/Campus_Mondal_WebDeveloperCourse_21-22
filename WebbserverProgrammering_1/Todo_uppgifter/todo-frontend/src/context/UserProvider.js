import { createContext } from 'react/cjs/react.development';

export const UserContext = createContext()

const UserProvider = (props) => {

    return (
        <UserContext.Provider value={'Hi'}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserProvider;