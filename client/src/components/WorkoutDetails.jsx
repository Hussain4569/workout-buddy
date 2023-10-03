import React from 'react'
import useWorkoutContext from '../hooks/useWorkoutContext';
import useAuthContext from "../hooks/useAuthContext";

import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({workout}) => {

  const {deleteWorkout} = useWorkoutContext();
  const {user} = useAuthContext();

  const handleClick = async (e) => {

    if (!user) return;

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    const json = await response.json()

    if (response.ok) {
      deleteWorkout(json);
    }
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong> {workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails