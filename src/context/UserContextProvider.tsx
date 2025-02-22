"use client";
import { UserContextType, UserType } from "@/type/types";
import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
