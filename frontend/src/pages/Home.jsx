import { useEffect, useState } from "react"
import { getWorkouts } from "../services/workoutService.js"
import WorkoutDetails from "../components/WorkoutDetails.jsx"

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
        <div>
            {
                workouts && workouts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))
            }
        </div>
    )
}

export default Home