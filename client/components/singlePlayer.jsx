import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setSelectedPlayer } from '../store/gameSlice'

const SinglePlayer = () => {
    const player = useSelector((state)=>state.game.selectedPlayer);
    const dispatch = useDispatch();
    const { playerId } = useParams(); // getting the playerId that was passed into the URL from Leaderboard component
    const [loading,setLoading] = useState(true);

    const getPlayer = async () =>{
        const response = await axios.get(`/api/players/${playerId}`);
        dispatch(setSelectedPlayer(response.data));
        setLoading(false);
    };

    useEffect(() =>{
        getPlayer();
    }, []);

    if(loading){
        return <p>Loading...</p>;
    }else{
        return (
            <div>
                <p>{player.username}</p>
                {
                    player.games.map((game)=>{
                        return(
                            <p key={game.id}>Game ID: {game.id} Result: {game.result}</p>
                        )
                    })
                }
            </div>
        );
    };
};

export default SinglePlayer;