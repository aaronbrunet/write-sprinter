import React, { useState, useEffect } from 'react'


function App() {
  const [time,setTime] = useState(0)
  const [text,setText] = useState('Write in me!')
  const [count,setCount] = useState(text.trim().split(' ').length)
  
  useEffect(()=>{
    text === '' ? setCount(0) : setCount(()=>text.trim().split(' ').length)
  },[text])

  return (
    <div className='w-screen h-screen flex items-center justify-center align-middle'>
      <div className='container w-1/2 h-3/4 p-6 m-auto shadow '>
        <div id='button-row' className='flex flex-row w-full align-middle justify-center items-center mb-6'>
          <input onChange={(e)=>setTime(e.target.value)} type='number' value={time} className='inline-flex'/> 
          <div className='inline-flex align-middle'>minutes</div>
          <button className='inline-flex btn btn-primary mx-2'>Start</button>
          <button className='inline-flex btn btn-primary mx-2'>Stop</button>
          <button className='inline-flex btn btn-primary mx-2'>Reset</button>
        </div>
        <div className='flex flex-row w-full items-center justify-center'>Wordcount: {count}</div>
        <div id='editor-row' className='flex flex-row w-full h-full overflow-hidden'>
          {/* <div onChange={(e)=> setText(...text, e.target.value)} id='editor' contentEditable className='h-full w-full'>{text}</div> */}
          <textarea onChange={(e)=>setText(()=>e.target.value)} value={text} className='flex flex-row h-full w-full'/>
        </div>
      </div>
    </div>
  );
}

export default App;
