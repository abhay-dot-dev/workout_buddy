import { useEffect, useState } from "react"
import { getWorkouts } from "../services/workoutService.js"
import WorkoutDetails from "../components/WorkoutDetails.jsx"
import WorkoutForm from "../components/WorkoutForm.jsx";

const Home = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                setWorkouts(await getWorkouts());
            } catch (error) {
                console.error(error.response?.data?.message || error.message);
            }
        };

        fetchWorkouts();
    }, [])

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
                <WorkoutForm
                    onWorkoutCreated={
                        (workout) => setWorkouts(
                            (prev) => [workout, ...prev]
                        )}
                />
            </div>
        </div>
    )
}

export default Home