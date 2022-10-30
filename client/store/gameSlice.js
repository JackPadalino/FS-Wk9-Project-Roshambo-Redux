const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    allPlayers: [],
    selectedPlayer:{}
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setAllPlayers: (state, action) => {
            state.allPlayers = action.payload;
        },
        setSelectedPlayer: (state, action) => {
            state.selectedPlayer = action.payload;
        },
        addPlayer: (state,action) => {
            //not sure what this is suppoda do!
        }
    }
});

export const {
    setAllPlayers,
    setSelectedPlayer,
    addPlayer 
} = gameSlice.actions;
export default gameSlice.reducer;