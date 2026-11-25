import { useState } from 'react'
import { createWorkout } from '../services/workoutService';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext();

    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const workout = { title, load: Number(load), reps: Number(reps) };
            const newWorkout = await createWorkout(workout);

            setReps('');
            setLoad('');
            setTitle('');
            setError('');
            dispatch({type: 'CREATE_WORKOUT', payload: newWorkout})
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    return (
        <form
            className="bg-white rounded-lg shadow-md p-5 space-y-4 h-fit"
            onSubmit={handleSubmit}>
            <h1 className="text-lg font-semibold">Add a new workout </h1>
            <div>
                <label htmlFor="title" className="block text-sm mb-1">Exercise title</label>
                <input
                    id='title'
                    type="text"
                    value={title}
                    placeholder='Enter an exercise'
                    onChange={(e) => { setTitle(e.target.value) }}
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label htmlFor="load" className="block text-sm mb-1">Load</label>
                <input
                    min={0}
                    id='load'
                    value={load}
                    type="number"
                    onChange={(e) => { setLoad(e.target.value) }}
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>
            <div>
                <label htmlFor="reps" className="block text-sm mb-1">Reps</label>
                <input
                    min={1}
                    id='reps'
                    value={reps}
                    type="number"
                    onChange={(e) => { setReps(e.target.value) }}
                    className="w-full border border-gray-300 rounded p-2"
                />
            </div>

            <button
                type='submit'
                className="w-full bg-green-600 text-white rounded p-2 hover:bg-green-700"
            >Add Workout</button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
    )
}

export default WorkoutForm