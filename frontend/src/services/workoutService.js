import api from "./api";

export const getWorkouts = async () => {
    const { data } = await api.get('/workouts');
    return data.workouts;
}