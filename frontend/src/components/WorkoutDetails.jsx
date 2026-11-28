import { FaTrash } from 'react-icons/fa'
import { deleteWorkout } from '../services/workoutService.js'
import { useWorkoutContext } from '../hooks/useWorkoutContext.js'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutContext();

    const handleDelete = async () => {
        try {
            const deleted = await deleteWorkout(workout._id);
            dispatch({ type: 'DELETE_WORKOUT', payload: deleted });
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
        }
    }

    return (
        <div className='bg-white rounded-lg shadow-md p-5 flex justify-between'>
            <div className='flex flex-col'>
                <h4 className='text-lg font-semibold text-green-600 mb-2 capitalize'>{workout.title}</h4>
                <p className="text-sm text-gray-700">Load (in kgs): {workout.load}</p>
                <p className="text-sm text-gray-700">Reps: {workout.reps}</p>
            </div>
            <button
                type="button"
                onClick={handleDelete}
                className="self-start text-sm text-red-600 hover:text-red-800 cursor-pointer"
            >
                <FaTrash />
            </button>
        </div>
    )
}

export default WorkoutDetails