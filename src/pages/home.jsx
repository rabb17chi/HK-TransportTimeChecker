'use client'

import { useMemo, useState } from "react";
import MTR from "../components/MTR";
import KMB from "../components/KMB";
import { KMB_StopRawData } from "../../usefulData/KMB_StopRawData";
import { KMB_RouteRawData } from "../../usefulData/KMB_RouteRawData";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [modeSelect, setModeSelect] = useState(true)

  const memoizedMTR = useMemo(()=> <MTR />)

  const [routeDataArray, setRouteDataArray] = useState([])
  const [stopDataArray, setStopDataArray] = useState([])

  const getKMBdata = async () => {
    setRouteDataArray(KMB_RouteRawData.data)
    setStopDataArray(KMB_StopRawData.data)
//     try {
//       if (routeDataArray.length === 0) {
//       const routeResponse = await axios.get('https://data.etabus.gov.hk/v1/transport/kmb/route')
//       if (routeResponse.status === 200) {
//         setRouteDataArray(routeResponse.data.data)
//       }
//      }
     
//       if (stopDataArray.length === 0 ){
//         const stopResponse = await axios.get('https://data.etabus.gov.hk/v1/transport/kmb/stop')
//         if (stopResponse.status === 200) {
//           setStopDataArray(stopResponse.data.data)
//         }
//       }
// } catch (err) {
//       console.log("Error with fetching KMB Data:",err)
//   }
}


  const ChangeModeFunction = async () => {
    try {
      setIsLoading(true)
      if (modeSelect && (routeDataArray.length === 0 || stopDataArray.length === 0 )) {
        await getKMBdata()
      }
      setModeSelect(!modeSelect)
    } catch (err) {
      console.log('err in mode-changing',err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>

      <div className="p-2 flex justify-between items-center sticky top-0 z-10 bg-amber-200">
        <button className="border-2 text-2xl p-2 bg-blue-100 cursor-pointer hover:bg-blue-700 hover:text-white hover:border-black"
        onClick={()=>ChangeModeFunction()}
        title="切換模式"
        disabled={isLoading}
        >
          {isLoading ? '切換中...' : "切換模式"}
        </button>
        <h2 className="ml-3 text-xl">
          Mode is {modeSelect ? 'MTR' : 'KMB'}.
        </h2>
      </div>

        {modeSelect ? 
        (memoizedMTR)
        : 
        (<KMB routeDataArray={routeDataArray} stopDataArray={stopDataArray} />)
        }

    </div>
  );
}
