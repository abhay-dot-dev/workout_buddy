import React from 'react'

const WorkoutDetails = ({ workout }) => {
    return (
        <div>
            <h4>{workout.title}</h4>
            <p>Load (in kgs): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
        </div>
    )
}

export default WorkoutDetails