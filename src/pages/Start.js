

export default function Start({setStart}){

    function toggleStart() {
        setStart((isStart)=>!isStart)
    }
    return(
        <>
            <div className='text-white text-xl'>
                <h1 className='text-center my-10 italic font-bold text-3xl text-teal-500 '>Dog's MYTHS or FACTS Quiz</h1>
                <p className='text-center mx-5 mb-3'>You will be given a facts, you must guess if it is a myths or a facts
                <br/>You will be given 5 Chances </p>
                <p className='text-center mx-5'>PS: The Picture does nothing to do with the facts</p>
            <div className="flex flex-row">
                <button className='mx-auto text-center btn btn--primary m-10 text-2xl' onClick={toggleStart}>
                    Start!
                </button>
            </div>
            </div>
        </>
    )

    
}   