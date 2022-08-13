
// create authenticate user

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const AuthenticateUser = ({children}) => {
 
 const { isLoggedInUser } = useContext(AuthContext);

 return isLoggedInUser ? children : <Navigate to={'/login'} />

}

// export
export default AuthenticateUser;