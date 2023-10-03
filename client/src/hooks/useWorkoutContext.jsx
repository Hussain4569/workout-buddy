import { WorkoutsContext } from "../context/workoutsContext";
import { useContext } from "react";

const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) {
        throw Error("useWorkoutContext must be used inside a WorkoutsContextProvider");
    }

    return context;
}

export default useWorkoutContext;