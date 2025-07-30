import React, { useState } from 'react'

const Team = () => {
    const [team,setTeam] = useState(0);
    const handleTeam = () =>{
    const newTeam = team + 1;
    setTeam(newTeam)
    }
    const handleRemove = () =>{
        const rmvPlr = team - 1;
        setTeam(rmvPlr)

    }
  return (
    <div>
        <h1> Player Count : {team} </h1>
        <button onClick={handleTeam}>Add Player</button>
        <button onClick={handleRemove}>Remove Player</button>
    </div>
  )
}

export default Team
