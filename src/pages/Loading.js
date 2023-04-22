import React from "react";

export default function LoadingSpinner(isCorrect) {
        return (
        <>
            <div className="spinner-container mx-auto mt-20 text-white text-xl text-center">
                {isCorrect.isCorrect===undefined? <></>: isCorrect.isCorrect?
                    <>
                        <h1 className="mt-40"> Correct, It is indeed a Fact! +20 Points </h1>
                    </>
                    : 
                    <>
                        <h1 className="mt-40"> Wrong! It is a Fact! </h1>
                    </>
                }
            <div className="loading-spinner">
            </div>
            </div>
        </> 
    )
}
