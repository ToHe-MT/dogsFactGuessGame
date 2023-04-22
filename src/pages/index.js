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
            <Start setStart={setStart}/>
        )
    } else if (isPlay===true){
        return(
            <div className='text-white'>
                <PlayPages Count={Count} Score={Score} setCount={setCount} setScore={setScore} setPlay={setPlay}/>
            </div>
        )
    } else {
        return(
        <End Score={Score} restart={restart}/>
        )
    }
}

export default Home;