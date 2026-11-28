import api from "./api";

export const getWorkouts = async () => {
    const { data } = await api.get('/workouts');
    return data.workouts;
}

export const createWorkout = async (workout) => {
    const {data} = await api.post('/workouts', workout);
    return data.workout;
}

export const deleteWorkout = async (id) => {
    const {data} = await api.delete(`/workouts/${id}`);
    return data.workout;
}