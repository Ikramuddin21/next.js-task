import { UserContext } from "@/context/UserContextProvider";
import { useContext } from "react";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
