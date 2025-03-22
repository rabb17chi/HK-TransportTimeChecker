import '../src/app/globals.css'

import React, { useEffect, useState } from 'react'

import StationButton from './MTR-map/StationButton'
import { stationNameList } from '../usefulData/MTR_stationNameList'
import ListDisplayBlock from './MTR-map/ListDisplayBlock'

const MTR = () => {
    const nameList = stationNameList

    const [stationInfoObject,setStationInfoObject] = useState([])

useEffect(()=>{
    console.log('MTR Page Loaded.')
},[])
  return (
    <>
        <div id="mtr-map" className='w-[full] max-w-[800px] overflow-scroll'>
            <div className='w-[800px] relative'>
                <img src='./MTR_Map.svg' className='max-w-[800px] w-auto h-full' alt='MTR full map.' />
                {
                nameList.map((ListItem,index)=>
                    <StationButton 
                    id={ListItem} 
                    key={`${ListItem}_${index}`} 
                    setAction={setStationInfoObject} 
                    />
                )}
            </div>
        </div>


        <ListDisplayBlock data={stationInfoObject} />
    </>
  )
}

export default MTR