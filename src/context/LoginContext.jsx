import React from 'react';


export const LoginUser = React.createContext();
let initLoginState = {
    
}

let reducer = (loginState, action) => {
     switch (action.type) {
       
        case "LOGIN_SUCCESS":
            return {
                       
            }
        case "LOGIN_FAIL":
            return {
                
            }
          
        default:
            throw new Error();
    }

}


function LoginContext(props) {
  let [loginState , dispatch] = React.useReducer(reducer,initLoginState);

    let globalLoginState = {
        loginState,
        dispatch
    }
    
    return (
        <LoginUser.Provider value={globalLoginState}>
            {props.children}
        </LoginUser.Provider>
    )
}

export default LoginContext