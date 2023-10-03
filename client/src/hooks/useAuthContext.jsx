import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error("useAuthContext must be used inside a AuthContextProvider");
    }

    return context;
}

export default useAuthContext;