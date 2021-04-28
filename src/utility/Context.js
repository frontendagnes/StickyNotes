import { createContext } from "react";
// import { defaultState } from './defaultState' 

const authContext = createContext({
    notes: '',
    setNotes: () => {},
    color:'',
    setColor: () => {},
    colorLow: '',
    setColorLow: () => {},
    colorMedium: '',
    setColorMedium: () => {},
    colorImportant: '',
    setColorImportant: () => {},
  });
  
  const { Provider, Consumer } = authContext;
  export { Provider, Consumer };
  
  export default authContext;