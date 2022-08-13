// create reducer

const AuthReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN_DATA_SUCCESS':
            return {
                isLoggedInUser : true,
                user  : payload
            }

             
            case 'USER_LOGOUT':
            return {
                isLoggedInUser : false,
                user  : { }
            }
           
        
        default:
        return state;
        
    }
}

// export AuthReducer
export default AuthReducer;