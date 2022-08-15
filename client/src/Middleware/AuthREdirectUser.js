
// create authenticate user

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const AuthRedirectUser = ({children}) => {
 
 const { isLoggedInUser } = useContext(AuthContext);

 return isLoggedInUser ? <Navigate to={'/'} />  : children ;

}

// export
export default AuthRedirectUser;