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
      <h1 className='text-3xl justify-center text-center mb-4'>Write Like The Wind</h1>
        <div id='input-row' className='flex flex-row w-full align-middle justify-center items-center mb-6'>
          <input onChange={(e)=>setTime(e.target.value)} type='number' max={60} value={time} className={`inline-flex ${(running||paused) && `bg-gray-200`}`} readOnly={(running||paused)}/> 
          <div className='inline-flex align-middle'>{parseInt(time)===1 ? 'minute' : 'minutes'}</div>
        </div>
        <div id='button-row' className='flex flex-row w-full align-middle justify-center items-center mb-6'>
          {(running||paused) ?
          <button onClick={()=>{setTime(0);setSeconds(0);setRunning(false);setCompleted(null);togglePaused(false)}} className='inline-flex btn btn-primary mx-2' disabled={!(running||paused)}>Stop</button>
          :
          <button onClick={()=>{setText('');setSeconds(time*60);setRunning(true);setCompleted(false);togglePaused(false)}} className='inline-flex btn btn-primary mx-2'>Start</button>
          }
          <button onClick={()=>{setRunning(()=>!running);togglePaused(()=>!paused)}} className='inline-flex btn btn-primary mx-2' disabled={!(running||paused)}>{paused ? 'Resume' : 'Pause'}</button>
          <button onClick={()=>{setTime(0);setSeconds(0);setRunning(false);setCompleted(null);togglePaused(false)}} className='inline-flex btn btn-primary mx-2'>Reset</button>
        </div>
        <div id='status' className='items-center align-middle justify-center'>
        <div className='flex flex-row w-full items-center align-middle justify-center'>
          {((running||paused) && seconds > 0) ? (
          seconds>59 ? `${(Math.floor(seconds/60)<10) ? `0`:``}${Math.floor(seconds /60)}:${(seconds%60<10) ? `0`:``}${seconds % 60}`: `00:${seconds}`
        ): '00:00'
        }
        </div>
        <div className='flex flex-row w-full items-center align-middle justify-center'>{running && 'Running!'}{paused && 'Paused!'}{completed && 'Completed!'}</div>
        <div className='flex flex-row w-full items-center align-middle justify-center'>{(running||paused||completed) && `Wordcount: ${count}`}</div>
        </div>
        <div id='editor-row' className='flex flex-row w-full h-full overflow-hidden'>
          {/* <div onChange={(e)=> setText(...text, e.target.value)} id='editor' contentEditable className='h-full w-full'>{text}</div> */}
          <textarea onChange={(e)=>setText(()=>e.target.value)} placeholder={running ? 'Get started!' : 'Start the timer to begin writing!'} value={text} className={`flex flex-row h-1/2 w-full overflow-y-scroll my-4 ${!running && `bg-gray-200`}`} readOnly={!running}/>
        </div>
      </div>
    </div>
  );
}

export default App;
