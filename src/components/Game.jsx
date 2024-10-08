import React, { useState } from 'react'
import Msg from "./Msg"
import { useNavigate } from 'react-router-dom'

const Game = () => {
    let [turn,setTurn]=useState("")
    let [arr,setArr]=useState(["rock","paper","scissors"])
    let [userCount,setUserCount]=useState(0)
    let [compCount,setCompCount]=useState(0)
    let [msg,setMsg]=useState("Pick your move")
    let [count,setCount]=useState(0)
    let navigate=useNavigate()


    let compTurn=()=>{
        let key=Math.floor(Math.random()*3)
        return key
    }
   

    let handleWinner=()=>{
        let comp=compTurn()
        if(turn===arr[comp]){
            setMsg("Match draw")
        }
        else if(turn==="rock"){
            if(arr[comp]==="paper"){
                setMsg("you lost. Paper beats rock")
                setCompCount(compCount=compCount+1)
            }
            else{
                setMsg("you won! rock beats scissors")
                setUserCount(userCount=userCount+1)
            }
        }
        else if(turn==="paper"){
            if(arr[comp]==="rock"){
                setMsg("you won! paper beats rock")
                setUserCount(userCount=userCount+1)
            }
            else{
                setMsg("you lost. Scissors beats paper")
                setCompCount(compCount=compCount+1)
            }
        }
        else{
            if(arr[comp]==="rock"){
                setMsg("you lost. rock beats Scissors")
                setCompCount(compCount=compCount+1)
            }
            else{
                setMsg("you won! scissors beats paper")
                setUserCount(userCount=userCount+1)
            }
        }
    }

    if(count===10){
        navigate(`/winner?user=${userCount}&comp=${compCount}`)
    }
    

    let handleRock=()=>{
        setTurn("rock")
        
        handleWinner()
        setCount(count=count+1)
    }
    let handlePaper=()=>{
        setTurn("paper")
        
        handleWinner()
        setCount(count=count+1)
    }
    let handleScissors=()=>{
        setTurn("scissors")
        
        handleWinner()
        setCount(count=count+1)
    }
  return (
    <div className='bg-yellow-200'>
        <div className='w-full h-[30vh] flex justify-center items-center gap-4'>
            <button className='text-[50px] border-solid border-2 rounded-full p-2 bg-pink-500 hover:border-blue-800 sm:text-[80px]' onClick={handleRock}>👊</button>
            <button className='text-[50px] border-solid border-2 rounded-full p-2 bg-pink-500 hover:border-blue-800 sm:text-[80px]' onClick={handlePaper}>✋</button>
            <button className='text-[50px] border-solid border-2 rounded-full p-2 bg-pink-500 hover:border-blue-800 sm:text-[80px]' onClick={handleScissors}>✌️</button>
        </div>

        <div className='w-full h-[20vh] flex justify-center items-center gap-6 sm:gap-16'>
            <div className='flex flex-col items-center'>
                <p className='text-[40px]'>{userCount}</p>
                <p className='text-[30px]'>You</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-[40px]'>{compCount}</p>
                <p className='text-[30px]'>Comp</p>
            </div>
        </div>

        <Msg props={msg}/>
    </div>
  )
}

export default Game