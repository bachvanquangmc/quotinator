import { useContext, createContext, useState } from "react";
import { global_theme } from "./variables";




const initialStates = {
  theme:"default",
  setTheme:()=>{}
}
const initialData = {
  data:[],
  setData:()=>{}
}
const MyContext = createContext(initialStates) // provide a shared space to use in other pages
const MyContextData = createContext(initialData) // provide a shared space to use in other pages

export default function AppProvider({children}){

  const [theme, setTheme] = useState(initialStates.theme)
  const [data, setData] = useState(initialData.data)
  
  return <MyContext.Provider value={{theme, setTheme, data, setData}}>
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

export function useData(){
  const {data, setData} = useContext(MyContextData)
  return {data, setData}
}