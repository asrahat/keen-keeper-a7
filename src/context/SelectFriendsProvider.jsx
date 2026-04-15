import React, { createContext, useState } from 'react';

export const SelectFriendsContext = createContext();

const SelectFriendsProvider = ({children}) => {
    const [selectedFriends, setSelectedFriends] = useState([])
    const data ={
        selectedFriends,
        setSelectedFriends
    }
    return (
        <SelectFriendsContext.Provider value={data}>
            {children}
        </SelectFriendsContext.Provider>
    );
};

export default SelectFriendsProvider;