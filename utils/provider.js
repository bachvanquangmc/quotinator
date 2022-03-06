import { useContext, createContext, useState } from "react";
import { global_theme, quote_number } from "./variables";


const initialStates = {
  theme:"default",
  setTheme:()=>{},
   
  fav: {},
  setFav: ()=>{},

  qts: "default",
  setQts:()=>{},

  quoteData: {},
  setQuoteData: ()=>{},

}
const MyContext = createContext(initialStates) // provide a shared space to use in other pages

export default function AppProvider({children}){

  const [theme, setTheme] = useState(initialStates.theme)
  const [fav, setFav] = useState(initialStates.fav); //or (initialStstes.fav)
  const [quoteData, setQuoteData] = useState(initialStates.quoteData);

  console.log('favorite', fav)
  return <MyContext.Provider value={{theme, setTheme, fav, setFav, quoteData, setQuoteData}}>
    <style jsx global>
      {`
        body{
          background-color:${global_theme[theme].background};
          color:${global_theme[theme].text};
          font-size:${global_theme[theme].fontsize}
        }
      `}
    </style>
    
    {children}
  </MyContext.Provider>
}


// use the context to create hooks like useTheme
export function useTheme(){
  const {theme, setTheme} = useContext(MyContext)
  return {theme, setTheme}
}

export function useFav() {
  const { fav, setFav } = useContext(MyContext);
  return { fav, setFav };
  
 }
export function useQuote() {
  const {qts, setQts} = useContext(MyContext);
  return {qts, setQts};
}
export function useQuoteData() {
  const { quoteData, setQuoteData } = useContext(MyContext);
  return { quoteData, setQuoteData };
}