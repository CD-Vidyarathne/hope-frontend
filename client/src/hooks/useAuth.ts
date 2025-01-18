import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.tsx";

const useAuth = () => useContext(AuthContext);

export default useAuth;
