import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setAllPlayers } from '../store/gameSlice'

const Leaderboard = () => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);
    const players = useSelector((state)=>state.game.allPlayers);
    
    const getPlayers = async () =>{
        const response = await axios.get("/api/players");
        dispatch(setAllPlayers(response.data));
        setLoading(false);
    };
    
    useEffect(() =>{
        getPlayers();
    }, []);

    if(loading){
        return <p>Loading...</p>
    }else{
        return (
            <div>
                <h1>Leaderboard!</h1>
                {
                    players.map((player)=>{
                        return(
                            <div key={player.id}>
                                <Link to={`/leaderboard/${player.id}`}><p>{player.username}</p></Link>
                            </div>
                        );
                    })
                }
                <Link to='/create-player'><button>Add player</button></Link>
            </div>
        );
    } 
};

export default Leaderboard;