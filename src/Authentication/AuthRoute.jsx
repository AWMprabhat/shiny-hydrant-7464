import React from "react";

const AuthRoute = ({children}) => {
  // const auth = useSelector(store.AppReducer.isAuth)
  // if(!auth){
  //   return <Navigate to="/login" replace/>
  // }
  return children;
};

export default AuthRoute;
