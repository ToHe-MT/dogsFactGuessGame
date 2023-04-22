import React, { useState, useEffect } from 'react'
import LoadingSpinner from './Loading';

const PlayPages = ({Count,Score,setCount,setScore,setPlay}) => {
    const [picture, setPicture] = useState("");
    const [fact, setFact] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [isCorrect, setCorrect] = useState(undefined);
    
    function countHandlers(){
        setCount((prevCount) => prevCount + 1);
    }
    function scoreHandlers(){
        setScore((Score)=>Score+1);
    } 
    //Boolean
    function correctHandlers(element){
        setCorrect(element)
    }
    
    function togglePlay(){
        setPlay(prevState => !prevState);
    }

    function checkCount(){
        if (Count===4){
            togglePlay();
        } else {
            getAPI()
        }
    }

    async function factsClicked(){
        await countHandlers();
        await scoreHandlers();
        await correctHandlers(true)
        await checkCount()
    }

    async function mythsClicked(){
        await countHandlers();
        await correctHandlers(false)
        await checkCount();
    }

    const getAPI = async () => {
        try {
            setLoading(true)
            const resp = await fetch("https://dog.ceo/api/breeds/image/random");
            const resp2 = await fetch("https://dogapi.dog/api/v2/facts?limit=40");
            const data = await resp.json();
            const data2 = await resp2.json();
            const picture = data.message;
            const fact = data2.data[0].attributes.body;
            await setFact(fact);
            await setPicture(picture);
            setLoading(false)
        } catch (e) {
            console.log("error getting API")
        }
    }

    useEffect(() => {
        getAPI();
    }, []);

    if (isLoading) {
        return (
            <>
                <LoadingSpinner isCorrect={isCorrect}/>
            </>
        )
    } else {
        return (
            <>
            <h1 className='text-center mt-8 mb-6 text-2xl'> Dog's MYTHS or FACTS Quiz</h1>

            <p className='mx-auto text-center mt-3 mb-2 text-2xl'>Chances = {Count}/5 </p>

            <img src={picture} alt="Dog Pictures" className='mx-auto max-h-80'></img>
            <h2 className='text-center mt-10 mx-10 text-xl'> {fact} </h2>
            <div className='flex flex-row mt-6 mb-4 text-xl'>
                    <button 
                        onClick={factsClicked} 
                        className='ml-auto btn btn--primary' >
                    FACTS 
                    </button>
                    <p className='mx-10 my-auto'> Or </p>
                    <button 
                        onClick={mythsClicked} 
                        className='mr-auto btn btn--secondary' >
                    MYTHS 
                    </button>
                    </div>

                    <p className='mx-auto text-center text-xl'>Correct = {Score}/5</p>
                    <p className='mx-auto text-center text-xl'>Score = {Score*20}/100</p>
            </>
        );
    }
}

export default PlayPages;