import { createContext } from "react";

const authContext = createContext({
    text: '',
    setText: () => {},
  });
  
  const { Provider, Consumer } = authContext;
  export { Provider, Consumer };
  
  export default authContext;