import { useState } from "react";
import MTR from "../../components/MTR";
import KMB from "../../components/KMB";
import axios from "axios";

export default function Home() {

  const [modeSelect, setModeSelect] = useState(true)

  const [routeDataArray, setRouteDataArray] = useState([])
  const [stopDataArray, setStopDataArray] = useState([])

  const getKMBdata = () => {
    if (routeDataArray.length == 0) {
    axios.get('https://data.etabus.gov.hk/v1/transport/kmb/route/')
    .then(data=>{
        data.status == 200 ? 
        setRouteDataArray(data.data.data)
        : 
        null
    })
    .catch(err=>console.log(err))
  }
  if (stopDataArray.length == 0) {
    axios.get('https://data.etabus.gov.hk/v1/transport/kmb/stop')
    .then(data=>{
        data.status == 200 ? 
        setStopDataArray(data.data.data)
        : 
        null
    })
    .catch(err=>console.log(err))
  }
}

  const ChangeModeFunction = () => {
    setModeSelect(!modeSelect)
    getKMBdata()
  }

  return (
    <div>
      <div className="p-2 flex justify-between items-center">
        <button 
        onClick={()=>ChangeModeFunction()}
        className="border-2 text-2xl p-2 bg-blue-100 cursor-pointer"
        title="點擊切換模式"
        >
          切換模式
        </button>
        <h2
        className="ml-3 text-xl"
        >
          Mode is {modeSelect ? 'MTR' : 'KMB'}.
        </h2>
      </div>
      <hr></hr>
      <div> 
        {modeSelect ? 
        <MTR /> 
        : 
        routeDataArray.length > 0 && stopDataArray.length > 0 ? 
        <KMB routeDataArray={routeDataArray} stopDataArray={stopDataArray} /> 
        :
        <p>KMB資料尚未能完整讀取,請重新轉換mode以再次進行.</p>
        }
      </div>
    </div>
  );
}
