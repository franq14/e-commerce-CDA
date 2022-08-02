import { createContext, useState } from 'react';

export const FavContext = createContext();

const FavProvider = (props) => {
    const [fav, setFav] = useState([]);
    
    const addToFav = (item) => {
        if(isInFav(item.id)){
            setFav(fav.filter((favItem) => item.id !== favItem.id));
        } else {
            setFav([...fav, {...item}]);
        }
    }

    const isInFav = (id) => {
        return fav.some((item) => item.id === id);
    }

    return (
        <FavContext.Provider value={{fav, addToFav}}>
            {props.children}
        </FavContext.Provider>
    );
};

export default FavProvider;