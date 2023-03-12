//Source: Noroff

import React, { useState } from "react";
import { getTokenFromLocalCookie, getUserFromLocalCookie } from "./auth";

const AuthContext = React.createContext([null, () => {}]);

const setAuthOnLoad = () => {
  if (getTokenFromLocalCookie()) {
    return {
      jwt: getTokenFromLocalCookie(),
      user: getUserFromLocalCookie(),
    };
  } else {
    return null;
  }
};

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(setAuthOnLoad());
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
