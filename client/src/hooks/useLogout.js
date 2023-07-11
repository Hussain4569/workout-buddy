import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

const useLogout = () => {

    const {logoutUser} = useAuthContext();
    const {setWorkouts} = useWorkoutContext();

    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user');

        //remove global state
        logoutUser();
        setWorkouts(null);
    }

    return { logout };

}

export default useLogout;