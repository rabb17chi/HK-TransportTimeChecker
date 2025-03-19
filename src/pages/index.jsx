import { useState } from "react";
import MTR from "../../components/MTR";
import KMB from "../../components/KMB";

export default function Home() {

  const [modeSelect, setModeSelect] = useState(true)

  return (
    <>
    <div>
      <button 
      onClick={()=>setModeSelect(!modeSelect)}
      style={{fontSize:20}}
      >
        switch mode
      </button>
      <h1 
      style={{display:'inline', marginLeft:10}}
      >
        Mode is{modeSelect ? ' MTR.' : ' KMB.'}
      </h1>
    </div>
    <hr></hr>
    <div> 
      {modeSelect ? <MTR /> : <KMB />}
    </div>
    </>
  );
}
