import React, { useState, useEffect } from 'react'


function App() {
  const [time,setTime] = useState(0)
  const [seconds,setSeconds] = useState(0)
  const [text,setText] = useState('')
  const [count,setCount] = useState(text.trim().split(' ').length)
  const [running,setRunning] = useState(false)
  const [paused,togglePaused] = useState(false)
  const [completed,setCompleted] = useState(null)
  
  useEffect(()=>{
    text === '' ? setCount(0) : setCount(()=>text.trim().split(' ').length)
  },[text])

  useEffect(()=>{
    if(seconds>0 && running){
      setTimeout(()=>{
        setSeconds(seconds - 1)
      },1000)
    }
    if(seconds===0 && running){
      setCompleted(true)
      setRunning(false)
    }
  },[seconds,running])

  return (
    <div className='w-screen h-screen flex items-center justify-center align-middle'>
      <div className='container w-1/2 h-3/4 p-6 m-auto shadow '>
        <div id='button-row' className='flex flex-row w-full align-middle justify-center items-center mb-6'>
          <input onChange={(e)=>setTime(e.target.value)} type='number' value={time} className={`inline-flex ${(running||paused) && `bg-gray-200`}`} readOnly={(running||paused)}/> 
          <div className='inline-flex align-middle'>{parseInt(time)===1 ? 'minute' : 'minutes'}</div>
          {(running||paused) ?
          <button onClick={()=>{setSeconds(0);setRunning(false);setCompleted(null);togglePaused(false)}} className='inline-flex btn btn-primary mx-2' disabled={!(running||paused)}>Stop</button>
          :
          <button onClick={()=>{setText('');setSeconds(time*60);setRunning(true);setCompleted(false);togglePaused(false)}} className='inline-flex btn btn-primary mx-2'>Start</button>
          }
          <button onClick={()=>{setRunning(()=>!running);togglePaused(()=>!paused)}} className='inline-flex btn btn-primary mx-2' disabled={!(running||paused)}>{paused ? 'Resume' : 'Pause'}</button>
          <button onClick={()=>{setTime(0);setSeconds(0);setRunning(false);setCompleted(null);togglePaused(false)}} className='inline-flex btn btn-primary mx-2'>Reset</button>
        </div>
        <div className='flex flex-row w-full'>{(running||paused) && `${seconds} second`}{(running||paused) && seconds>1 && 's'}</div>
        <div className='flex flex-row w-full'>{running && 'Running!'}{paused && 'Paused!'}{completed && 'Completed!'}</div>
        <div className='flex flex-row w-full items-center justify-center'>{(running||paused||completed) && `Wordcount: ${count}`}</div>
        <div id='editor-row' className='flex flex-row w-full h-full overflow-hidden'>
          {/* <div onChange={(e)=> setText(...text, e.target.value)} id='editor' contentEditable className='h-full w-full'>{text}</div> */}
          <textarea onChange={(e)=>setText(()=>e.target.value)} placeholder={running ? 'Get started!' : 'Start the timer to begin writing!'} value={text} className={`flex flex-row h-full w-full ${!running && `bg-gray-200`}`} readOnly={!running}/>
        </div>
      </div>
    </div>
  );
}

export default App;
