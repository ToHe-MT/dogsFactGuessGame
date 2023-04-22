import "../../public/github-mark-white.png"
const End = ({Score,restart}) =>{
    return(
        <>
            <div className='text-white text-lg'>
                <div className="grid">
                    <h1 className="text-center my-2 mt-8"> Congratulations, you got {Score} out of 5 questions </h1>
                    <p className="text-center"> You Score {Score * 20} out of 100 points </p>
                    <button className=' my-4 width-100 mx-auto btn btn--primary' onClick={restart}>Restart</button>
                    <ul className='flex justify-evenly mx-40'>
                        <li>
                            <img  className='max-h-16 p-3'  src="https://cdn.cdnlogo.com/logos/r/63/react.svg"/>
                        </li>
                            <img className='max-h-16 p-3' src="https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg"/>
                        <li>
                            <img  className='max-h-16 p-3' src="https://cdn.cdnlogo.com/logos/h/90/html-5.svg"/>
                        </li>
                        <li>
                            <img  className='max-h-16 p-3'  src="https://cdn.cdnlogo.com/logos/c/85/css10.svg"/>
                        </li>
                            <img  className='max-h-16 p-3' src="https://cdn.cdnlogo.com/logos/j/33/javascript.svg"/>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center mx-20 my-10">
                    <h1 className="text-4xl font-bold  mb-4">
                        Hi, thanks for checking out my project!
                    </h1>
                    <p className="text-lg mb-8">
                        My name is Theo and I'm learning web development. The objective of creating this project was to practice using APIs and asynchronous JavaScript, and to explore some of the tools I've learned which I stated up.
                    </p>
                    <p className="text-lg mb-8">
                        This isn't a code-along project, so everything you see here was created by me. I chose to make it a single-page website to test my ability to use React's State feature.
                    </p>
                    <p className="text-lg mb-8">
                        You might notice that all the answers are true, but that's not a bug - it's because the API I used only returns facts, not myths. I didn't spend a lot of time brainstorming ideas for this project, I know it might not be the best idea, but I'm always open to feedback and suggestions for improvement.
                    </p>
                    <div className="flex flex-row space-x-4 mb-8">
                        <div className="bg-white">    
                        <a href="https://github.com/ToHe-MT/dogsGuessingGame" target="_blank" rel="noopener noreferrer">
                            <img
                            src="https://cdn.cdnlogo.com/logos/g/60/github-icon.svg"
                            alt="GitHub"
                            className="w-8 h-8"
                            />
                        </a>
                        </div>
                            <span className="text-lg">
                            Check out the project on GitHub
                            </span>
                    </div>
                    <div className="flex flex-row space-x-4 mb-8">
                        <a href="https://www.linkedin.com/in/theo-millard-245860167/" target="_blank" rel="noopener noreferrer">
                            <img
                            src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"
                            alt="LinkedIn"
                            className="w-8 h-8"
                            />
                        </a>
                        <span className="text-lg">
                        Connect with me on LinkedIn
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default End;