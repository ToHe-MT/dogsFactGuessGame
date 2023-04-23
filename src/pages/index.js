import React, { useState, useEffect } from 'react';
import PlayPages from './PlayPages';
import Start from './Start';
import End from './End';
const Home = () => {
    const [isStart, setStart] = useState(true);
    const [isPlay, setPlay] = useState(true);


    const [Count, setCount] = useState(0);
    const [Score, setScore] = useState(0);

    function restart(){
        window.location.reload();
    }

    if (isStart ===true){
        return (
            <>
                <link href='https://fonts.googleapis.com/css2?family=DynaPuff:wght@400&display=swap' rel='stylesheet' type='text/css'></link>
                <Start setStart={setStart}/>
            </>
        )
    } else if (isPlay===true){
        return(
            <div className='text-white'>
                <link href='https://fonts.googleapis.com/css2?family=DynaPuff:wght@400&display=swap' rel='stylesheet' type='text/css'></link>
                <PlayPages Count={Count} Score={Score} setCount={setCount} setScore={setScore} setPlay={setPlay}/>
            </div>
        )
    } else {
        return(
            <>
                <link href='https://fonts.googleapis.com/css2?family=DynaPuff:wght@400&display=swap' rel='stylesheet' type='text/css'></link>
                <End Score={Score} restart={restart}/>
            </>
        )
    }
}

export default Home;