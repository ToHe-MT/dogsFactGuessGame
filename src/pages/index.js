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
        // <div className='text-white'>
        //     <div className="grid">
        //     <h1 className="text-center my-2 mt-8"> Congratulations, you got {Score} out of 5 questions </h1>
        //     <p className="text-center my-2"> You Score {Score * 20} out of 100 points </p>
        //     <button className=' mt-2 width-100 mx-auto btn btn--primary' onClick={restart}>Restart</button>
        //     </div>
        //     <div className='closing mx-40' >
        //     <p align="justify">Hey there, my name is Theo and I'm learning web development. Project made aimed to practice in using APIs and asynchronous JavaScript, and also to explore some of the tools I've learned, so I decided to build this website.</p>
        //     <br/><p align="justify">This isn't a code-along project, so everything you see here was created by me. I chose to make it a single-page website to test my ability to use React's `State` feature. Here is the tools that I used</p>
        //     <div className='flex flex-row'>
        //         <img className='max-h-16 btn btn--secondary m-3' src="https://cdn.cdnlogo.com/logos/t/34/tailwind-css.svg"/>
        //         <img  className='max-h-16 btn btn--secondary m-3' src="https://cdn.cdnlogo.com/logos/r/85/react.svg"/>
        //     </div>
        //     <p align="justify">You might notice that all the answers are true, but that's not a bug - it's because the API I used only returns facts, not myths.</p>
        //     <p align="justify">To be honest, I didn't spend a lot of time brainstorming ideas for this project, but I wanted to make it into a game to make it more engaging. I know it might not be the best idea, but I'm always open to feedback and suggestions for improvement.</p>
        //     <p align="justify">If you're interested in learning more about the project, I've created a video where I explain the code, and you can also check out my GitHub and LinkedIn for more information and to see what else I'm working on.</p>
        //     <p align="justify">Let me know if you have any questions or suggestions for how I can make this project even better!</p>
        //     </div>
        //     <footer>
        //     <p className='text-right m-10 mr-40 mt-40'>by Theo Millard</p>
        //     <a href=''><img src="github-mark.svg"/></a>
        //     </footer>
        //     <video src='/'></video>
        // </div>
        <End Score={Score} restart={restart}/>
        )
    }
}

export default Home;