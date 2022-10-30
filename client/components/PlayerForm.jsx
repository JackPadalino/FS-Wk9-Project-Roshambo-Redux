import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAllPlayers,addPlayer } from '../store/gameSlice'

const PlayerForm = () => {
    const [loading,setLoading] = useState(true);
    const [username,setUsername] = useState('');
    const [usernames,setUsernames] = useState([]);
    const [validUsername, setValidUsername] = useState(true);
    
    const players = useSelector((state)=>state.game.allPlayers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getPlayers = async () =>{
        const response = await axios.get("/api/players");
        const playerUsernames = response.data.map(player=>player.username.toLowerCase()); // creating a list of usernames
        dispatch(setAllPlayers(response.data));
        setUsernames(playerUsernames);
        setLoading(false);
    };

    useEffect(() =>{
        getPlayers();
    }, []);

    // creating a new user with user input if username is valid
    const createNewPlayer=async(event)=>{
        event.preventDefault();
        if(validUsername){
            const body={ username:username };
            const response = await axios.post('api/players',body);
            dispatch(addPlayer(response.data));
            navigate('/leaderboard');
        };  
    };

    // checking to see if user input is already in username list
	const isValidUsername = async userInput => {
        const foundUsername = usernames.find(username=>username==userInput);
        foundUsername ? setValidUsername(false) : setValidUsername(true);
	};

    // getting user input as the user types - converting their input to lowercase before it is
    // send to the isValidUsername function
	const handleUsernameInput = event => {
		const userInput = event.target.value;
		setUsername(userInput);
		isValidUsername(userInput.toLowerCase());
	};

    if(loading){
        return <p>Loading...</p>
    }else{
        return (
            <div>
                <h1>Add new player</h1>
                <form onSubmit={createNewPlayer}>
                    <label htmlFor='username-input'>Username:</label>
                    <input value={username} onChange={handleUsernameInput} id='username-input' type='text'/>
                    <button type='submit'>Submit</button>
                    {!validUsername && (<p>This username is taken!</p>)}
                </form>
            </div>
        );
    };
};

export default PlayerForm;