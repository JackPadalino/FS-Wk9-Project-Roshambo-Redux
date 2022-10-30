/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import gameReduceer from './gameSlice';

const store = configureStore({
  reducer: {
    game: gameReduceer
    //players:leaderboardReducer
  }
});

export default store;