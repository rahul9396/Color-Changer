import {useState} from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("olive");
  return (
    <>
    <div className = "w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={()=>setColor("red")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("olive")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-3 py-1 rounded-3xl text-black shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("indigo")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={()=>setColor("violet")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("black")} className='outline-none px-3 py-1 rounded-3xl text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
