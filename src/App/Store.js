import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Feauters/Login/loginSlice";
import homeReducer from "../Feauters/Home/homeSlice";
import problemReducer from "../Feauters/Problem/problemSlice";
import educationReducer from "../Feauters/Education/educationSlice";
import problemsReducer from "../Feauters/Problems/problemsSlice";
import leaderboardReducer from "../Feauters/LeaderBoard/leaderboardSlice";
import compilersReducer from "../Components/Select/selectSlice";
import attemptsReducer from "../Feauters/Attempts/attemptsSlice";
import profileReducer from "../Feauters/Profile/profileSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    home: homeReducer,
    problem: problemReducer,
    problems: problemsReducer,
    education: educationReducer,
    leaderboard: leaderboardReducer,
    compilers: compilersReducer,
    attempts: attemptsReducer,
    profile: profileReducer,
  },
});
