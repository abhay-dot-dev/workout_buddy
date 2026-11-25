import { useEffect } from "react"
import { getWorkouts } from "../services/workoutService.js"
import { useWorkoutContext } from "../hooks/useWorkoutContext.js"

import WorkoutForm from "../components/WorkoutForm.jsx"
import WorkoutDetails from "../components/WorkoutDetails.jsx"

const Home = () => {

    const { workouts, dispatch } = useWorkoutContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const data = await getWorkouts();
                dispatch({ type: 'SET_WORKOUT', payload: data });
            } catch (error) {
                console.error(error.response?.data?.message || error.message);
            }
        };

        fetchWorkouts();
    }, [dispatch])

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-30">
                <div className="space-y-4">
                    {
                        workouts && workouts.map((workout) => (
                            <WorkoutDetails workout={workout} key={workout._id} />
                        ))
                    }
                </div>
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home