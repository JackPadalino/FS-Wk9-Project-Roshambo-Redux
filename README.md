# Roshambo front end

### OLD PROMPT
For this mini-project, you’ll need to create a React app that has the following pages
- / : Has two buttons linking to their respective pages - “Leaderboard” and “Play”
- /leaderboard
  - On load, makes a get request to /api/players
  - Stores the result in state
  - Displays a list of all players usernames
  - Clicking on a player takes you to the single player page (Remember the react-router-dom <Link /> component)
- /leaderboard/:playerId
  - Makes a request to /api/players/:playerId
  - Stores the result in state
  - Displays the information of a single player
  - Shows their username along with a lost of all of the games they’ve played
    - Each game includes the ID and result

- EXTRA CREDIT:
  - /create-player
  - Displays a small form with two items:
    - Username text input: decides the new users  username
    - Submit button: Makes a post request to /api/players sending up the players username

### NEW PROMPT
For this weeks homework we’ll keep it tiny and just expand the homework from last weekend to include a piece of leaderboardSlice redux state to hold our information from the DB:
- LeaderboardSlice
    - Change our leaderboard to be powered by redux instead of using local state
    - Includes an array called allPlayers containing all players usernames
    - Includes an object called selectedPlayer holding a single selected players information (including all games played by them)
    - Includes three actions within the Reducer:
      - setAllPlayers - sets the array of all players to be the payload its given (which is an array of players)
      - setSelectedPlayer - sets the currently selected player to be the payload its given (which is an object for a single player)
      - EXTRA CREDIT: addPlayer - adds a brand new player to the allPlayers array
    - Set the state within our new reducer using the API endpoints
    - Remove and replace the state in our /leaderboard and /leaderboard/:playerId routes with state from the new reducer

## Setup

### MacOS/Linux

* `npm install`
* `npm start`
* Open another terminal window; from there, `npm run seed` to seed the database

### Windows

* `npm install`
* `npm run build-watch` to start the webpack process
* Open another terminal window; from there, `npm run start-server` to start the server process
* Open another terminal window; from there, `npm run seed` to seed the database