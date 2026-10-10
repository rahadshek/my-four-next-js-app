"use client";

import React, { createContext } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  return <UserContext.Provider value="dark">{children}</UserContext.Provider>;
};

export default UserProvider;
