
// create providers

import AuthContext from "../Context/AuthContext";
import { useReducer } from "react";
import AuthReducer from "../Reducers/AuthReducer";


     // initail state
  export const INITIAL_STATE = {
        isLoggedInUser : false,
        user : { },
      }
   
    const AuthContextProviders = ({children}) => {
    const [state, dispatch] = useReducer( AuthReducer , INITIAL_STATE)
    
    return(
     <AuthContext.Provider 
      value={
        {
          isLoggedInUser : state.isLoggedInUser,
          user : state.user,
        dispatch 
      }}
     >
      { children }
     </AuthContext.Provider>
    );
}

//export providers
export default AuthContextProviders;