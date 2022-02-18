import { useContext, createContext, useState } from "react";

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
  fav: {},
  setFav: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  //children all the pages/components insider this provider
  const [fav, setFav] = useState({}); //or (initialStstes.fav)
  console.log("favourites", fav);

  //put in the variables you want to share
  return (
    <MyContext.Provider value={{ fav, setFav }}>{children}</MyContext.Provider>
  );
}

//use the Context to create Hooks like useTheme
export function useFav() {
  const { fav, setFav } = useContext(MyContext);
  return { fav, setFav };
}
