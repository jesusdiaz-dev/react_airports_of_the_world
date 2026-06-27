import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

// ~ Doesn't work with Shadcn.. The framework has its own way to handle this.
// TODO: implement it using: 
// https://www.youtube.com/watch?v=CtyON6I4IZs
// https://ui.shadcn.com/docs/dark-mode/vite

// export type Theme = 'light' | 'dark';

// interface ThemeContextType{
//     theme: Theme
//     toggleTheme: () => void;
// }

// // Equivale a crear el @Injectable — define el "contrato"
// // Creao el contexto.
// const ThemeContext = createContext<ThemeContextType>({
//     theme : "dark",
//     toggleTheme:()=>{},
// });

// // Hook custom — equivale al inject() de Angular
// // Este es el que tenemos que consumir
// export function useTheme(): ThemeContextType{
//     const context = useContext(ThemeContext);
//     if(!context) throw new Error('Error: useTheme should be used inside a ThemeProvider');
//     return context;
// }

// interface Props {
//     children : ReactNode
// }

// // Con esto envuelvo el lugar que necesito que tenga el tema
// export const ThemeProvider = ( { children }: Props)=>{
//     const [theme,setTheme] = useState<Theme>('light');

//     const toggleTheme = ()=>{
//         setTheme((prevTheme)=>(prevTheme === "light" ? "dark":"light"));
//     }

//     return (
//         <ThemeContext.Provider value={{theme,toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }


