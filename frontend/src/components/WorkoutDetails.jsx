import React from 'react'

const WorkoutDetails = ({ workout }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-5'>
            <h4 className='text-lg font-semibold text-green-600 mb-2 capitalize'>{workout.title}</h4>
            <p className="text-sm text-gray-700">Load (in kgs): {workout.load}</p>
            <p className="text-sm text-gray-700">Reps: {workout.reps}</p>
        </div>
    )
}

export default WorkoutDetails