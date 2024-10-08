import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import video from "../assets/winner.mp4"

const Winner = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userCount = queryParams.get('user');
    const compCount = queryParams.get('comp');
    let [msg, setMsg] = useState("")
    let navigate=useNavigate()

    let newGame=()=>{
        navigate("/")
    }

    useEffect(() => {
        if (userCount > compCount) {
            setMsg("You won the game")
        }
        else if (userCount < compCount) {
            setMsg("You lost the game")
        }
        else {
            setMsg("Match is draw please start again")
        }
    }, [])
    return (
        <div className='flex flex-col justify-center items-center w-[100vw] sm:h-[89.8vh] gap-8 bg-black h-[88.6vh]'>
            {msg === "You won the game" ? (
                <div className='h-full flex flex-col justify-center items-center'>
                    <div className='w-[100vw] h-full flex justify-center'>
                        <video className='w-[100vw] h-full rounded-lg' autoPlay loop muted>
                            <source src={video} type='video/mp4' className='h-full' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='absolute bottom-[250px] text-white w-full flex flex-col justify-center items-center gap-4'>
                        <p className='text-[20px] font-bold text-center'>You: {userCount}</p>
                        <p className='text-[20px] font-bold text-center'>Computer: {compCount}</p>
                        <h1 className='text-[20px] font-bold text-center'>{msg}</h1>
                        
                    </div>
                    <button className='text-white absolute bottom-[150px] p-3 bg-blue-800 font-bold rounded-xl' onClick={newGame}>Net Game</button>
                </div>
            ) :
                <div className='text-white flex flex-col justify-center items-center gap-4'>
                    <p className='text-[20px] font-bold text-center'>You: {userCount}</p>
                    <p className='text-[20px] font-bold text-center'>Computer: {compCount}</p>
                    <h1 className='text-[20px] font-bold text-center'>{msg}</h1>
                    <button className='text-white absolute bottom-[150px] p-3 bg-blue-800 font-bold rounded-xl' onClick={newGame}>Net Game</button>
                </div>

            }

        </div>
    )
}

export default Winner