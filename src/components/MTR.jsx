// import '../src/app/globals.css'

import React, { useMemo, useRef, useState } from 'react'

import StationButton from './MTR-map/StationButton'
import { stationNameList } from '../../usefulData/MTR_stationNameList'
import ListDisplayBlock from './MTR-map/ListDisplayBlock'

const MTR = () => {
    const nameList = stationNameList
    const [stationInfoObject,setStationInfoObject] = useState([])

    const imageRef = useRef(
        <img
            width={800}
            height={800}
            src="/MTR_Map.svg"
            alt="MTR full map."
            onContextMenu={(e) => {
                e.preventDefault();
                return false;
            }}
            onPointerDown={(e) => {
                e.preventDefault();
                return false;
            }}
        />
    )
  return (
    <>
        <div id="mtr-map" className='w-full max-w-[800px] overflow-scroll border-4 border-black'>
            <div className='w-[800px] relative'>

                {imageRef.current}
                
                {nameList.map((ListItem,index)=>
                    <StationButton 
                    id={ListItem} 
                    key={`${ListItem}_${index}`} 
                    setAction={setStationInfoObject} 
                    />
                )}

            </div>
        </div>


        <ListDisplayBlock 
        id='ListDisplayBlock'
        data={stationInfoObject} />
    </>
  )
}

export default React.memo(MTR);