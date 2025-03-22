import { useState } from "react";
import MTR from "../../components/MTR";
import KMB from "../../components/KMB";

export default function Home() {

  const [modeSelect, setModeSelect] = useState(true)

  return (
    <div>
      <div>
        <button 
        onClick={()=>setModeSelect(!modeSelect)}
        style={{fontSize:18}}
        >
          switch mode
        </button>
        <h2
        style={{display:'inline', marginLeft:10}}
        >
          Mode is {modeSelect ? 'MTR' : 'KMB'}.
        </h2>
      </div>
      <hr></hr>
      <div> 
        {modeSelect ? <MTR /> : <KMB />}
      </div>
    </div>
  );
}
