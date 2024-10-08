import React from 'react'
import { useState,useEffect } from 'react';

const Msg = (props) => {
    let msg=props.props

    const [bgColor, setBgColor] = useState('bg-blue-800');

    useEffect(() => {
      if (msg === 'you won! rock beats scissors'||msg==="you won! paper beats rock"||msg==="you won! scissors beats paper") {
        setBgColor('bg-green-800');
      } else if (msg === 'you lost. Paper beats rock'||msg==="you lost. Scissors beats paper"||msg==="you lost. rock beats Scissors") {
        setBgColor('bg-red-800');
      }else if(msg==="Pick your move"){
        setBgColor('bg-blue-800')
      }
       else {
        setBgColor('bg-yellow-600');
      }
    }, [props.props]);

  return (
    <div>
        <div className='w-full h-[270px] flex justify-center items-center sm:h-[312px]'>
        <button className={`p-3 text-white rounded-xl text-[20px] font-bold ${bgColor} hover:bg-blue-700`}>
          {msg}
        </button>
        </div>
    </div>
  )
}

export default Msg