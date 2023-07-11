import React, { useEffect } from 'react'
import useWorkoutContext from "../hooks/useWorkoutContext";
import useAuthContext from "../hooks/useAuthContext"

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from '../components/WorkoutForm';


const Home = () => {

  const {workouts, setWorkouts} = useWorkoutContext();
  const {user} = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    }

    if (user) fetchWorkouts();

    
  }, [setWorkouts, user])
  

  return (
    <div className='home'>
        <div className='workouts'>
          {workouts && workouts.map(w => <WorkoutDetails key={w._id} workout={w} /> )}
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home