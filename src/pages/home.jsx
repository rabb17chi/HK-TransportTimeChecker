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
}


  const ChangeModeFunction = async () => {
    try {
      setIsLoading(true)
      if (modeSelect && (routeDataArray.length === 0 || stopDataArray.length === 0 )) {
        await getKMBdata()
      }
      setModeSelect(!modeSelect)
    } catch (err) {
      console.error('err in mode-changing',err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>

      <div className="p-2 flex justify-between items-center sticky top-0 z-10 bg-amber-200">
        <div className="flex-1">
        <button className="border-2 text-2xl p-2 bg-blue-100 cursor-pointer"
        onClick={()=>ChangeModeFunction()}
        title="切換模式"
        disabled={isLoading}
        >
          {isLoading ? '切換中...' : "切換模式"}
        </button>
        
        </div>
        <h2 className="text-xl">
          Mode: <span className="underline underline-offset-4 text-red-500">{modeSelect ? 'MTR' : 'KMB'}</span>
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
