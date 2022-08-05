import { createContext, useState, useEffect } from "react";

export const FavContext = createContext();

const FavProvider = (props) => {
  const [fav, setFav] = useState(
    localStorage.getItem("Favs") ? JSON.parse(localStorage.getItem("Favs")) : []
  );

  useEffect(() => {
    localStorage.setItem("Favs", JSON.stringify(fav));
  }, [fav]);

  const addToFav = (item) => {
    if (isInFav(item.id)) {
      setFav(fav.filter((favItem) => item.id !== favItem.id));
    } else {
      setFav([...fav, { ...item }]);
    }
  };

  const isInFav = (id) => {
    return fav.some((item) => item.id === id);
  };

  return (
    <FavContext.Provider value={{ fav, addToFav, isInFav }}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;
