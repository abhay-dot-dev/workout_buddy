# 💪 Workout Buddy

A full-stack MERN app to log your workouts. Add an exercise with its load and reps, see all your workouts in one list, and delete the ones you no longer need.

🌐 **Live app:** [https://workout-buddy-flame.vercel.app](https://workout-buddy-flame.vercel.app)
⚙️ **API:** [https://workout-buddy-sp13.onrender.com](https://workout-buddy-sp13.onrender.com)
📦 **Source code:** [github.com/abhay-dot-dev/workout_buddy](https://github.com/abhay-dot-dev/workout_buddy)

> 💤 The API is on Render's free plan, so the first request after a period of inactivity can take up to a minute while the server wakes up.

---

## ✨ Features

- ➕ Add a workout (title, load in kg, reps)
- 📋 View all workouts, newest first
- 🗑️ Delete a workout
- 🕒 See when each workout was added ("5 minutes ago")
- ✅ Form validation with clear error messages
- 🌍 Global state with Context API + useReducer (no prop drilling)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| 🎨 Frontend | React (Vite), Tailwind CSS, React Router, Axios, date-fns |
| ⚙️ Backend | Node.js, Express |
| 🗄️ Database | MongoDB with Mongoose |
| ☁️ Hosting | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

```
workout_buddy
├── backend
│   ├── config
│   │   └── db.js                  # MongoDB connection
│   ├── controllers
│   │   └── workoutController.js   # Logic for each API route
│   ├── models
│   │   └── Workout.js             # Mongoose schema
│   ├── routes
│   │   └── workoutRoutes.js       # Route definitions
│   ├── src
│   │   ├── app.js                 # Express app, CORS, middleware, routes
│   │   └── server.js              # Entry point: connects DB, starts server
│   ├── .env                       # Environment variables (not committed)
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx         # Top bar
│   │   │   ├── WorkoutDetails.jsx # One workout card + delete button
│   │   │   └── WorkoutForm.jsx    # Add-workout form
│   │   ├── context
│   │   │   └── WorkoutContext.jsx # Context, reducer and provider
│   │   ├── hooks
│   │   │   └── useWorkoutContext.js
│   │   ├── pages
│   │   │   └── Home.jsx           # Workout list + form layout
│   │   ├── services
│   │   │   ├── api.js             # Axios instance (base URL)
│   │   │   └── workoutService.js  # API call functions
│   │   ├── App.jsx                # Router setup
│   │   └── main.jsx               # Entry point, wraps app in provider
│   ├── .env                       # Environment variables (not committed)
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

Base URL: `/api/workouts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all workouts (newest first) |
| GET | `/:id` | Get a single workout |
| POST | `/` | Create a workout |
| PATCH | `/:id` | Update a workout (partial update) |
| DELETE | `/:id` | Delete a workout |

Example request body for `POST /api/workouts`:

```json
{ "title": "bench press", "load": 60, "reps": 10 }
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

- `PORT`: port the server runs on (Render sets this automatically in production)
- `MONGO_URI`: your MongoDB Atlas connection string
- `FRONTEND_URL`: the only origin allowed by CORS (no trailing slash)

### Frontend (`frontend/.env`)

```
VITE_API_URL=http://localhost:3000/api
```

- `VITE_API_URL`: base URL of the backend API. Vite only exposes variables that start with `VITE_`.

---

## 🚀 Run Locally

### 📋 Prerequisites

- Node.js 18 or newer
- A MongoDB database (a free MongoDB Atlas cluster works)

### 1️⃣ Clone the repo

```bash
git clone https://github.com/abhay-dot-dev/workout_buddy.git
cd workout_buddy
```

### 2️⃣ Start the backend

```bash
cd backend
npm install
npm run dev
```

The API runs at `http://localhost:3000`. Create `backend/.env` first (see above).

### 3️⃣ Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`. Create `frontend/.env` first (see above).

> 🔄 Restart a server after editing its `.env` file. Neither Vite nor nodemon reloads it automatically.

---

## ☁️ Deployment

### ⚙️ Backend on Render

1. Create a new **Web Service** and connect your GitHub repo.
2. Set **Root Directory** to `backend`.
3. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
4. Add environment variables: `MONGO_URI` and `FRONTEND_URL` set to `https://workout-buddy-flame.vercel.app` (no trailing slash).
5. In MongoDB Atlas, go to **Network Access** and allow `0.0.0.0/0`, since Render uses changing IP addresses.

> 💤 On Render's free plan the service sleeps after a period of inactivity, so the first request can take around a minute.

### 🎨 Frontend on Vercel

1. Import the repo as a new project.
2. Set **Root Directory** to `frontend` (Vercel detects Vite automatically).
3. Add the environment variable `VITE_API_URL` set to `https://workout-buddy-sp13.onrender.com/api`.
4. Deploy.

> 🔁 Vite reads env variables at build time, so redeploy the frontend after changing `VITE_API_URL`.

---

## 🧠 How It Works

1. 🏁 `main.jsx` wraps the app in `WorkoutContextProvider`, which holds the workouts list.
2. 📥 `Home.jsx` fetches workouts through `workoutService.js` and dispatches `SET_WORKOUTS`.
3. ➕ `WorkoutForm.jsx` posts a new workout, then dispatches `CREATE_WORKOUT` once the server confirms the save.
4. 🗑️ `WorkoutDetails.jsx` deletes a workout, then dispatches `DELETE_WORKOUT`.
5. 🔄 The reducer returns a new state each time, so every component reading the context updates automatically.

State only changes after the server confirms the request succeeded, so the UI always matches the database.

---

## 👤 Author

**Abhay Kumar Sharma**