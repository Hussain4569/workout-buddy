import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {workouts: action.payload};

        case "ADD_WORKOUT":
            return {workouts: [action.payload, ...state.workouts]}
        
        case "DELETE_WORKOUT":
            return {workouts: state.workouts.filter(w => w._id !== action.payload._id)}
    
        default:
            return state;
    }
}

export const WorkoutsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutsReducer, {workouts : null});

    //Action creators
    const setWorkouts = (workouts) => {dispatch({type: "SET_WORKOUTS", payload: workouts})}
    const addWorkout = (workout) => {dispatch({type: "ADD_WORKOUT", payload: workout})}
    const deleteWorkout = (workout) => {dispatch({type: "DELETE_WORKOUT", payload: workout})}


    return (
        <WorkoutsContext.Provider value={{...state, setWorkouts, addWorkout, deleteWorkout}}>
            {children}
        </WorkoutsContext.Provider>
    )
}